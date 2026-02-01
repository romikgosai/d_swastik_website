# How to Add New Projects

This guide explains how to add new construction projects to your website.

## Quick Start

Adding a project is as simple as creating a folder with a JSON file and images!

### Step 1: Create a Project Folder

Navigate to `public/projects/` and create a new folder with your project's name using lowercase letters and hyphens:

```
public/projects/luxury-villa-estate/
```

### Step 2: Create project.json

Inside your project folder, create a file named `project.json` with this structure:

```json
{
  "id": "luxury-villa-estate",
  "title": "Luxury Villa Estate",
  "category": "Residential",
  "status": "completed",
  "description": "An exclusive residential estate featuring 20 luxury villas with panoramic views, premium amenities, and sustainable architecture.",
  "location": "Hillside District",
  "completionDate": "2024-08",
  "area": "75,000 sq ft",
  "client": "Premium Estates Group",
  "features": [
    "Panoramic city views",
    "Private swimming pools",
    "Smart home automation",
    "Gated community",
    "Eco-friendly design"
  ],
  "images": [
    "main.jpg",
    "interior.jpg",
    "exterior.jpg",
    "amenities.jpg"
  ],
  "thumbnail": "main.jpg"
}
```

### Step 3: Add Images

Add your project images to the same folder. Make sure the filenames match exactly what you specified in the JSON:

```
public/projects/luxury-villa-estate/
  ├── project.json
  ├── main.jpg
  ├── interior.jpg
  ├── exterior.jpg
  └── amenities.jpg
```

### Step 4: Done!

That's it! Your project will automatically appear on the website. No code changes needed.

## Field Reference

### Required Fields

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `id` | string | Unique identifier (lowercase with hyphens) | `"luxury-villa-estate"` |
| `title` | string | Display name of the project | `"Luxury Villa Estate"` |
| `category` | string | Type of project | `"Residential"`, `"Commercial"`, `"Infrastructure"` |
| `status` | string | Current status | `"completed"` or `"ongoing"` |
| `description` | string | Detailed project description | Full sentence describing the project |
| `location` | string | Where the project is located | `"Hillside District"` |
| `completionDate` | string | When completed/expected (YYYY-MM format) | `"2024-08"` |
| `area` | string | Project size | `"75,000 sq ft"`, `"2,500 ft length"` |
| `client` | string | Client or organization name | `"Premium Estates Group"` |
| `features` | array | List of key features/highlights | `["Feature 1", "Feature 2"]` |
| `images` | array | List of image filenames | `["main.jpg", "photo2.jpg"]` |
| `thumbnail` | string | Main image for listings | `"main.jpg"` |

## Category Options

Choose the most appropriate category for your project:

- **Residential**: Homes, apartments, condos, estates
- **Commercial**: Offices, retail spaces, hotels
- **Infrastructure**: Bridges, roads, public facilities
- **Industrial**: Warehouses, factories, plants
- **Mixed-Use**: Projects combining multiple uses

## Status Options

- **completed**: Project is finished
- **ongoing**: Project is currently under construction

## Best Practices

### Images

1. **Quality**: Use high-resolution images (1920x1080 or larger recommended)
2. **Format**: JPG or PNG formats work best
3. **Size**: Optimize images to under 2MB each for fast loading
4. **Naming**: Use descriptive names: `exterior-view.jpg`, `main-lobby.jpg`
5. **Quantity**: Include 3-5 images per project

### Descriptions

1. **Length**: 1-2 sentences (150-250 characters)
2. **Focus**: Highlight what makes the project unique
3. **Tone**: Professional and descriptive
4. **Format**: Complete sentences with proper grammar

### Features

1. **Quantity**: List 4-6 key features
2. **Specificity**: Be specific rather than generic
3. **Benefits**: Focus on unique selling points
4. **Format**: Short phrases or single sentences

## Examples

### Example 1: Residential Project

```json
{
  "id": "modern-townhomes",
  "title": "Modern Townhomes Collection",
  "category": "Residential",
  "status": "ongoing",
  "description": "A contemporary townhome development featuring 45 units with open floor plans, rooftop terraces, and energy-efficient systems.",
  "location": "Westside",
  "completionDate": "2025-03",
  "area": "32,000 sq ft",
  "client": "Urban Living Developers",
  "features": [
    "Open concept layouts",
    "Rooftop terraces",
    "Energy Star certified",
    "Two-car garages",
    "Walking distance to transit"
  ],
  "images": [
    "exterior.jpg",
    "kitchen.jpg",
    "rooftop.jpg"
  ],
  "thumbnail": "exterior.jpg"
}
```

### Example 2: Commercial Project

```json
{
  "id": "tech-campus",
  "title": "Tech Innovation Campus",
  "category": "Commercial",
  "status": "completed",
  "description": "A state-of-the-art technology campus with collaborative workspaces, research labs, and sustainable design achieving LEED Platinum certification.",
  "location": "Innovation District",
  "completionDate": "2024-06",
  "area": "250,000 sq ft",
  "client": "TechCorp Industries",
  "features": [
    "LEED Platinum certified",
    "Advanced data center",
    "Collaborative work zones",
    "On-site fitness center",
    "Electric vehicle charging"
  ],
  "images": [
    "campus-view.jpg",
    "workspace.jpg",
    "atrium.jpg",
    "lab.jpg"
  ],
  "thumbnail": "campus-view.jpg"
}
```

### Example 3: Infrastructure Project

```json
{
  "id": "metro-station",
  "title": "Central Metro Station",
  "category": "Infrastructure",
  "status": "completed",
  "description": "A modern underground metro station serving 50,000 daily passengers with accessible design, natural lighting, and integrated retail spaces.",
  "location": "Downtown",
  "completionDate": "2023-12",
  "area": "45,000 sq ft",
  "client": "City Transit Authority",
  "features": [
    "Fully accessible design",
    "Natural light integration",
    "Retail concourse",
    "Real-time information systems",
    "Art installations"
  ],
  "images": [
    "platform.jpg",
    "entrance.jpg",
    "concourse.jpg"
  ],
  "thumbnail": "entrance.jpg"
}
```

## Troubleshooting

### Project Not Showing Up?

1. **Check folder location**: Must be in `public/projects/`
2. **Check file name**: Must be exactly `project.json`
3. **Validate JSON**: Use a JSON validator to check for syntax errors
4. **Check ID**: Must match the folder name
5. **Rebuild**: Run `npm run build` to regenerate static pages

### Images Not Displaying?

1. **Check filenames**: Must match exactly what's in the JSON (case-sensitive)
2. **Check file location**: Images must be in the same folder as project.json
3. **Check file format**: Use .jpg, .jpeg, or .png extensions
4. **Check paths**: No spaces or special characters in filenames

### Common JSON Errors

- Missing commas between fields
- Extra comma after last field
- Missing quotes around strings
- Incorrect bracket types `[]` vs `{}`

## Need Help?

If you encounter issues:

1. Validate your JSON at [jsonlint.com](https://jsonlint.com/)
2. Check the example projects in `public/projects/`
3. Review the console for error messages when running `npm run dev`
