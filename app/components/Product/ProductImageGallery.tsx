"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  images,
  productName,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className="space-y-4">
      <div className="aspect-square bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 relative">
        <Image
          src={images[selectedImageIndex]}
          alt={productName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority
        />
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors relative ${
                index === selectedImageIndex
                  ? "border-green-600"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <Image
                src={image}
                alt={`${productName} ${index + 1}`}
                fill
                sizes="(max-width: 768px) 25vw, (max-width: 1200px) 12vw, 8vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
