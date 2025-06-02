"use client";

import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Doc } from "@/convex/_generated/dataModel";

export default function BlogPage() {
  const blogPosts = useQuery(api.blogPosts.list);

  console.log("Blog Posts:", blogPosts); // Debug log

  if (!blogPosts) {
    return (
      <main>
        <Breadcrumb 
          title="Our Blog"
        />
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </main>
    );
  }

  if (blogPosts.length === 0) {
    return (
      <main>
        <Breadcrumb 
          title="Our Blog"
        />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">No Blog Posts Yet</h2>
            <p className="text-gray-600">
              We're working on creating some amazing content for you. Please check back soon!
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Breadcrumb 
        title="Our Blog"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover travel tips, destination guides, and exciting stories from our adventures.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post: Doc<"blogPosts">) => (
              <div key={post._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                {post.imageUrl && (
                  <div className="relative h-48">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>By {post.author}</span>
                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                  </div>
                  <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                    Read More
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