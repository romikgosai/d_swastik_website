import { NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Get Discord webhook URL from environment
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl || webhookUrl.includes('YOUR_WEBHOOK_ID')) {
      console.warn('Discord webhook URL not configured');
      // Still return success to user, but log warning
      return NextResponse.json(
        {
          success: true,
          message: 'Message received! (Discord notification not configured)',
        },
        { status: 200 }
      );
    }

    // Create Discord embed for nice formatting
    const embed = {
      title: '📨 New Contact Form Submission',
      color: 0x00b894, // Nice green color
      fields: [
        {
          name: '👤 Name',
          value: name,
          inline: true,
        },
        {
          name: '📧 Email',
          value: email,
          inline: true,
        },
        {
          name: '📱 Phone',
          value: phone || 'Not provided',
          inline: true,
        },
        {
          name: '📝 Message',
          value: message.slice(0, 1024), // Discord has 1024 char limit per field
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: 'D. Swastik Website Contact Form',
      },
    };

    // Add a second embed if message is longer than 1024 characters
    const additionalEmbeds = [];
    if (message.length > 1024) {
      additionalEmbeds.push({
        color: 0x00b894,
        description: message.slice(1024, 2048), // Continue message (max 4096 total)
      });
    }

    // Send to Discord webhook
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: null,
        embeds: [embed, ...additionalEmbeds],
      }),
    });

    if (!response.ok) {
      console.error('Discord webhook failed:', await response.text());
      throw new Error('Failed to send Discord notification');
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
