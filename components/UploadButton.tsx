"use client";

import { UploadButton } from "@uploadthing/react";
import { OurFileRouter } from "@/utils/uploadthing";
import { useState } from "react";

interface UploadButtonProps {
  onUploadComplete?: (url: string) => void;
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
        if (res && res[0] && res[0].url) {
          onUploadComplete?.(res[0].url);
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
        button: isUploading ? "Uploading..." : "Upload Image",
      }}
    />
  );
} 