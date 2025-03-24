# Content Management System

This project uses a local file-based content management system instead of Sanity. This document explains how to add, edit, or remove content.

## Directory Structure

Content is organized in the following structure:

```
content/
  ├── categories.json       # List of all categories
  ├── posts/
  │   ├── post-slug/        # Each post has its own directory (named with its slug)
  │   │   ├── metadata.json # Post metadata
  │   │   ├── author.json   # Author information
  │   │   ├── index.md      # Main content in markdown
  │   │   └── assets/       # Images and other assets
  │   └── another-post/
  │       └── ...
```

## Adding a New Post

To add a new post, follow these steps:

1. Create a new directory in `content/posts/` with the slug of your post (e.g., `content/posts/my-new-post/`)

2. Create the following files in the new directory:

### metadata.json

```json
{
  "id": "my-new-post",
  "title": "My New Post Title",
  "slug": "my-new-post",
  "description": "A brief description of the post",
  "category": "Web Development",
  "icon": "Code",
  "iconColor": "from-blue-500 to-indigo-500",
  "publishedAt": "2024-03-22",
  "readTime": "5 min read",
  "subtitle": "A subtitle for the post"
}
```

Available icons: `Database`, `Bot`, `Globe`, `Code`, `Cpu`, `Cloud`, `Lock`, `Smartphone`, `BarChart`, `Camera`, `Server`, `Zap`

Available color gradients: 
- `from-blue-500 to-indigo-500`
- `from-green-500 to-emerald-500`
- `from-red-500 to-pink-500`
- `from-yellow-500 to-amber-500`
- `from-purple-500 to-violet-500`
- `from-orange-500 to-red-500`

### author.json

```json
{
  "name": "Author Name",
  "image": "assets/author.jpg"
}
```

You can use a URL for the image or a relative path to an image in the assets directory.

### index.md

This is the main content of your post in Markdown format. Example:

```md
# My New Post Title

This is the introduction paragraph for my post.

## Section 1

Content for section 1...

## Section 2

Content for section 2...

### Subsection

More content...

## Conclusion

Concluding thoughts...
```

## Updating the Categories

To add or modify categories, edit the `content/categories.json` file:

```json
[
  "Web Development",
  "API",
  "AI",
  "Security",
  "Tutorials",
  "Cloud",
  "Your New Category"
]
```

## Content Loading

The content is loaded by the `src/utility/contentLoader.ts` file, which:

1. Reads the directory structure
2. Loads and parses the JSON and Markdown files
3. Provides functions to get all posts, get a single post, and get all categories

## Implementation Notes

In the current implementation, the content is loaded from static sample data in the `contentLoader.ts` file. In a production environment, you would want to implement a more robust solution:

1. Use Vite's `import.meta.glob` to dynamically import markdown files
2. Use a backend API to serve the content
3. Use a static site generator to pre-render the content

## Markdown Features

The content supports various Markdown features:

- **Headers**: Use `#`, `##`, `###`, etc.
- **Lists**: Ordered and unordered lists
- **Code blocks**: With syntax highlighting
- **Links**: `[text](url)`
- **Images**: `![alt text](image-url)`
- **Bold/Italic**: `**bold**`, `*italic*`
- **Blockquotes**: Start lines with `>`
