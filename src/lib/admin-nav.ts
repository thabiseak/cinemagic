import {
  LayoutDashboard,
  Images,
  Camera,
  Video,
  PenSquare,
  MessageCircle,
  Users,
  Settings,
} from 'lucide-react';

export const adminNavItems = [
  { href: '/admin', label: 'Overview', icon: LayoutDashboard },
  { href: '/admin/albums', label: 'Albums', icon: Images },
  { href: '/admin/photos', label: 'Photos', icon: Camera },
  { href: '/admin/films', label: 'Films', icon: Video },
  { href: '/admin/blog', label: 'Blog', icon: PenSquare },
  { href: '/admin/testimonials', label: 'Testimonials', icon: Users },
  { href: '/admin/contacts', label: 'Contact Requests', icon: MessageCircle },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
] as const;

export type AdminNavItem = (typeof adminNavItems)[number];
