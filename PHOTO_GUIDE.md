# How to Add Your Own Project Photos

## Quick Start

Your website now has a beautiful image gallery! Currently, it's using placeholder images from Unsplash. Here's how to replace them with your actual project photos:

## Option 1: Simple - Use External URLs (Fastest)

1. Upload your photos to a hosting service (Google Drive, Dropbox, Imgur, etc.)
2. Get the direct image URL
3. Open `app/page.tsx`
4. Find the `galleryImages` array (around line 7)
5. Replace the `src` URL with your image URL
6. Update the `title`, `alt`, and `category`

**Example:**
```typescript
{
  id: 1,
  src: "https://your-image-host.com/kitchen-project.jpg",
  alt: "Kitchen remodel in Minneapolis",
  category: "kitchen",
  title: "Minneapolis Kitchen Remodel",
}
```

## Option 2: Recommended - Store Images Locally

### Step 1: Prepare Your Images
1. Resize your images (recommended: 1200px wide max)
2. Optimize them using a tool like:
   - [TinyPNG](https://tinypng.com/) 
   - [Squoosh](https://squoosh.app/)
3. Name them descriptively: `kitchen-remodel-1.jpg`, `deck-build-2.jpg`, etc.

### Step 2: Add Images to Your Project
1. Place your images in `hire-a-hubby/public/gallery/`
2. Create subdirectories if you want: `public/gallery/kitchen/`, `public/gallery/bathroom/`, etc.

### Step 3: Update the Gallery Data
Open `app/page.tsx` and update the `galleryImages` array:

```typescript
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/gallery/kitchen-remodel-1.jpg",
    alt: "Modern kitchen remodel in St. Paul",
    category: "kitchen",
    title: "St. Paul Kitchen Transformation",
  },
  {
    id: 2,
    src: "/gallery/bathroom-renovation-1.jpg",
    alt: "Master bathroom renovation",
    category: "bathroom",
    title: "Master Bathroom Renovation",
  },
  // Add more images...
];
```

## Categories Available

Current categories (you can add more):
- `kitchen` - Kitchen remodels
- `bathroom` - Bathroom renovations
- `outdoor` - Decks, fences, etc.
- `remodeling` - General remodeling projects
- `maintenance` - Repairs and maintenance work

## Tips for Best Results

✅ **Use high-quality photos** - Clear, well-lit images showcase your work
✅ **Include before/after** - Customers love transformation stories
✅ **Show variety** - Display different types of projects
✅ **Add descriptions** - Good titles and alt text help SEO
✅ **Optimize file sizes** - Keep images under 500KB for fast loading
✅ **Consistent aspect ratio** - Square images (1:1) look best in the grid

## Adding More Images

Just add more objects to the `galleryImages` array:

```typescript
const galleryImages: GalleryImage[] = [
  // ... existing images
  {
    id: 10, // Make sure ID is unique
    src: "/gallery/your-new-image.jpg",
    alt: "Description of the project",
    category: "kitchen", // Choose appropriate category
    title: "Project Title",
  },
];
```

## Need Help?

- The gallery automatically creates filter buttons for each category
- Images open in a lightbox when clicked
- The gallery is fully responsive (looks great on mobile)
- Images use Next.js Image optimization for fast loading

## Future Enhancements

Want to add more features? I can help you add:
- Project descriptions with more details
- Before/after sliders
- Customer testimonials on each project
- Date completed
- Project cost ranges
- Video embeds
