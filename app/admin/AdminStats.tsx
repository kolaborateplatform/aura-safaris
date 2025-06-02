"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function AdminStats() {
  const tours = useQuery(api.tours.list);
  const blogPosts = useQuery(api.blog.list);
  const destinations = useQuery(api.destinations.list);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Tours</h3>
        <p className="text-3xl font-bold text-blue-600">{tours ? tours.length : 0}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Blog Posts</h3>
        <p className="text-3xl font-bold text-green-600">{blogPosts ? blogPosts.length : 0}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Destinations</h3>
        <p className="text-3xl font-bold text-purple-600">{destinations ? destinations.length : 0}</p>
      </div>
    </div>
  );
} 