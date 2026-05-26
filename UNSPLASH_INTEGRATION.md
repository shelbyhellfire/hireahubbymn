# Unsplash API Integration Guide

## ⚠️ Important Note
For a handyman business, we **strongly recommend using your own project photos** instead of stock images from Unsplash. Your real work photos will:
- Build more trust with customers
- Showcase your actual skills
- Be unique to your business
- Require no attribution

## If You Still Want to Use Unsplash API

### Step 1: Create Unsplash Developer Account

1. Go to [Unsplash Developers](https://unsplash.com/developers)
2. Sign up for an account
3. Create a new application
4. Get your **Access Key** and **Secret Key**

### Step 2: Install Unsplash SDK

```bash
cd hire-a-hubby
npm install unsplash-js
```

### Step 3: Create Environment Variables

Create a `.env.local` file:

```bash
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your_access_key_here
```

### Step 4: Create Unsplash Service

Create `app/lib/unsplash.ts`:

```typescript
import { createApi } from 'unsplash-js';

export const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY || '',
});

export async function getHandymanImages() {
  try {
    const result = await unsplash.search.getPhotos({
      query: 'home renovation construction handyman',
      perPage: 20,
      orientation: 'landscape',
    });
    
    if (result.errors) {
      console.error('Error fetching from Unsplash:', result.errors);
      return [];
    }
    
    return result.response?.results || [];
  } catch (error) {
    console.error('Unsplash API error:', error);
    return [];
  }
}
```

### Step 5: Update Your Page

Update `app/page.tsx`:

```typescript
import { getHandymanImages } from './lib/unsplash';

// Make the component async
export default async function Home() {
  // Fetch images from Unsplash
  const unsplashImages = await getHandymanImages();
  
  // Transform to your gallery format
  const galleryImages = unsplashImages.map((img, index) => ({
    id: index + 1,
    src: img.urls.regular,
    alt: img.alt_description || 'Home improvement project',
    category: 'remodeling',
    title: img.description || 'Project',
  }));
  
  // ... rest of your component
}
```

### Step 6: Add Attribution

Unsplash requires attribution. Add to the gallery:

```typescript
<p className="text-sm text-gray-500 mt-4">
  Photos from{' '}
  <a href="https://unsplash.com" className="underline">
    Unsplash
  </a>
</p>
```

## Rate Limits

- **Free tier**: 50 requests per hour
- This is usually plenty for a small business site

## Better Alternative: Use Your Own Photos! 📸

Instead of using Unsplash:

1. Take photos of your completed projects
2. Use your phone (modern phones have great cameras)
3. Take multiple angles and lighting conditions
4. Edit basics (crop, brighten) with free tools
5. Store in `public/gallery/`
6. Update the gallery array

### Photo Tips:
- Clean the work area before photographing
- Use natural lighting when possible
- Take before AND after shots
- Include close-ups of detailed work
- Show the full room/project area
- Get customer permission to use photos

## Recommended: Skip Unsplash Entirely

For your handyman business, **skip the Unsplash integration** and:
1. Use your actual project photos
2. If you don't have many yet, start taking them on each job
3. Build a portfolio that shows YOUR work
4. This will convert more customers!
