"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import AdminSidebar from "@/components/AdminSidebar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Id } from "../../../../convex/_generated/dataModel";

export default function DestinationsPage() {
  const router = useRouter();
  const destinations = useQuery(api.destinations.list);
  const deleteDestination = useMutation(api.destinations.remove);

  const handleDelete = async (id: Id<"destinations">) => {
    if (window.confirm("Are you sure you want to delete this destination?")) {
      try {
        await deleteDestination({ id });
      } catch (error) {
        console.error("Error deleting destination:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <AdminSidebar />

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">All Destinations</h1>
            <Link 
              href="/admin/tours/destinations/add"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add New Destination
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations?.map((destination) => (
              <div key={destination._id} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="relative h-48">
                  {destination.imageUrl ? (
                    <img 
                      src={destination.imageUrl} 
                      alt={destination.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">No image</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{destination.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{destination.description}</p>
                  <div className="flex justify-end space-x-2">
                    <Link 
                      href={`/admin/tours/destinations/edit/${destination._id}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Edit
                    </Link>
                    <button 
                      onClick={() => handleDelete(destination._id)}
                      className="text-red-600 hover:text-red-800 text-sm font-medium"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {(!destinations || destinations.length === 0) && (
              <div className="col-span-full text-center py-8 text-gray-500">
                No destinations available
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 