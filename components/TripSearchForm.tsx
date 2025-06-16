"use client";

import { useState } from "react";
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function TripSearchForm() {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [travelers, setTravelers] = useState(1);
  const [showDestinations, setShowDestinations] = useState(false);
  
  const destinations = useQuery(api.destinations.list);

  // Filter destinations based on search input
  const filteredDestinations = destinations?.filter(dest => 
    dest.name.toLowerCase().includes(destination.toLowerCase())
  ) || [];

  return (
    <form
      className="backdrop-blur bg-black/40 rounded-xl flex flex-col md:flex-row items-center gap-4 md:gap-0 px-6 py-4 shadow-lg w-full max-w-4xl mx-auto"
      onSubmit={e => {
        e.preventDefault();
        // TODO: handle search logic here
      }}
    >
      {/* Destination */}
      <div className="flex-1 flex flex-col md:mr-6 relative">
        <label className="text-yellow-400 font-semibold mb-1">Destination</label>
        <input
          type="text"
          placeholder="Where to?"
          className="bg-transparent border-b border-gray-400 text-white placeholder-gray-400 focus:outline-none py-1"
          value={destination}
          onChange={e => {
            setDestination(e.target.value);
            setShowDestinations(true);
          }}
          onFocus={() => setShowDestinations(true)}
        />
        
        {/* Destination Dropdown */}
        {showDestinations && destination && filteredDestinations.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
            {filteredDestinations.map((dest) => (
              <button
                key={dest._id}
                type="button"
                className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none"
                onClick={() => {
                  setDestination(dest.name);
                  setShowDestinations(false);
                }}
              >
                <div className="font-medium text-gray-900">{dest.name}</div>
                <div className="text-sm text-gray-600 truncate">{dest.description}</div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Check In */}
      <div className="flex-1 flex flex-col md:mr-6">
        <label className="text-yellow-400 font-semibold mb-1">Check In</label>
        <div className="flex items-center border-b border-gray-400">
          <FaCalendarAlt className="text-yellow-400 mr-2" />
          <input
            type="date"
            className="bg-transparent text-white placeholder-gray-400 focus:outline-none py-1 w-full"
            value={checkIn}
            onChange={e => setCheckIn(e.target.value)}
          />
        </div>
      </div>

      {/* Travelers */}
      <div className="flex-1 flex flex-col md:mr-6">
        <label className="text-yellow-400 font-semibold mb-1">Travelers</label>
        <div className="flex items-center border-b border-gray-400">
          <FaUser className="text-yellow-400 mr-2" />
          <select
            className="bg-transparent text-white focus:outline-none py-1 w-full"
            value={travelers}
            onChange={e => setTravelers(Number(e.target.value))}
          >
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1} className="text-black">
                {i + 1} {i === 0 ? "Person" : "People"}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Search Button */}
      <button
        type="submit"
        className="ml-0 md:ml-6 mt-4 md:mt-0 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-md transition flex items-center"
      >
        Search Tours <span className="ml-2">&rarr;</span>
      </button>
    </form>
  );
} 