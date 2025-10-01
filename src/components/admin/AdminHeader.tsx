'use client';

import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Bell,
  Home,
  LogOut,
  Search,
  Sun,
  Moon,
  Settings,
} from 'lucide-react';
import { useTheme } from 'next-themes';

import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { adminNavItems } from '@/lib/admin-nav';

const AdminHeader = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const activeItem = adminNavItems.find((item) => pathname.startsWith(item.href));

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="flex h-20 items-center gap-4 px-6">
        <motion.div
          key={activeItem?.href ?? 'default'}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden flex-col lg:flex"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Dashboard</p>
          <h2 className="text-2xl font-display font-semibold text-white">
            {activeItem?.label ?? 'Overview'}
          </h2>
        </motion.div>

        <div className="ml-auto flex flex-1 items-center gap-3">
          <div className="hidden max-w-md flex-1 items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 shadow-inner shadow-white/10 md:flex">
            <Search className="h-4 w-4 text-white/40" />
            <Input
              className="border-0 bg-transparent p-0 text-sm text-white focus-visible:ring-0"
              placeholder="Search albums, films, blog posts..."
              aria-label="Global search"
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Notifications"
            className="border border-white/10 bg-white/5 text-white hover:bg-white/10"
          >
            <Bell className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            className="border border-white/10 bg-white/5 text-white hover:bg-white/10"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Link href="/" className="hidden lg:block">
            <Button variant="ghost" className="gap-2 text-white">
              <Home className="h-4 w-4" />
              View Site
            </Button>
          </Link>

          <Button
            variant="ghost"
            className="gap-2 text-white"
            onClick={() => signOut({ callbackUrl: '/' })}
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </Button>

          <Button variant="primary" className="hidden gap-2 text-white sm:flex">
            <Settings className="h-4 w-4" />
            Quick settings
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
