'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/libs/supabase';

export default function SupabaseDebug() {
  const [debugInfo, setDebugInfo] = useState<any>(null);

  useEffect(() => {
    const testSupabase = async () => {
      try {

        console.log('🔍 Supabase Debug Info:');
        console.log('URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
        console.log('Key exists:', !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
        console.log('Key length:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.length);

        // Test basic connection
        const { data, error } = await supabase.from('admin_users').select('count', { count: 'exact', head: true });
        
        setDebugInfo({
          url: process.env.NEXT_PUBLIC_SUPABASE_URL,
          keyExists: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
          keyLength: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.length,
          connectionTest: error ? `Error: ${error.message}` : 'Success',
          data: data
        });

        console.log('✅ Connection test result:', error ? error : 'Success');
      } catch (err) {
        console.error('❌ Debug test failed:', err);
        setDebugInfo({
          error: err instanceof Error ? err.message : 'Unknown error'
        });
      }
    };

    testSupabase();
  }, []);

  if (!debugInfo) {
    return <div>Loading debug info...</div>;
  }

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h3 className="font-bold mb-2">Supabase Debug Info:</h3>
      <pre className="text-xs bg-white p-2 rounded">
        {JSON.stringify(debugInfo, null, 2)}
      </pre>
    </div>
  );
} 