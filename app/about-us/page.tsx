import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function AboutUs() {
  return (
    <main>
      <Breadcrumb 
        title="About Us" 
        backgroundImage="/images/about-bg.jpg"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Welcome to our travel community! We are passionate about creating unforgettable experiences
              and helping travelers discover the world's most beautiful destinations. Our team of expert
              guides and travel enthusiasts work tirelessly to curate the perfect adventures for you.
            </p>
            
            <h2 className="text-3xl font-bold mb-6 mt-12">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              Our mission is to inspire and enable travelers to explore the world with confidence,
              providing authentic experiences that create lasting memories. We believe in sustainable
              tourism and responsible travel practices that benefit both our travelers and the
              communities we visit.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12">Why Choose Us</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li>Expert local guides with years of experience</li>
              <li>Carefully curated itineraries</li>
              <li>Small group sizes for personalized attention</li>
              <li>24/7 customer support</li>
              <li>Best price guarantee</li>
              <li>Sustainable and responsible tourism practices</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
} 