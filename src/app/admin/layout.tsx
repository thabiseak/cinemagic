import type { Metadata } from 'next';

import AuthProvider from '@/components/providers/AuthProvider';

export const metadata: Metadata = {
  title: 'Cine Magic Admin',
  description: 'Manage albums, films, blog posts, testimonials, and contact requests.',
};

interface AdminRootLayoutProps {
  children: React.ReactNode;
}

const AdminRootLayout = ({ children }: AdminRootLayoutProps) => {
  return (
    <AuthProvider>{children}</AuthProvider>
  );
};

export default AdminRootLayout;
