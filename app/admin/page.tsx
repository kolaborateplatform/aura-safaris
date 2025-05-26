import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await auth();

  if (!session.userId) {
    redirect("/sign-in");
  }

  // Check if user has admin role
  const user = await fetch(`https://api.clerk.dev/v1/users/${session.userId}`, {
    headers: {
      'Authorization': `Bearer ${process.env.CLERK_SECRET_KEY}`,
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());

  if (user.public_metadata?.role !== 'admin') {
    redirect("/");
  }

  return (
    <div className="min-h-screen p-8">
      <main className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Admin Cards */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">User Management</h2>
            <p className="text-gray-600 dark:text-gray-300">Manage user accounts and permissions</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Content Management</h2>
            <p className="text-gray-600 dark:text-gray-300">Manage site content and settings</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Analytics</h2>
            <p className="text-gray-600 dark:text-gray-300">View site statistics and reports</p>
          </div>
        </div>
      </main>
    </div>
  );
} 