import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function AddTourPage() {
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
            <h1 className="text-2xl font-bold">Add New Tour</h1>
            <Link 
              href="/admin/tours"
              className="text-gray-600 hover:text-gray-800"
            >
              ← Back to Tours
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tour Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter tour name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Destination
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter destination"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration (days)
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter duration"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter price"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Enter tour description"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tour Images
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                      >
                        <span>Upload files</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Create Tour
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error in add tour page:', error);
    redirect("/");
  }
} 