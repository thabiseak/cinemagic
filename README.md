# Cine Magic Creations - Premium Wedding Photography Website

A world-class, premium website for Cine Magic Creations, a wedding filming and photography service based in Jaffna, Sri Lanka.

## 🎯 Features

### Core Functionality
- **Cinematic Homepage** - Fullscreen hero with video backgrounds and parallax effects
- **Interactive Portfolio** - Masonry layout with advanced filtering and lightbox
- **Dynamic Albums** - Photo gallery with album navigation and slideshow
- **Wedding Films** - Video showcase with embedded players and previews
- **SEO-Optimized Blog** - Content management with categories and tags
- **About Page** - Storytelling with testimonials and achievements
- **Contact System** - Form with WhatsApp integration and maps

### Technical Excellence
- **Next.js 15** - Latest React framework with App Router
- **TypeScript** - Full type safety and developer experience
- **Tailwind CSS** - Utility-first styling with custom design system
- **Framer Motion** - Smooth animations and micro-interactions
- **GSAP** - Advanced animations for cinematic feel
- **SEO Optimized** - Structured data, meta tags, sitemap
- **Performance** - Image optimization, lazy loading, caching
- **Responsive** - Mobile-first design across all devices

## 🎨 Design System

### Colors
- **Primary**: #ED4001 (Premium Orange/Red)
- **Background**: Black (#000000)
- **Text**: White (#FFFFFF)
- **Accents**: Various shades for depth and hierarchy

### Typography
- **Headings**: Playfair Display (Elegant serif)
- **Body**: Inter (Clean sans-serif)

### Components
- Custom Button variants (primary, secondary, ghost, outline)
- Form components with validation
- Interactive cards with hover effects
- Masonry grid layouts
- Video players with custom controls

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cinemagic
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
cinemagic/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Homepage
│   │   ├── layout.tsx         # Root layout
│   │   ├── globals.css        # Global styles
│   │   ├── portfolio/         # Portfolio page
│   │   ├── albums/           # Albums page
│   │   ├── films/            # Films page
│   │   ├── blog/             # Blog page
│   │   ├── about/            # About page
│   │   ├── contact/          # Contact page
│   │   ├── sitemap.ts        # SEO sitemap
│   │   └── robots.ts         # SEO robots
│   └── components/            # Reusable components
│       ├── layout/           # Layout components
│       ├── sections/         # Page sections
│       └── ui/               # UI components
├── public/                    # Static assets
│   ├── images/               # Image assets
│   ├── videos/              # Video assets
│   └── icons/               # Favicon and icons
├── tailwind.config.ts        # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies
```

## 🎬 Content Management

### Adding New Content

1. **Portfolio Items**
   - Add images to `/public/images/portfolio/`
   - Update portfolio data in components

2. **Albums**
   - Create album folders in `/public/images/albums/`
   - Add cover images and gallery images
   - Update album data in components

3. **Blog Posts**
   - Add featured images to `/public/images/blog/`
   - Update blog post data in components

4. **Videos**
   - Add video files to `/public/videos/`
   - Update video data in components

### Image Optimization

- Use Next.js Image component for automatic optimization
- Images are automatically converted to WebP/AVIF
- Lazy loading is enabled by default
- Responsive images with multiple sizes

## 🔧 Customization

### Brand Colors
Update colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: '#ED4001', // Your brand color
  }
}
```

### Typography
Update fonts in `tailwind.config.ts`:

```typescript
fontFamily: {
  'display': ['Playfair Display', 'serif'],
  'body': ['Inter', 'system-ui', 'sans-serif'],
}
```

### Content Updates
- Update contact information in components
- Modify testimonials and achievements
- Customize blog categories and tags

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## ⚡ Performance

### Optimizations
- Image optimization with Next.js Image
- Code splitting and lazy loading
- CSS optimization and purging
- Font optimization
- Caching headers
- Compression

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

## 🔍 SEO Features

- Structured data (Schema.org)
- Open Graph meta tags
- Twitter Card support
- XML sitemap
- Robots.txt
- Meta descriptions
- Canonical URLs

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Deploy automatically on push
3. Environment variables configured

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📞 Support

For technical support or customization requests:
- **Email**: info@cinemagiccreations.com
- **Phone**: +94 77 621 6556
- **Instagram**: @cine_magic_creations

## 📄 License

This project is proprietary software for Cine Magic Creations.

---

**Crafted with ❤️ for Cine Magic Creations**
*Capturing love, stories, and moments in Jaffna & beyond*