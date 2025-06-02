"use client";

import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

export default function Tours() {
  const tours = useQuery(api.tours.list);

  if (!tours) {
    return (
      <main>
        <Breadcrumb 
          title="Our Tours" 
          backgroundImageUrl="/images/tours-bg.jpg"
        />
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Breadcrumb 
        title="Our Tours"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Discover Our Tours</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully curated selection of tours, designed to provide
              unforgettable experiences and create lasting memories.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {tours.map((tour) => (
              <div key={tour._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                {tour.featuredImage && (
                  <div className="relative h-48">
                    <Image
                      src={tour.featuredImage}
                      alt={tour.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{tour.name}</h3>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">{tour.durationDays}</span>
                    <span className="text-blue-600 font-bold">${tour.regularPrice}</span>
                  </div>
                  <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 