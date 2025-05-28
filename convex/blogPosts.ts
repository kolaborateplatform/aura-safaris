import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  handler: async (ctx) => {
    const blogPosts = await ctx.db.query("blogPosts")
      .collect();
    return blogPosts;
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    content: v.string(),
    imageUrl: v.optional(v.string()),
    author: v.string(),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    const blogPostId = await ctx.db.insert("blogPosts", {
      ...args,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    return blogPostId;
  },
}); 