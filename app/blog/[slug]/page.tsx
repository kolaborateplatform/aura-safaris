"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import { use } from "react";

export default function BlogPostPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params);
  const blogs = useQuery(api.blog.list);
  
  if (!blogs) return <div>Loading...</div>;
  
  const post = blogs.find(p => 
    p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === slug
  );
  
  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="relative h-[50vh] rounded-xl overflow-hidden mb-8">
          {post.imageUrl ? (
            <Image
              src={post.imageUrl}
              alt={post.title}
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

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-600 space-x-4">
            <span>By {post.author}</span>
            <span>•</span>
            <time dateTime={post.createdAt.toString()}>
              {new Date(post.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
        </header>

        {/* Content */}
        <div className="prose max-w-none">
          {/* Content is stored as plain text, split by newlines */}
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-600">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Share Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h2 className="text-sm font-medium text-gray-500 mb-3">Share this post</h2>
          <div className="flex space-x-4">
            <button className="text-gray-600 hover:text-blue-600">
              Twitter
            </button>
            <button className="text-gray-600 hover:text-blue-600">
              Facebook
            </button>
            <button className="text-gray-600 hover:text-blue-600">
              LinkedIn
            </button>
          </div>
        </div>
      </article>
    </div>
  );
} 