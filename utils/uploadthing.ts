import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async () => {
      // Verify authentication here if needed
      return {};
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata);
      // Always construct the public utfs.io URL from file.key
      const publicUrl = `https://utfs.io/f/${file.key}`;
      return { url: publicUrl };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter; 