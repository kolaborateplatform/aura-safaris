import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    name: v.string(),
    description: v.string(),
    imageUrl: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const destinationId = await ctx.db.insert("destinations", {
      ...args,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    return destinationId;
  },
});

export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("destinations").collect();
  },
});

export const get = query({
  args: { id: v.id("destinations") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const update = mutation({
  args: {
    id: v.id("destinations"),
    name: v.string(),
    description: v.string(),
    imageUrl: v.optional(v.string()),
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
  args: { id: v.id("destinations") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
}); 