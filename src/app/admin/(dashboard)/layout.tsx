import AdminLayout from '@/components/admin/AdminLayout';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return <AdminLayout>{children}</AdminLayout>;
};

export default DashboardLayout;
