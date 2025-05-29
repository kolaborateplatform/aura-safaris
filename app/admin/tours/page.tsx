"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Link from "next/link";
import AdminSidebar from '@/components/AdminSidebar';
import { Id } from "../../../convex/_generated/dataModel";

export default function ToursPage() {
  const tours = useQuery(api.tours.list);
  // Optionally, fetch destinations to display names instead of IDs
  const destinations = useQuery(api.destinations.list);
  const deleteTour = useMutation(api.tours.remove);

  const getDestinationName = (id: string) => {
    return destinations?.find(dest => dest._id === id)?.name || "-";
  };

  const handleDelete = async (id: Id<"tours">) => {
    if (window.confirm("Are you sure you want to delete this tour?")) {
      try {
        await deleteTour({ id });
      } catch (error) {
        console.error("Error deleting tour:", error);
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
            <h1 className="text-2xl font-bold text-gray-900">All Tours</h1>
            <Link 
              href="/admin/tours/add-tour"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add New Tour
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours && tours.length > 0 ? (
              tours.map(tour => (
                <div key={tour._id} className="bg-white rounded-lg shadow overflow-hidden flex flex-col">
                  {tour.imageUrl ? (
                    <img
                      src={tour.imageUrl}
                      alt={tour.name}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">No image</span>
                    </div>
                  )}
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{tour.name}</h3>
                    <p className="text-gray-600 text-sm mb-1">Destination: <span className="font-medium">{getDestinationName(tour.destinationId)}</span></p>
                    <p className="text-gray-600 text-sm mb-1">Duration: {tour.duration}</p>
                    <p className="text-gray-600 text-sm mb-1">Price: <span className="font-medium">${tour.price}</span></p>
                    <p className="text-gray-600 text-sm mb-2">Status: {tour.status}</p>
                    <div className="mt-auto flex justify-end space-x-2">
                      <Link href={`/admin/tours/edit/${tour._id}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium">Edit</Link>
                      <button 
                        onClick={() => handleDelete(tour._id)}
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
                No tours available
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 