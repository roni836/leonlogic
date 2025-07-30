'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/libs/supabase';

export default function DebugAuth() {
  const [authStatus, setAuthStatus] = useState<string>('Checking...');
  const [user, setUser] = useState<any>(null);
  const [adminUser, setAdminUser] = useState<any>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        console.log('🔍 Debug: Starting auth check...');
        
        // Check if user is authenticated
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        
        if (userError) {
          console.error('❌ User error:', userError);
          setAuthStatus(`User Error: ${userError.message}`);
          return;
        }
        
        if (!user) {
          console.log('ℹ️ No authenticated user');
          setAuthStatus('No authenticated user');
          return;
        }
        
        console.log('✅ User authenticated:', user.email);
        setUser(user);
        setAuthStatus(`User authenticated: ${user.email}`);
        
        // Check admin status
        console.log('🔍 Checking admin status...');
        const { data: adminData, error: adminError } = await supabase
          .from('admin_users')
          .select('*')
          .eq('user_id', user.id)
          .single();
        
        if (adminError) {
          console.error('❌ Admin check error:', adminError);
          setAuthStatus(`Admin Error: ${adminError.message}`);
          return;
        }
        
        if (!adminData || !adminData.is_active) {
          console.log('❌ User not admin or inactive');
          setAuthStatus('User not admin or inactive');
          return;
        }
        
        console.log('✅ Admin user found:', adminData);
        setAdminUser(adminData);
        setAuthStatus(`Admin user confirmed: ${adminData.email}`);
        
      } catch (error) {
        console.error('❌ Auth check failed:', error);
        setAuthStatus(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    };

    checkAuth();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Authentication Debug</h1>
        
        <div className="bg-white rounded-lg shadow p-6 space-y-4">
          <div>
            <h2 className="font-semibold">Status:</h2>
            <p className="text-sm text-gray-600">{authStatus}</p>
          </div>
          
          {user && (
            <div>
              <h2 className="font-semibold">User Info:</h2>
              <pre className="text-xs bg-gray-100 p-2 rounded">
                {JSON.stringify(user, null, 2)}
              </pre>
            </div>
          )}
          
          {adminUser && (
            <div>
              <h2 className="font-semibold">Admin User Info:</h2>
              <pre className="text-xs bg-gray-100 p-2 rounded">
                {JSON.stringify(adminUser, null, 2)}
              </pre>
            </div>
          )}
          
          <div className="mt-6">
            <button
              onClick={() => window.location.href = '/leonlogic-dashboard'}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Try Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 