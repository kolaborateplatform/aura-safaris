"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

export default function DestinationDetailsPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params);
  const destinations = useQuery(api.destinations.list);
  const tours = useQuery(api.tours.list);
  
  if (!destinations || !tours) return <div>Loading...</div>;
  
  const destination = destinations.find(d => 
    d.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === slug
  );
  
  if (!destination) return notFound();

  const relatedTours = tours.filter(tour => tour.destinationId === destination._id);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="relative h-[60vh] rounded-xl overflow-hidden mb-8">
          {destination.imageUrl ? (
            <Image
              src={destination.imageUrl}
              alt={destination.name}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">No image available</span>
            </div>
          )}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white text-center">{destination.name}</h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose max-w-none mb-12">
          <p className="text-lg text-gray-600 mb-6">{destination.description}</p>
        </div>

        {/* Related Tours */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Available Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedTours.map(tour => (
              <Link 
                key={tour._id}
                href={`/tours/${tour.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                className="block"
              >
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">{tour.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{tour.durationDays} Days</p>
                  <p className="text-lg font-medium text-blue-600">${tour.regularPrice}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}