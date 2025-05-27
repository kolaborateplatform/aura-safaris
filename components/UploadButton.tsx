"use client";

import { UploadButton } from "@uploadthing/react";
import { OurFileRouter } from "@/utils/uploadthing";

interface UploadButtonProps {
  onUploadComplete?: (url: string) => void;
  onUploadError?: (error: Error) => void;
}

export default function CustomUploadButton({ onUploadComplete, onUploadError }: UploadButtonProps) {
  return (
    <UploadButton<OurFileRouter, "imageUploader">
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        if (res && res[0] && res[0].url) {
          onUploadComplete?.(res[0].url);
        }
      }}
      onUploadError={(error: Error) => {
        onUploadError?.(error);
      }}
    />
  );
} 