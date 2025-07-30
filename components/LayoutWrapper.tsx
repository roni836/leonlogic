'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Layouts/Header';
import Footer from '@/components/Layouts/Footer';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();
  
  // Check if current path is an admin route
  const isAdminRoute = pathname?.includes('leonlogic-');
  
  if (isAdminRoute) {
    // For admin routes, only render the children (no Header/Footer)
    return <>{children}</>;
  }
  
  // For regular routes, render with Header and Footer
  return (
    <div className={`flex min-h-screen flex-col bg-white dark:bg-primary font-gilroy text-base font-medium text-primary antialiased dark:text-white`}>
      {children}
    </div>
  );
} 