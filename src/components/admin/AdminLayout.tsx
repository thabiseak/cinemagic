'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import QueryProvider from '@/components/providers/QueryProvider';
import AdminHeader from '@/components/admin/AdminHeader';
import AdminSidebar from '@/components/admin/AdminSidebar';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace('/admin/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="animate-pulse text-lg tracking-[0.3em] text-white/50">
          Authenticating...
        </div>
      </main>
    );
  }

  if (status === 'unauthenticated') {
    return null;
  }

  return (
    <QueryProvider>
      <div className="relative flex min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-white">
        <AdminSidebar />
        <div className="flex min-h-screen flex-1 flex-col">
          <AdminHeader />
          <main className="flex-1 overflow-y-auto px-6 py-10">
            <div className="mx-auto w-full max-w-6xl space-y-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    </QueryProvider>
  );
};

export default AdminLayout;
