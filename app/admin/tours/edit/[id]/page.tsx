"use client";

import { useState, useEffect, use } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import { Id } from "../../../../../convex/_generated/dataModel";
import AdminSidebar from "@/components/AdminSidebar";
import CustomUploadButton from "@/components/UploadButton";
import { useRouter } from "next/navigation";

export default function EditTourPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  const tour = useQuery(api.tours.get, { id: resolvedParams.id as Id<"tours"> });
  const destinations = useQuery(api.destinations.list);
  const updateTour = useMutation(api.tours.update);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    regularPrice: 0,
    durationDays: 0,
    destinationId: "",
    featuredImage: "",
    status: "draft",
  });

  useEffect(() => {
    if (tour) {
      setFormData({
        name: tour.name,
        description: tour.description,
        regularPrice: tour.regularPrice,
        durationDays: tour.durationDays,
        destinationId: tour.destinationId,
        featuredImage: tour.featuredImage || "",
        status: tour.status,
      });
    }
  }, [tour]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await updateTour({
        id: resolvedParams.id as Id<"tours">,
        ...formData,
        destinationId: formData.destinationId as Id<"destinations">,
      });
      router.push("/admin/tours");
    } catch (error) {
      console.error("Error updating tour:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

 const handleImageUpload = (url: string | string[]) => {
    const featuredImage = Array.isArray(url) ? url[0] : url;
    setFormData(prev => ({ ...prev, featuredImage: featuredImage }));
  };

  if (!tour) {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="flex">
          <AdminSidebar />
          <div className="flex-1 p-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1 p-8">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Tour</h1>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Tour Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                <select
                  value={formData.destinationId}
                  onChange={e => setFormData(prev => ({ ...prev, destinationId: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select a destination</option>
                  {destinations?.map(dest => (
                    <option key={dest._id} value={dest._id}>
                      {dest.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Duration (days)</label>
                <input
                  type="number"
                  value={formData.durationDays}
                  onChange={e => setFormData(prev => ({ ...prev, durationDays: Number(e.target.value) }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                <input
                  type="number"
                  value={formData.regularPrice}
                  onChange={e => setFormData(prev => ({ ...prev, regularPrice: Number(e.target.value) }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={formData.description}
                  onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={formData.status}
                  onChange={e => setFormData(prev => ({ ...prev, status: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Tour Image</label>
                <CustomUploadButton
                  onUploadComplete={handleImageUpload}
                  onUploadError={error => console.error("Upload error:", error)}
                />
                {formData.featuredImage && (
                  <div className="mt-2">
                    <img
                      src={formData.featuredImage}
                      alt="Preview"
                      className="w-32 h-32 object-cover rounded"
                    />
                  </div>
                )}
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50"
                >
                  {isSubmitting ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
