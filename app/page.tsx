"use client";

import Image from "next/image";
import TripSearchForm from "@/components/TripSearchForm";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { useRef, useEffect, useState } from "react";

export default function Home() {
  const tours = useQuery(api.tours.list);
  const destinations = useQuery(api.destinations.list);

  // Welcome section animation
  const welcomeTextRef = useRef(null);
  const [welcomeVisible, setWelcomeVisible] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setWelcomeVisible(true);
      },
      { threshold: 0.2 }
    );
    if (welcomeTextRef.current) observer.observe(welcomeTextRef.current);
    return () => {
      if (welcomeTextRef.current) observer.unobserve(welcomeTextRef.current);
    };
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section
        aria-label="Hero Section"
        className="relative flex items-center justify-center min-h-screen w-full bg-cover bg-center pt-16 md:pt-0"
        style={{ backgroundImage: "url('/images/hero.webp')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 drop-shadow-lg text-primary">Let's Explore</h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 drop-shadow-lg font-secondary">Would you like to discover East Africa?</p>
          <TripSearchForm />
          <button className="px-6 md:px-8 py-3 md:py-4 bg-secondary text-primary font-bold rounded shadow-lg hover:bg-primary hover:text-secondary transition text-base md:text-lg mt-6 md:mt-8 drop-shadow-lg">
            Get Started
          </button>
        </div>
      </section>

      {/* WELCOME SECTION */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-3/5">
            <div className="relative w-full md:w-[875px] h-[400px] md:h-[775px] overflow-hidden">
              <Image
                src="/images/welcome.webp"
                alt="Safari vehicle at sunset"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
          <div
            ref={welcomeTextRef}
            className={`w-full md:w-2/5 bg-white/90 p-6 md:p-8 shadow-lg relative z-10 transition-all duration-700 ease-out transform
              ${welcomeVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4 font-primary">Tailor-Made African Adventures: Your Journey, Our Expertise</h2>
            <p className="text-base md:text-lg text-accent font-semibold mb-2 font-secondary">Discover the wonders of Africa from wild savannahs to ancient forest heartlands.</p>
            <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 font-secondary">
              Step into a world where every journey is crafted just for you. At Aura Safaris, we blend local expertise with a passion for adventure, ensuring your safari is as unique as you are. Whether you dream of sunrise game drives, cultural encounters, or tranquil escapes, our team is dedicated to making your African adventure unforgettable.
            </p>
            <button className="px-6 md:px-8 py-3 md:py-4 bg-primary text-secondary font-bold rounded shadow-lg hover:bg-secondary hover:text-primary transition text-base md:text-lg">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* Image div - moved to top for mobile */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative w-full aspect-[4/3] md:aspect-[4/5] lg:aspect-[4/6]">
              <Image
                src="/images/about-aura.webp"
                alt="tourists"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
          {/* Text content - will show after image on mobile */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <p className="text-base md:text-lg text-gray-600 font-secondary mb-2">Our Story</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-primary font-primary leading-tight">Crafting Unforgettable Experiences</h2>
            <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 font-secondary">
              Aura Safaris is the culmination of Martin Grey's lifelong pursuit of discovery. From the misty forests of the Pacific
              Northwest to sprawling deserts in Asia and historic cities in Europe, Martin's childhood rucksack carried a single mission: to
              understand the world and its people. Yet it was in East Africa—where Uganda's kaleidoscope of cultures, lush hills, and
              teeming wildlife forged an unbreakable bond—that he found his true calling.
            </p>
            <p className="text-sm md:text-base text-gray-700 mb-6 md:mb-8 font-secondary">
              Fueled by the conviction that travel can be a catalyst for positive change, Martin teamed up with local guides,
              dedicated conservationists, and community leaders to create Aura Safaris. Our itineraries blend off-the-beaten-path
              adventures with authentic cultural exchanges, all designed to uplift local economies, protect fragile ecosystems, and leave a
              meaningful legacy. Ready to embark on a journey that transforms both traveler and destination?
            </p>
            <button className="px-6 md:px-8 py-3 md:py-4 bg-secondary text-primary font-bold rounded shadow-lg hover:bg-primary hover:text-secondary transition text-base md:text-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* DESTINATIONS SECTION */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-primary font-primary">Destination Highlights</h2>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto font-secondary">
              Discover Amazing Locations
            </p>
          </div>

          {!destinations ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {destinations.slice(0, 4).map((destination) => (
                <div 
                  key={destination._id} 
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {destination.imageUrl && (
                    <div className="relative h-48 md:h-64">
                      <Image
                        src={destination.imageUrl}
                        alt={destination.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 font-primary">{destination.name}</h3>
                    <p className="text-xs md:text-sm font-secondary line-clamp-2">{destination.description}</p>
                    <button className="mt-3 md:mt-4 bg-secondary text-primary font-bold py-2 px-4 md:px-6 rounded hover:bg-primary hover:text-secondary transition-colors text-sm md:text-base">
                      Explore
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* TOURS SECTION */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-primary font-primary">Featured Tours</h2>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto font-secondary">
              Explore Our Top Safari Tours
            </p>
          </div>

          {!tours ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {tours.slice(0, 4).map((tour) => (
                <div 
                  key={tour._id} 
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {tour.featuredImage && (
                    <div className="relative h-48 md:h-64">
                      <Image
                        src={tour.featuredImage}
                        alt={tour.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 font-primary">{tour.name}</h3>
                    <p className="text-xs md:text-sm font-secondary line-clamp-2">{tour.description}</p>
                    <div className="flex justify-between items-center mt-2 md:mt-3">
                      <span className="text-base md:text-lg font-bold text-secondary">${tour.regularPrice}</span>
                      <button className="bg-secondary text-primary font-bold py-2 px-4 md:px-6 rounded hover:bg-primary hover:text-secondary transition-colors text-sm md:text-base">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
