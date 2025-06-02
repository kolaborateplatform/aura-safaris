import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import AdminSidebar from '@/components/AdminSidebar';
import AdminDashboardClient from './AdminDashboardClient';

export default async function AdminPage() {
  const session = await auth();
  const { userId, sessionClaims } = session;
  
  if (!userId) {
    redirect('/sign-in');
  }

  // Temporarily bypass admin check for debugging
  // const isFirstUser = userId === 'user_2xdQBfkWqPKOIdsnk0nCX5ca2v9';
  // const isAdmin = sessionClaims?.role === 'admin' || isFirstUser;

  // if (!isAdmin) {
  //   redirect('/');
  // }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <AdminSidebar />

        {/* Main Content */}
        <div className="flex-1 p-8">
          <AdminDashboardClient />
        </div>
      </div>
    </div>
  );
}
