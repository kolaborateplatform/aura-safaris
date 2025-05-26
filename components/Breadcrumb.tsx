import React from 'react';
import Link from 'next/link';

interface BreadcrumbProps {
  title: string;
  backgroundImage?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ 
  title, 
  backgroundImage = '/images/breadcrumb-bg.jpg' 
}) => {
  return (
    <div 
      className="relative h-[300px] w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          <div className="flex items-center text-white">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb; 