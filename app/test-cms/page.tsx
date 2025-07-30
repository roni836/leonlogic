import Link from "next/link";

export default function TestCMS() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">CMS Routes Test</h1>
          <p className="mt-2 text-gray-600">Testing the secure CMS routes</p>
        </div>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-900">Login Route</h2>
            <p className="text-sm text-gray-600">/leonlogic-login</p>
            <Link
              href="/leonlogic-login" 
              className="inline-block mt-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Test Login
            </Link>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-900">Dashboard Route</h2>
            <p className="text-sm text-gray-600">/leonlogic-dashboard</p>
            <Link 
              href="/leonlogic-dashboard" 
              className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Test Dashboard
            </Link>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-900">Services Management</h2>
            <p className="text-sm text-gray-600">/leonlogic-dashboard/content/services</p>
            <Link 
              href="/leonlogic-dashboard/content/services" 
              className="inline-block mt-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              Test Services
            </Link>
          </div>
        </div>
        
        <div className="text-xs text-gray-500">
          <p>✅ Routes are working if you can access them</p>
          <p>🔒 Dashboard routes require authentication</p>
        </div>
      </div>
    </div>
  );
} 