# 🚀 Deployment Guide - Cine Magic Creations

This guide will help you deploy your premium wedding photography website to production.

## 📋 Pre-Deployment Checklist

### 1. Environment Setup
- [ ] Node.js 18+ installed
- [ ] Git repository configured
- [ ] Domain name registered (recommended: cinemagiccreations.com)
- [ ] SSL certificate ready
- [ ] Environment variables prepared

### 2. Content Preparation
- [ ] High-quality images added to `/public/images/`
- [ ] Video files added to `/public/videos/`
- [ ] Contact information updated
- [ ] Blog posts written
- [ ] Portfolio items added
- [ ] Album galleries created

### 3. SEO Optimization
- [ ] Meta descriptions updated
- [ ] Alt tags added to images
- [ ] Structured data verified
- [ ] Sitemap generated
- [ ] Google Analytics configured

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

**Why Vercel?**
- Optimized for Next.js
- Automatic deployments
- Global CDN
- Built-in analytics
- Easy domain management

**Steps:**
1. **Connect Repository**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Login to Vercel
   vercel login
   
   # Deploy from project directory
   vercel
   ```

2. **Configure Environment Variables**
   ```bash
   # In Vercel dashboard, add:
   NEXT_PUBLIC_SITE_URL=https://cinemagiccreations.com
   NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
   ```

3. **Custom Domain Setup**
   - Add domain in Vercel dashboard
   - Update DNS records
   - SSL certificate auto-generated

### Option 2: Netlify

**Steps:**
1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Environment Variables**: Add in Netlify dashboard
4. **Custom Domain**: Configure in site settings

### Option 3: AWS Amplify

**Steps:**
1. Connect GitHub repository
2. Build settings:
   - Build command: `npm run build`
   - Base directory: `/`
3. Environment variables in console
4. Custom domain configuration

## 🔧 Production Configuration

### 1. Update next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add production-specific optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  
  // Image optimization
  images: {
    domains: ['res.cloudinary.com', 'your-cdn-domain.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
```

### 2. Environment Variables
Create `.env.local` for production:
```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://cinemagiccreations.com
NEXT_PUBLIC_SITE_NAME="Cine Magic Creations"

# Analytics
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID=GTM_ID

# Contact Information
NEXT_PUBLIC_PHONE="+94 77 621 6556"
NEXT_PUBLIC_EMAIL="info@cinemagiccreations.com"
NEXT_PUBLIC_INSTAGRAM="@cine_magic_creations"

# CDN Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 3. Performance Optimization

**Image Optimization:**
```bash
# Install image optimization tools
npm install -g @squoosh/cli

# Optimize images before deployment
squoosh-cli --webp public/images/**/*.{jpg,png}
```

**Bundle Analysis:**
```bash
# Analyze bundle size
npm install -g @next/bundle-analyzer
ANALYZE=true npm run build
```

## 📱 Mobile Optimization

### 1. Responsive Testing
- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Test on iPad (Safari)
- [ ] Test on various screen sizes

### 2. Performance Testing
- [ ] Lighthouse score 90+
- [ ] Core Web Vitals optimized
- [ ] Image loading optimized
- [ ] Video streaming optimized

## 🔍 SEO Setup

### 1. Google Search Console
1. Add property for your domain
2. Verify ownership
3. Submit sitemap: `https://cinemagiccreations.com/sitemap.xml`
4. Monitor indexing status

### 2. Google Analytics
1. Create GA4 property
2. Add tracking code to layout.tsx
3. Set up conversion tracking
4. Configure goals and events

### 3. Social Media Integration
1. **Facebook Business Page**
   - Create business page
   - Add website link
   - Share portfolio highlights

2. **Instagram Integration**
   - Link to @cine_magic_creations
   - Add website link in bio
   - Use consistent branding

## 🛡️ Security & Monitoring

### 1. Security Headers
Already configured in next.config.js:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: origin-when-cross-origin

### 2. Monitoring Setup
```bash
# Install monitoring tools
npm install @sentry/nextjs

# Configure Sentry for error tracking
# Add to next.config.js
const { withSentryConfig } = require('@sentry/nextjs')
```

### 3. Backup Strategy
- [ ] Regular database backups
- [ ] Image/video backups
- [ ] Code repository backups
- [ ] Configuration backups

## 📊 Analytics & Tracking

### 1. Google Analytics 4
```javascript
// Add to layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### 2. Conversion Tracking
- Contact form submissions
- Portfolio views
- Video plays
- Phone calls
- WhatsApp clicks

## 🚀 Launch Checklist

### Pre-Launch
- [ ] All pages tested
- [ ] Forms working
- [ ] Images optimized
- [ ] Mobile responsive
- [ ] SEO optimized
- [ ] Analytics configured
- [ ] SSL certificate active
- [ ] Domain configured
- [ ] Backup strategy in place

### Launch Day
- [ ] Deploy to production
- [ ] Test all functionality
- [ ] Submit to Google Search Console
- [ ] Share on social media
- [ ] Notify existing clients
- [ ] Monitor for issues

### Post-Launch
- [ ] Monitor analytics
- [ ] Check for errors
- [ ] Gather user feedback
- [ ] Update content regularly
- [ ] Optimize based on data

## 📞 Support & Maintenance

### Regular Maintenance
- **Weekly**: Check analytics, respond to inquiries
- **Monthly**: Update portfolio, write blog posts
- **Quarterly**: Review and optimize performance
- **Annually**: Full security audit, update dependencies

### Content Updates
1. **Portfolio**: Add new work regularly
2. **Blog**: Publish weekly posts
3. **Testimonials**: Add client feedback
4. **Contact**: Keep information current

### Technical Updates
```bash
# Regular dependency updates
npm update

# Security updates
npm audit
npm audit fix

# Performance monitoring
npm run build
npm run analyze
```

## 🎯 Success Metrics

### Key Performance Indicators
- **Page Load Speed**: < 3 seconds
- **Mobile Performance**: 90+ Lighthouse score
- **SEO Ranking**: Top 3 for "wedding photographer Jaffna"
- **Conversion Rate**: 5%+ contact form submissions
- **User Engagement**: 2+ minutes average session

### Monitoring Tools
- Google Analytics
- Google Search Console
- Lighthouse CI
- Sentry (error tracking)
- Uptime monitoring

---

## 🎉 Congratulations!

Your premium wedding photography website is now ready to capture hearts and create magical memories for couples in Jaffna and beyond!

**Next Steps:**
1. Deploy to your chosen platform
2. Add your content and images
3. Test thoroughly
4. Launch and celebrate!

**Need Help?**
- Technical support: Check documentation
- Design questions: Review design system
- Content updates: Use admin interface
- Performance issues: Check optimization guide

**Remember**: This website is designed to be a digital masterpiece that reflects the artistry and professionalism of Cine Magic Creations. Every detail has been crafted to create an unforgettable user experience that converts visitors into clients.

🚀 **Ready to launch your digital presence and start capturing more beautiful moments!**
