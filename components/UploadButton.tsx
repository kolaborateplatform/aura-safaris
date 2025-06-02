"use client";

import { UploadButton } from "@uploadthing/react";
import { OurFileRouter } from "@/utils/uploadthing";
import { useState } from "react";

interface UploadButtonProps {
  onUploadComplete?: (url: string | string[]) => void;
  onUploadError?: (error: Error) => void;
}

export default function CustomUploadButton({ onUploadComplete, onUploadError }: UploadButtonProps) {
  const [isUploading, setIsUploading] = useState(false);

  return (
    <UploadButton<OurFileRouter, "imageUploader">
      endpoint="imageUploader"
      onUploadBegin={() => {
        setIsUploading(true);
      }}
      onClientUploadComplete={(res) => {
        setIsUploading(false);
        if (res && res.length > 0) {
          const urls = res.map(r => r.url).filter(Boolean);
          if (urls.length > 1) {
            onUploadComplete?.(urls);
          } else {
            onUploadComplete?.(urls[0]);
          }
        }
      }}
      onUploadError={(error: Error) => {
        setIsUploading(false);
        onUploadError?.(error);
      }}
      appearance={{
        button: {
          backgroundColor: "#2563eb",
          color: "white",
          padding: "0.5rem 1rem",
          borderRadius: "0.375rem",
          fontWeight: "500",
          transition: "background-color 0.2s",
          cursor: isUploading ? "not-allowed" : "pointer",
          opacity: isUploading ? 0.7 : 1,
        },
        allowedContent: {
          color: "#6b7280",
        },
      }}
      content={{
        button: isUploading ? "Uploading..." : "Upload Image(s)",
      }}
    />
  );
} 