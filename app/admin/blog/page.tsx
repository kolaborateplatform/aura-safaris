"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Link from "next/link";
import AdminSidebar from '@/components/AdminSidebar';
import { Id } from "../../../convex/_generated/dataModel";

export default function BlogPage() {
  const blogs = useQuery(api.blog.list);
  const deleteBlog = useMutation(api.blog.remove);

  const handleDelete = async (id: Id<"blogPosts">) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      try {
        await deleteBlog({ id });
      } catch (error) {
        console.error("Error deleting blog post:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1 p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">All Blog Posts</h1>
            <Link 
              href="/admin/blog/add-blog"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add New Blog
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs && blogs.length > 0 ? (
              blogs.map(blog => (
                <div key={blog._id} className="bg-white rounded-lg shadow overflow-hidden flex flex-col">
                  {blog.imageUrl ? (
                    <img
                      src={blog.imageUrl}
                      alt={blog.title}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">No image</span>
                    </div>
                  )}
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{blog.title}</h3>
                    <p className="text-gray-600 text-sm mb-1">Author: <span className="font-medium">{blog.author}</span></p>
                    <p className="text-gray-600 text-sm mb-1">Status: {blog.status}</p>
                    <div className="mt-auto flex justify-end items-center space-x-2">
                      <Link href={`/admin/blog/edit/${blog._id}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium">Edit</Link>
                      <button 
                        onClick={() => handleDelete(blog._id)}
                        className="text-red-600 hover:text-red-800 text-sm font-medium"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-8 text-gray-500">
                No blog posts available
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 