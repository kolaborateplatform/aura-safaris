"use client";

import { useState, useEffect } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../../../convex/_generated/api";
import AdminSidebar from "@/components/AdminSidebar";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { use } from "react";

export default function EditDestinationPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params);
  const router = useRouter();
  const destinations = useQuery(api.destinations.list);
  const updateDestination = useMutation(api.destinations.update);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imageUrl: "",
  });

  useEffect(() => {
    if (destinations) {
      const destination = destinations.find(d => 
        d.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === slug
      );
      if (destination) {
        setFormData({
          name: destination.name,
          description: destination.description,
          imageUrl: destination.imageUrl || "",
        });
      }
    }
  }, [destinations, slug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const destination = destinations?.find(d => 
        d.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === slug
      );
      if (!destination) return;

      await updateDestination({
        id: destination._id,
        name: formData.name,
        description: formData.description,
        imageUrl: formData.imageUrl,
      });
      router.push("/admin/tours/destinations");
    } catch (error) {
      console.error("Error updating destination:", error);
    }
  };

  if (!destinations) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1 p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Edit Destination</h1>
            <Link
              href="/admin/tours/destinations"
              className="text-blue-600 hover:text-blue-800"
            >
              Back to Destinations
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Destination Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image URL
              </label>
              <input
                type="text"
                value={formData.imageUrl}
                onChange={(e) => setFormData(prev => ({ ...prev, imageUrl: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Update Destination
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}