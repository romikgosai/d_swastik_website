# BuildCraft - Construction Company Website

A modern, production-ready website for construction companies built with Next.js 13, TypeScript, and Tailwind CSS.

## Features

- **File-based Project Management**: Projects are managed through folders with JSON metadata
- **Dynamic Project Pages**: Automatically generated project detail pages
- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Built with shadcn/ui components
- **Performance**: Optimized with Next.js App Router and static generation

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build

```bash
npm run build
npm start
```

## Adding New Projects

Projects are managed through a simple folder structure. To add a new project:

### 1. Create Project Folder

Create a new folder in `public/projects/` with your project ID:

```
public/projects/your-project-name/
```

### 2. Add project.json

Create a `project.json` file in your project folder with the following structure:

```json
{
  "id": "your-project-name",
  "title": "Your Project Title",
  "category": "Residential|Commercial|Infrastructure",
  "status": "completed|ongoing",
  "description": "A detailed description of your project",
  "location": "Project Location",
  "completionDate": "2024-12",
  "area": "50,000 sq ft",
  "client": "Client Name",
  "features": [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ],
  "images": [
    "1.jpg",
    "2.jpg",
    "3.jpg"
  ],
  "thumbnail": "1.jpg"
}
```

### 3. Add Images

Add your project images to the same folder. The image filenames should match those specified in the `images` array.

```
public/projects/your-project-name/
  ├── project.json
  ├── 1.jpg
  ├── 2.jpg
  └── 3.jpg
```

### Example Project Structure

```
public/projects/
  └── modern-office-complex/
      ├── project.json
      ├── 1.jpg
      ├── 2.jpg
      └── 3.jpg
```

### Field Descriptions

- **id**: Unique identifier (use lowercase with hyphens)
- **title**: Display name of the project
- **category**: Project category (Residential, Commercial, Infrastructure, etc.)
- **status**: Either "completed" or "ongoing"
- **description**: Detailed project description
- **location**: Geographic location
- **completionDate**: Date in YYYY-MM format
- **area**: Project size/area
- **client**: Client or organization name
- **features**: Array of project features/highlights
- **images**: Array of image filenames
- **thumbnail**: Main image to display in listings

## Project Structure

```
.
├── app/
│   ├── page.tsx                 # Home page
│   ├── projects/
│   │   ├── page.tsx            # Projects listing
│   │   └── [id]/page.tsx       # Dynamic project detail pages
│   ├── about/page.tsx          # About page
│   └── contact/page.tsx        # Contact page
├── components/ui/              # UI components (shadcn/ui)
├── lib/
│   └── projects.ts             # Project data utilities
└── public/
    └── projects/               # Project folders with JSON and images
```

## Customization

### Branding

Update the company name and branding in:
- Header/Footer components in each page
- `app/layout.tsx` metadata

### Styling

The website uses Tailwind CSS with shadcn/ui components. Customize:
- Colors: `tailwind.config.ts`
- Global styles: `app/globals.css`

### Content

Update static content in:
- Home page: `app/page.tsx`
- About page: `app/about/page.tsx`
- Contact info: Footer sections in each page

## Technologies Used

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## License

MIT
