import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function ToursPage() {
  try {
    const session = await auth();
    if (!session.userId) {
      redirect("/sign-in");
    }

    const response = await fetch(`https://api.clerk.dev/v1/users/${session.userId}`, {
      headers: {
        'Authorization': `Bearer ${process.env.CLERK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }

    const user = await response.json();
    const isFirstUser = user.id === 'user_2xdQBfkWqPKOIdsnk0nCX5ca2v9';
    const isAdmin = user.public_metadata?.role === 'admin' || isFirstUser;

    if (!isAdmin) {
      redirect("/");
    }

    return (
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 text-white">
          <div className="p-4">
            <h2 className="text-xl font-bold">Admin Panel</h2>
          </div>
          <nav className="mt-4">
            <Link href="/admin" className="block px-4 py-2 hover:bg-gray-700">
              Dashboard
            </Link>
            <div className="relative group">
              <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                Tours
              </div>
              <div className="absolute left-full top-0 w-48 bg-white text-gray-800 shadow-lg rounded-md hidden group-hover:block">
                <Link href="/admin/tours" className="block px-4 py-2 hover:bg-gray-100">
                  All Tours
                </Link>
                <Link href="/admin/tours/add-tour" className="block px-4 py-2 hover:bg-gray-100">
                  Add Tour
                </Link>
                <Link href="/admin/tours/destinations" className="block px-4 py-2 hover:bg-gray-100">
                  Destinations
                </Link>
              </div>
            </div>
            <Link href="/admin/blog" className="block px-4 py-2 hover:bg-gray-700">
              Blog
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">All Tours</h1>
            <Link 
              href="/admin/tours/add-tour"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add New Tour
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow">
            <div className="p-4">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Tour Name</th>
                    <th className="text-left py-2">Destination</th>
                    <th className="text-left py-2">Duration</th>
                    <th className="text-left py-2">Price</th>
                    <th className="text-left py-2">Status</th>
                    <th className="text-left py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4">No tours available</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error in tours page:', error);
    redirect("/");
  }
} 