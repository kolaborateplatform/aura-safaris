import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function AdminPage() {
  const session = await auth();
  const { userId, sessionClaims } = session;
  
  if (!userId) {
    redirect('/sign-in');
  }

  const isFirstUser = userId === 'user_2xdQBfkWqPKOIdsnk0nCX5ca2v9';
  const isAdmin = sessionClaims?.role === 'admin' || isFirstUser;

  if (!isAdmin) {
    redirect('/');
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-white shadow-md">
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">Admin Panel</h2>
          </div>
          <nav className="mt-4">
            <div className="px-4 py-2">
              <a href="/admin" className="block text-gray-600 hover:text-gray-900">Dashboard</a>
            </div>
            <div className="px-4 py-2">
              <a href="/admin/tours" className="block text-gray-600 hover:text-gray-900">Tours</a>
            </div>
            <div className="px-4 py-2">
              <a href="/admin/blog" className="block text-gray-600 hover:text-gray-900">Blog</a>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Stats Cards */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Tours</h3>
              <p className="text-3xl font-bold text-blue-600">0</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Blog Posts</h3>
              <p className="text-3xl font-bold text-green-600">0</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Destinations</h3>
              <p className="text-3xl font-bold text-purple-600">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 