import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    title: v.string(),
    content: v.string(),
    imageUrl: v.optional(v.string()),
    author: v.string(),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    const blogId = await ctx.db.insert("blogPosts", {
      ...args,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    return blogId;
  },
});

export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("blogPosts").collect();
  },
});

export const get = query({
  args: { id: v.id("blogPosts") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const update = mutation({
  args: {
    id: v.id("blogPosts"),
    title: v.string(),
    content: v.string(),
    imageUrl: v.optional(v.string()),
    author: v.string(),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    const { id, ...data } = args;
    await ctx.db.patch(id, {
      ...data,
      updatedAt: Date.now(),
    });
  },
});

export const remove = mutation({
  args: { id: v.id("blogPosts") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
}); 