import Link from 'next/link';

export default function AdminSidebar() {
  return (
    <div className="w-64 min-h-screen bg-white shadow-md relative">
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">Admin Panel</h2>
      </div>
      <nav className="mt-4">
        <div className="px-4 py-2">
          <Link href="/admin" className="block text-gray-600 hover:text-gray-900">Dashboard</Link>
        </div>
        <div className="px-4 py-2 group relative">
          <Link href="/admin/tours" className="block text-gray-600 hover:text-gray-900">Tours</Link>
          <div className="hidden group-hover:block absolute left-full top-0 w-48 bg-white shadow-lg rounded-md py-2 z-10">
            <Link href="/admin/tours" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">All Tours</Link>
            <Link href="/admin/tours/add-tour" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Add Tour</Link>
            <Link href="/admin/tours/destinations" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Destinations</Link>
          </div>
        </div>
        <div className="px-4 py-2 group relative">
          <Link href="/admin/blog" className="block text-gray-600 hover:text-gray-900">Blog</Link>
          <div className="hidden group-hover:block absolute left-full top-0 w-48 bg-white shadow-lg rounded-md py-2 z-10">
            <Link href="/admin/blog" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">All Blogs</Link>
            <Link href="/admin/blog/add" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Add Blog</Link>
          </div>
        </div>
      </nav>
    </div>
  );
} 