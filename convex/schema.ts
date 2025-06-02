import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  tours: defineTable({
    name: v.string(),
    description: v.string(),
    featuredImage: v.optional(v.string()),
    galleryImages: v.optional(v.array(v.string())),
    regularPrice: v.number(),
    salePrice: v.number(),
    childrenPrice: v.number(),
    babyPrice: v.number(),
    durationDays: v.number(),
    dayDescriptions: v.optional(v.array(v.string())),
    status: v.string(),
    destinationId: v.id("destinations"),
    fullPayment: v.string(),
    fixedTimes: v.optional(v.array(v.object({ checkIn: v.string(), checkOut: v.string() }))),
    features: v.optional(v.array(v.object({ iconClass: v.string(), label: v.string(), description: v.string() }))),
    createdAt: v.number(),
    updatedAt: v.number(),
  }),

  destinations: defineTable({
    name: v.string(),
    description: v.string(),
    imageUrl: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  }),

  blogPosts: defineTable({
    title: v.string(),
    content: v.string(),
    imageUrl: v.optional(v.string()),
    author: v.string(),
    status: v.string(),
    createdAt: v.number(),
    updatedAt: v.number(),
  }),
}); 