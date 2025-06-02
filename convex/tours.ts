import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    name: v.string(),
    description: v.string(),
    regularPrice: v.number(),
    salePrice: v.optional(v.number()),
    childrenPrice: v.optional(v.number()),
    babyPrice: v.optional(v.number()),
    durationDays: v.number(),
    destinationId: v.id("destinations"),
    featuredImage: v.optional(v.string()),
    galleryImages: v.optional(v.array(v.string())),
    dayDescriptions: v.optional(v.array(v.string())),
    status: v.string(),
    fullPayment: v.optional(v.string()),
    fixedTimes: v.optional(v.array(v.object({ checkIn: v.string(), checkOut: v.string() }))),
    features: v.optional(v.array(v.object({ iconClass: v.string(), label: v.string(), description: v.string() }))),
  },
  handler: async (ctx, args) => {
    const tourId = await ctx.db.insert("tours", {
      name: args.name,
      description: args.description,
      featuredImage: args.featuredImage ?? "",
      galleryImages: args.galleryImages ?? [],
      regularPrice: args.regularPrice,
      salePrice: args.salePrice ?? 0,
      childrenPrice: args.childrenPrice ?? 0,
      babyPrice: args.babyPrice ?? 0,
      durationDays: args.durationDays,
      dayDescriptions: args.dayDescriptions ?? [],
      status: args.status,
      destinationId: args.destinationId,
      fullPayment: args.fullPayment ?? "No",
      fixedTimes: args.fixedTimes ?? [],
      features: args.features ?? [],
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
    name: v.optional(v.string()),
    description: v.optional(v.string()),
    regularPrice: v.optional(v.number()),
    salePrice: v.optional(v.number()),
    childrenPrice: v.optional(v.number()),
    babyPrice: v.optional(v.number()),
    durationDays: v.optional(v.number()),
    destinationId: v.optional(v.id("destinations")),
    featuredImage: v.optional(v.string()),
    galleryImages: v.optional(v.array(v.string())),
    dayDescriptions: v.optional(v.array(v.string())),
    status: v.optional(v.string()),
    fullPayment: v.optional(v.string()),
    fixedTimes: v.optional(v.array(v.object({ checkIn: v.string(), checkOut: v.string() }))),
    features: v.optional(v.array(v.object({ iconClass: v.string(), label: v.string(), description: v.string() }))),
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
