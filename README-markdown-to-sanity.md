# Markdown to Sanity Converter

This utility allows you to automatically convert markdown files to Sanity CMS posts. Simply create markdown files with the proper frontmatter, place them in the `content` folder, and run the script to upload them to Sanity.

## How It Works

1. Create markdown files with proper frontmatter (metadata)
2. Place them in the `content` folder
3. Run the script
4. The script will:
   - Read all markdown files in the content folder
   - Extract metadata from frontmatter
   - Create or use existing categories and author
   - Upload the content to Sanity
   - Delete the local files after successful upload (or optionally back them up)

## Markdown File Format

Your markdown files should follow this format:

```markdown
---
title: "Your Post Title"
subtitle: "Optional Subtitle"
slug: "your-post-slug"
description: "Short description for content cards"
category: "Category Name"
publishedAt: "2025-03-17"
readTime: "5 min read"
icon: "Bot"
iconColor: "from-blue-500 to-indigo-600"
---

# Your Markdown Content Here

This is the body of your post written in markdown.

## Section Title

More content here...
```

### Required Fields

- **title**: The main title of your post
- **slug**: URL-friendly identifier (no spaces, use hyphens)
- **description**: Short description for content cards
- **category**: Must match an existing category or a new one will be created

### Optional Fields

- **subtitle**: Secondary title
- **publishedAt**: Publication date (defaults to current date if not provided)
- **readTime**: Estimated reading time (e.g., "5 min read")
- **icon**: Lucide icon name (e.g., "Database", "Bot", "Globe", "Code", "Cpu", etc.)
- **iconColor**: Tailwind CSS gradient classes (e.g., "from-blue-500 to-indigo-600")

## Running the Script

```bash
node src/utility/markdownToSanity.cjs
```

## Configuration

You can modify these settings in the script:

- **MARKDOWN_FOLDER**: The folder to scan for markdown files (default: './content')
- **CREATE_BACKUPS**: Whether to keep backups of processed files (default: false)
- **BACKUP_FOLDER**: Where to store backups if enabled (default: './content-processed')

## Authentication

The script uses a Sanity token for authentication. In production, you should set this as an environment variable:

```bash
SANITY_TOKEN=your_token_here node src/utility/markdownToSanity.cjs
```

## Supported Icons

The following Lucide icons are supported in the frontend:
- Database
- Bot
- Globe
- Code
- Cpu
- Cloud
- Lock
- Smartphone
- BarChart
- Camera
- Server
- Zap

## Example Workflow

1. Write your content in your favorite markdown editor
2. Save it in the `content` folder with the proper frontmatter
3. Run the script to automatically upload it to Sanity
4. The content will appear in your ContentHub page

This workflow allows you to manage your content using markdown files and Git, while still leveraging the power of Sanity CMS for your website.
