// Client-side content loader for local content structure

export interface PostMetadata {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  icon: string;
  iconColor: string;
  publishedAt: string;
  readTime: string;
  subtitle: string;
}

export interface Author {
  name: string;
  image: string;
}

export interface Post extends PostMetadata {
  body: string;
  author: Author;
}

// Sample data for posts
const samplePosts: PostMetadata[] = [
  {
    id: "major-ui-security-update",
    title: "Major UI Refresh and Security Enhancements: March 2024 Update",
    slug: "major-ui-security-update",
    description: "Discover the latest improvements to Sree.shop including a stunning new interface, enhanced security, powerful new features, and exciting upcoming image models in our Beta program.",
    category: "Updates",
    icon: "Zap",
    iconColor: "from-purple-500 to-violet-500",
    publishedAt: "2024-03-18",
    readTime: "8 min read",
    subtitle: "A comprehensive overview of our March 2024 update featuring UI improvements, security enhancements, and new features"
  }
];

const sampleAuthors: Record<string, Author> = {
  "major-ui-security-update": {
    name: "Sreejan",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sreejan"
  }
};

const sampleContent: Record<string, string> = {
  "major-ui-security-update": `# Major UI Refresh and Security Enhancements: March 2024 Update

We're thrilled to announce a comprehensive update to Sree.shop that introduces exciting new features, enhanced security, and significant improvements to make your AI development journey even better. Let's explore everything that's new!

## 📚 Introducing the Content Hub

One of our biggest additions is the new Content Hub! This centralized knowledge base brings you:

- **Technical Tutorials**: Step-by-step guides for implementing AI models
- **Best Practices**: Industry standards and optimization tips
- **Case Studies**: Real-world applications and success stories
- **Update Announcements**: Stay informed about new features and improvements
- **Community Insights**: Learn from other developers' experiences

The Content Hub is designed to be your go-to resource for everything from getting started to advanced implementations. Each article is carefully curated to provide maximum value for developers at all skill levels.

## 📖 Revamped Documentation

Our documentation has received a major overhaul to make it more comprehensive and user-friendly:

- **Interactive Examples**: Live code snippets you can test directly
- **API Reference**: Detailed endpoint descriptions and parameters
- **Quick Start Guides**: Get up and running in minutes
- **Integration Tutorials**: Step-by-step guides for popular frameworks
- **Troubleshooting Guide**: Common issues and their solutions
- **Best Practices**: Optimization tips and security recommendations

## 💳 Enhanced Pricing Structure

We've updated our pricing page to make it more transparent and value-focused:

- **Clearer Plan Comparisons**: Easy-to-understand feature breakdowns
- **Usage Calculators**: Estimate your costs based on expected usage
- **Flexible Options**: Scale up or down based on your needs
- **Beta Program Benefits**: Special pricing for beta features
- **Volume Discounts**: Better rates for high-volume users

## 🤖 Introducing Jarvis AI Assistant

Meet your new AI development companion! Our Jarvis AI Assistant is now available through a convenient floating button:

- **24/7 Support**: Get instant help with implementation questions
- **Code Generation**: Request example code for common tasks
- **Troubleshooting**: Quick solutions to common issues
- **API Guidance**: Understanding endpoints and parameters
- **Best Practices**: Recommendations for optimal implementation

Just click the floating Jarvis button in the bottom right corner to start getting assistance!

## 📱 Mobile Experience 2.0

The mobile experience has been completely revamped:

- **Responsive Navigation**: New hamburger menu with improved organization
- **Touch-Optimized Interface**: Larger touch targets and better spacing
- **Faster Loading**: Optimized performance for mobile devices
- **Offline Support**: Access documentation even without internet
- **Mobile-First Design**: Everything works perfectly on any screen size

## 🎨 UI Improvements

### Modern Navigation
The new header features intuitive icons for better navigation:

- **Pricing** (💳) - Transparent pricing plans
- **Models** (🗄️) - AI model marketplace
- **Documentation** (📖) - Comprehensive guides
- **Status** (📊) - System performance
- **Content Hub** (🎥) - Knowledge base

### Premium Design
- **New Logo**: Interactive gradient effects
- **Dark Mode**: Enhanced contrast and aesthetics
- **Smooth Animations**: Polished user experience
- **Consistent Styling**: Professional look across all pages

## 🚀 Beta Program Updates

Exciting news for Beta program members! Coming March 19-20, 2025:

### New Image Models
- **Enhanced Resolution**: Generate images up to 4K resolution
- **Style Control**: More precise control over artistic styles
- **Faster Generation**: 2x speed improvement
- **Commercial License**: Use in commercial projects
- **Priority Access**: Get new features first

### How to Join Beta
1. Click the "Join Beta Program" floating button
2. Fill out a quick application
3. Get instant access to beta features
4. Provide feedback to shape development

## 📜 New Legal Framework

We've added comprehensive legal documentation to protect you and your data:

### Privacy Policy
- **Data Usage**: Clear explanation of how we handle your data
- **GDPR Compliance**: Updated European privacy standards
- **Data Control**: Your rights and control over your information
- **Security Measures**: How we protect your data

### Refund Policy
- **Clear Terms**: Straightforward refund conditions
- **Quick Process**: Easy-to-follow refund steps
- **Fair Treatment**: Transparent handling of all cases
- **Support Options**: Multiple ways to request refunds

### Updated Terms & Conditions
- **Usage Rights**: Clear guidelines for API usage
- **Service Level Agreements**: Our commitments to you
- **Intellectual Property**: Your rights to generated content
- **Beta Terms**: Special conditions for beta features

## 🔒 Security Enhancements

Your security remains our top priority:

- **Enhanced API Key Management**: More secure key handling
- **Environment Variable Protection**: Better config security
- **Improved Authentication**: Streamlined secure access
- **Regular Security Audits**: Continuous protection
- **Transparent Logging**: Know exactly how your data is used

## 🌟 Community & Social

Connect with us and other developers:

- **GitHub**: Access our latest code and contribute
- **YouTube**: Watch tutorials and updates
- **Telegram**: Join our active developer community
- **Instagram**: Behind-the-scenes and quick updates
- **LinkedIn**: Professional networking and updates

## ⚡ Getting Started

Ready to explore these new features?

1. Visit [sree.shop](https://sree.shop)
2. Check out the new Content Hub
3. Try Jarvis AI Assistant
4. Explore updated documentation
5. Join our Beta program

## Support

We're here to help you succeed:

- **Documentation**: Comprehensive guides and references
- **Jarvis AI**: 24/7 AI-powered assistance
- **Community**: Active developer forums
- **Direct Support**: Professional support team
- **Social Channels**: Quick updates and announcements

We're committed to making AI development accessible, efficient, and enjoyable. These updates reflect our ongoing dedication to providing you with the best possible tools and experience.

---

For technical details and API documentation, visit our [Documentation](https://sree.shop/docs) page. Follow us on [GitHub](https://github.com/SreejanPersonal) for the latest updates and contributions.`
};

// Sample categories
const sampleCategories = ["Web Development", "API", "AI", "Updates", "Tutorials", "Cloud"];

// Get all posts for ContentHub
export async function getAllPosts(): Promise<PostMetadata[]> {
  try {
    // In a real implementation, this would fetch from a local API or use import.meta.glob
    // For now, we'll return our sample data
    return samplePosts;
  } catch (error: any) {
    console.error('Error loading posts:', error);
    return [];
  }
}

// Get a single post by slug
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    // Find the post metadata
    const metadata = samplePosts.find(post => post.slug === slug);
    if (!metadata) return null;
    
    // Get the author and content
    const author = sampleAuthors[metadata.id];
    const body = sampleContent[metadata.id];
    
    if (!author || !body) return null;
    
    return {
      ...metadata,
      body,
      author
    };
  } catch (error: any) {
    console.error('Error loading post:', error);
    return null;
  }
}

// Get all categories
export async function getAllCategories(): Promise<string[]> {
  try {
    // In a real implementation, this would fetch from a local API
    return sampleCategories;
  } catch (error: any) {
    console.error('Error loading categories:', error);
    return [];
  }
}

// Format date for display
export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Calculate estimated read time
export function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readingTime} min read`;
}

// In a production environment, you would implement a more robust solution:
// 1. Use Vite's import.meta.glob to dynamically import markdown files
// 2. Use a backend API to serve the content
// 3. Use a static site generator to pre-render the content
