import Link from 'next/link';

export default function AdminSidebar() {
  return (
    <div className="w-64 min-h-screen bg-accent shadow-md relative">
      <div className="p-4">
        <h2 className="text-xl font-semibold text-white">Admin Panel</h2>
      </div>
      <nav className="mt-4">
        <div className="px-4 py-2">
          <Link href="/admin" className="block text-white hover:text-secondary transition-colors">Dashboard</Link>
        </div>
        <div className="px-4 py-2 group relative">
          <Link href="/admin/tours" className="block text-white hover:text-secondary transition-colors">Tours</Link>
          <div className="hidden group-hover:block absolute left-full top-0 w-48 bg-accent shadow-lg py-2 z-10">
            <Link href="/admin/tours" className="block px-4 py-2 text-white hover:text-secondary transition-colors">All Tours</Link>
            <Link href="/admin/tours/add-tour" className="block px-4 py-2 text-white hover:text-secondary transition-colors">Add Tour</Link>
            <Link href="/admin/tours/destinations" className="block px-4 py-2 text-white hover:text-secondary transition-colors">Destinations</Link>
          </div>
        </div>
        <div className="px-4 py-2 group relative">
          <Link href="/admin/blog" className="block text-white hover:text-secondary transition-colors">Blog</Link>
          <div className="hidden group-hover:block absolute left-full top-0 w-48 bg-accent shadow-lg py-2 z-10">
            <Link href="/admin/blog" className="block px-4 py-2 text-white hover:text-secondary transition-colors">All Blogs</Link>
            <Link href="/admin/blog/add" className="block px-4 py-2 text-white hover:text-secondary transition-colors">Add Blog</Link>
          </div>
        </div>
      </nav>
    </div>
  );
} 