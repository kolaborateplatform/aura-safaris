"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import { use } from "react";

export default function TourDetailsPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params);
  const tours = useQuery(api.tours.list);
  const destinations = useQuery(api.destinations.list);
  
  if (!tours || !destinations) return <div>Loading...</div>;
  
  const tour = tours.find(t => 
    t.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === slug
  );
  
  if (!tour) return notFound();

  const destination = destinations.find(d => d._id === tour.destinationId);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="relative h-[60vh] rounded-xl overflow-hidden mb-8">
          {tour.featuredImage ? (
            <Image
              src={tour.featuredImage}
              alt={tour.name}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">No image available</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{tour.name}</h1>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 mb-6">{tour.description}</p>
              
              {tour.features && tour.features.length > 0 && (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Tour Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tour.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <i className={`${feature.iconClass} text-blue-500 text-xl mt-1`}></i>
                        <div>
                          <h3 className="font-semibold text-gray-900">{feature.label}</h3>
                          <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {tour.dayDescriptions && tour.dayDescriptions.length > 0 && (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Daily Itinerary</h2>
                  <div className="space-y-6">
                    {tour.dayDescriptions.map((description, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-4">
                        <h3 className="font-semibold text-lg text-gray-900">Day {index + 1}</h3>
                        <p className="text-gray-600">{description}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {tour.galleryImages && tour.galleryImages.length > 0 && (
                <>
                  <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Gallery</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {tour.galleryImages.map((image, index) => (
                      <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src={image}
                          alt={`${tour.name} gallery image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-xl p-6 sticky top-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Duration</h3>
                  <p className="text-lg font-semibold text-gray-900">{tour.durationDays} Days</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Destination</h3>
                  <p className="text-lg font-semibold text-gray-900">{destination?.name || 'Unknown'}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Regular Price</h3>
                  <p className="text-lg font-semibold text-gray-900">${tour.regularPrice}</p>
                </div>
                {tour.salePrice > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Sale Price</h3>
                    <p className="text-lg font-semibold text-green-600">${tour.salePrice}</p>
                  </div>
                )}
                {tour.childrenPrice > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Children Price</h3>
                    <p className="text-lg font-semibold text-gray-900">${tour.childrenPrice}</p>
                  </div>
                )}
                {tour.babyPrice > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Baby Price</h3>
                    <p className="text-lg font-semibold text-gray-900">${tour.babyPrice}</p>
                  </div>
                )}
                {tour.fixedTimes && tour.fixedTimes.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Available Times</h3>
                    <div className="space-y-2 mt-2">
                      {tour.fixedTimes.map((time, index) => (
                        <div key={index} className="text-sm">
                          <p>Check-in: {time.checkIn}</p>
                          <p>Check-out: {time.checkOut}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}