"use client";

import React from 'react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Breadcrumb 
        title="Contact Us"
      />
      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Section: Tailor-Made Journeys */}
          <div className="lg:w-1/2">
            <p className="text-lg text-gray-600 font-secondary mb-2">Tailor-Made Journeys</p>
            <h2 className="text-5xl font-bold mb-6 text-primary font-primary leading-tight">Let's Plan Your Trip With You</h2>
            <p className="text-gray-700 mb-8 font-secondary">
              Your dream African adventure, crafted just for you. Whether you seek a thrilling wildlife safari, a cultural immersion, or a
              luxurious escape, our experts will design a personalized itinerary that exceeds your expectations.
            </p>

            <div className="space-y-8 text-center">
              <div>
                {/* Phone Icon */}
                <div className="mb-2">
                  <FaPhone className="mx-auto text-4xl text-primary" />
                </div>
                <Link href="tel:+256774331380" className="text-blue-600 hover:underline text-lg font-semibold">
                  +256-785-664-747
                </Link>
              </div>

              <div>
                {/* Email Icon */}
                <div className="mb-2">
                  <FaEnvelope className="mx-auto text-4xl text-primary" />
                </div>
                <Link href="mailto:info@aurasafaritours.com" className="text-blue-600 hover:underline text-lg font-semibold">
                  info@aurasafaritours.com
                </Link>
              </div>

              <div>
                {/* Location Icon */}
                <div className="mb-2">
                  <FaMapMarkerAlt className="mx-auto text-4xl text-primary" />
                </div>
                <p className="text-gray-700 text-lg font-semibold">
                  Mogas Petro Station Close, <br /> Banda, Kampala, Uganda
                </p>
              </div>
            </div>
          </div>

          {/* Right Section: Design Your Safari Form */}
          <div className="lg:w-1/2 bg-secondary p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center text-primary font-primary">Design Your Safari</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-primary mb-1">
                    First name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-primary mb-1">
                    Last name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div>
                <p className="block text-sm font-medium text-primary mb-2">Which Country are you interested in doing a Safari in? *</p>
                <div className="grid grid-cols-2 gap-4">
                  <label className="flex items-center">
                    <input type="checkbox" name="country" value="Uganda" className="form-checkbox" />
                    <span className="ml-2 text-primary">Uganda</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" name="country" value="Kenya" className="form-checkbox" />
                    <span className="ml-2 text-primary">Kenya</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" name="country" value="Tanzania" className="form-checkbox" />
                    <span className="ml-2 text-primary">Tanzania</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" name="country" value="Rwanda" className="form-checkbox" />
                    <span className="ml-2 text-primary">Rwanda</span>
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-primary mb-1">
                  Start Date of trip *
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="tripType" className="block text-sm font-medium text-primary mb-1">
                  Type of Trip *
                </label>
                <select
                  id="tripType"
                  name="tripType"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                >
                  <option value="">Select Type</option>
                  <option value="wildlife">Wildlife Safari</option>
                  <option value="cultural">Cultural Immersion</option>
                  <option value="luxury">Luxury Escape</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="numPeople" className="block text-sm font-medium text-primary mb-1">
                    Number of People Traveling *
                  </label>
                  <input
                    type="number"
                    id="numPeople"
                    name="numPeople"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="numDays" className="block text-sm font-medium text-primary mb-1">
                    Number of Travel Days *
                  </label>
                  <input
                    type="number"
                    id="numDays"
                    name="numDays"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-primary mb-1">
                  Budget Per Person
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                >
                  <option value="">Select Budget</option>
                  <option value="low">Less than $1000</option>
                  <option value="medium">$1000 - $3000</option>
                  <option value="high">More than $3000</option>
                </select>
              </div>

              <div>
                <label htmlFor="specialRequest" className="block text-sm font-medium text-primary mb-1">
                  Special Request
                </label>
                <textarea
                  id="specialRequest"
                  name="specialRequest"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-secondary font-bold py-3 px-6 rounded-md hover:bg-secondary hover:text-primary transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
