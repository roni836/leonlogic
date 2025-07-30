'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/libs/supabase';
import AdminSidebar from '@/components/admin/Sidebar';
import AdminHeader from '@/components/admin/Header';

export default function LeonLogicDashboardLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    let unsub: any;
    const checkAuth = async () => {
      try {
        console.log('[DashboardLayout] Checking authentication...');
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        if (userError) {
          console.error('[DashboardLayout] User error:', userError);
          setLoading(false);
          router.push('/leonlogic-login');
          return;
        }
        if (!user) {
          console.log('[DashboardLayout] No user found, redirecting to login');
          setLoading(false);
          router.push('/leonlogic-login');
          return;
        }
        console.log('[DashboardLayout] User authenticated:', user.email);
        // Check admin status
        const { data: adminUser, error: adminError } = await supabase
          .from('admin_users')
          .select('*')
          .eq('user_id', user.id)
          .single();
        if (adminError) {
          console.error('[DashboardLayout] Admin check error:', adminError);
          setLoading(false);
          router.push('/leonlogic-login');
          return;
        }
        if (!adminUser || !adminUser.is_active) {
          console.log('[DashboardLayout] User not admin or inactive:', adminUser);
          setLoading(false);
          router.push('/leonlogic-login');
          return;
        }
        setUser(adminUser);
        setLoading(false);
      } catch (error) {
        console.error('[DashboardLayout] Auth check failed:', error);
        setLoading(false);
        router.push('/leonlogic-login');
      }
    };
    checkAuth();
    unsub = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        setUser(null);
        router.push('/leonlogic-login');
      } else {
        checkAuth();
      }
    });
    return () => {
      if (unsub && unsub.data && unsub.data.subscription) {
        unsub.data.subscription.unsubscribe();
      }
    };
  }, [isClient, router]);

  if (!isClient || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
          <p className="text-sm text-gray-500 mt-2">Please wait while we verify your authentication.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen} user={user} />
      
      {/* Main content area */}
      <div className="flex-1 flex flex-col lg:pl-64">
        {/* Header */}
        <AdminHeader user={user} setSidebarOpen={setSidebarOpen} />
        
        {/* Main content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
} 