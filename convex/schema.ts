import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  tours: defineTable({
    name: v.string(),
    description: v.string(),
    price: v.number(),
    duration: v.string(),
    destinationId: v.id("destinations"),
    imageUrl: v.optional(v.string()),
    status: v.string(),
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