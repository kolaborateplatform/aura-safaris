"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import Image from "next/image";
import Link from "next/link";

export default function DestinationsPage() {
  const destinations = useQuery(api.destinations.getDestinations);

  if (!destinations) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Destinations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination) => (
          <div
            key={destination._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {destination.imageUrl && (
              <div className="relative h-48 w-full">
                <Image
                  src={destination.imageUrl}
                  alt={destination.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{destination.name}</h2>
              <p className="text-gray-600 mb-4">{destination.description}</p>
              <Link
                href={`/destinations/${destination._id}`}
                className="inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors duration-300"
              >
                Explore Tours
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 