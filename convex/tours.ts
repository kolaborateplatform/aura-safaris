import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    name: v.string(),
    description: v.string(),
    price: v.number(),
    duration: v.string(),
    destinationId: v.id("destinations"),
    imageUrl: v.optional(v.string()),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    const tourId = await ctx.db.insert("tours", {
      ...args,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    return tourId;
  },
});

export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("tours").collect();
  },
});

export const get = query({
  args: { id: v.id("tours") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const update = mutation({
  args: {
    id: v.id("tours"),
    name: v.string(),
    description: v.string(),
    price: v.number(),
    duration: v.string(),
    destinationId: v.id("destinations"),
    imageUrl: v.optional(v.string()),
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
  args: { id: v.id("tours") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
}); 