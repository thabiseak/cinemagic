# Cine Magic Creations CMS Architecture

## Vision
Deliver a cinematic, space-black themed marketing site backed by a secure admin console that gives the Cine Magic team complete control over albums, photos, films, blog content, testimonials, and contact requests.

## High-Level System Overview
- **Next.js 15 App Router** provides the marketing site and the admin dashboard under `/admin`.
- **Prisma + PostgreSQL (Neon in Vercel) / SQLite (local)** persists all CMS entities.
- **NextAuth (Auth.js)** powers role-based admin authentication with credential login and secure session cookies.
- **Cloudinary** stores and optimizes photo/video poster assets, consumed via `next-cloudinary` and the Next.js `<Image />` component.
- **React Query + RESTful API routes** keep the admin dashboard reactive and optimistically updated.
- **Framer Motion, GSAP, tsparticles** add cinematic animation flourishes across both public and admin surfaces.

## Data Model
Defined in `prisma/schema.prisma`.

```prisma
model User {
  id           String   @id @default(cuid())
  email        String   @unique
  passwordHash String
  name         String
  role         Role     @default(ADMIN)
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
}

enum Role {
  ADMIN
}

model Album {
  id          String   @id @default(cuid())
  title       String
  slug        String   @unique
  description String?
  coverImage  MediaAsset? @relation(fields: [coverImageId], references: [id])
  coverImageId String?
  isPublic    Boolean  @default(true)
  photos      Photo[]
  featuredPhotoId String?
  featuredPhoto   Photo? @relation("FeaturedPhoto", fields: [featuredPhotoId], references: [id])
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Photo {
  id         String   @id @default(cuid())
  album      Album    @relation(fields: [albumId], references: [id], onDelete: Cascade)
  albumId    String
  title      String?
  description String?
  url        String
  publicId   String   @unique
  format     String?
  width      Int?
  height     Int?
  isFeatured Boolean  @default(false)
  order      Int      @default(0)
  createdAt  DateTime @default(now())
}

model Film {
  id          String   @id @default(cuid())
  title       String
  slug        String   @unique
  description String?
  videoUrl    String
  platform    VideoPlatform
  poster      MediaAsset? @relation(fields: [posterId], references: [id])
  posterId    String?
  isFeatured  Boolean  @default(false)
  tags        String[]
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

enum VideoPlatform {
  YOUTUBE
  VIMEO
  CLOUDINARY
}

model BlogPost {
  id            String   @id @default(cuid())
  title         String
  slug          String   @unique
  excerpt       String?
  content       String   // Markdown
  featuredImage MediaAsset? @relation(fields: [featuredImageId], references: [id])
  featuredImageId String?
  tags          String[]
  category      String?
  status        PostStatus @default(DRAFT)
  publishedAt   DateTime?
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}

enum PostStatus {
  DRAFT
  PUBLISHED
}

model Testimonial {
  id         String   @id @default(cuid())
  clientName String
  eventType  String?
  quote      String
  rating     Int?
  avatar     MediaAsset? @relation(fields: [avatarId], references: [id])
  avatarId   String?
  isFeatured Boolean  @default(true)
  createdAt  DateTime @default(now())
}

model ContactRequest {
  id        String   @id @default(cuid())
  name      String
  email     String
  phone     String?
  eventType String
  eventDate DateTime?
  message   String
  status    ContactStatus @default(NEW)
  createdAt DateTime @default(now())
}

enum ContactStatus {
  NEW
  IN_PROGRESS
  ARCHIVED
}

model MediaAsset {
  id        String   @id @default(cuid())
  url       String
  publicId  String   @unique
  width     Int?
  height    Int?
  format    String?
  bytes     Int?
  createdAt DateTime @default(now())
}

model SiteSetting {
  id        String   @id @default(cuid())
  key       String   @unique
  value     Json
  updatedAt DateTime @updatedAt
}
```

## Key Application Surfaces
- `/admin/login`: credential-based admin login.
- `/admin`: authenticated dashboard shell with tabbed navigation (albums, photos, films, blog, testimonials, contacts, settings).
- RESTful API routes under `src/app/api/**` for CRUD operations.
- File upload endpoints that sign Cloudinary uploads, store uploaded asset metadata, and return the persisted entity.

## Authentication & Security
- Credential login via NextAuth with bcrypt password verification.
- Session cookies (HTTP-only) with rolling expiration.
- `middleware.ts` gate keeps `/admin` paths and API routes under `/api/admin`.
- CSRF protection handled via Auth.js anti-CSRF + per-request checks.
- Role-based checks enforced in service layer and React Query hooks.
- Rate limiting for auth + upload endpoints via `next-safe-middleware` or lightweight in-memory limiter.
- HTTPS enforced by Vercel plus Next.js config for canonical host.

## Admin Dashboard Tech
- **UI Shell**: Tailwind + custom space-black theme.
- **State/Data**: React Query for caching, mutation state, and optimistic updates.
- **Forms**: React Hook Form + Zod validation schemas shared between client/server.
- **Editors**: `@uiw/react-md-editor` for blog Markdown authoring; Cloudinary widget for assets.
- **Tables**: Reusable data table component with bulk actions.
- **Exports**: CSV via `papaparse` (contacts) and optional Excel via `xlsx`.

## SEO Enhancements
- Dynamic Open Graph & structured data per entity (albums, films, blog posts) via metadata API in Next.js.
- Sitemap builder uses Prisma queries to list published public content.
- Robots.txt already present but updated with admin disallow.
- Canonical URLs derived from site settings.

## Environment Variables
Documented in `.env.example`:
- `DATABASE_URL`
- `AUTH_SECRET`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD` (seed)
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
- `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET`

## Deployment Notes
- Use Vercel Postgres/Neon for production database.
- Run `prisma migrate deploy` in build step.
- Configure Cloudinary environment variables in Vercel.
- Enable Vercel Analytics & Image Optimization.

## Next Steps
1. Install dependencies (Prisma, NextAuth, React Query, React Hook Form, Zod, CSV/Excel helpers, Markdown editor).
2. Scaffold Prisma schema + seed script for initial admin user.
3. Implement authentication flow (API routes, middleware, UI).
4. Build CRUD APIs and React Query hooks per entity.
5. Wire up admin UI with drag/drop uploads and content tables.
6. Update public pages to query database content and render with animations.
7. Document CMS usage for staff.
