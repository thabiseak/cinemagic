'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { adminNavItems } from '@/lib/admin-nav';

const AdminSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="relative hidden w-72 flex-col border-r border-white/10 bg-black/80 pb-10 lg:flex">
      <div className="flex h-20 items-center px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Cine Magic</p>
          <h1 className="text-2xl font-display font-bold text-white">Admin Hub</h1>
        </div>
      </div>
      <nav className="mt-6 space-y-1 px-4">
        {adminNavItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200',
                isActive
                  ? 'bg-primary-500/90 text-white shadow-lg shadow-primary-500/30'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto px-6 pt-10 text-xs text-white/40">
        Cinematic control panel • Crafted for excellence
      </div>
    </aside>
  );
};

export default AdminSidebar;
