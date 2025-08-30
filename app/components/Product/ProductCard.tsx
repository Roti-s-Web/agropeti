"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Phone, Star, Tag } from "lucide-react";
import { Product } from "../../../types/types";
import { useFavorites } from "../../../context/FavoritesProvider";
import { ContactModal } from "../UI/ContactModal";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const isProductFavorite = isFavorite(product.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (isProductFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product.id);
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsContactModalOpen(true);
  };

  const discountedPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  return (
    <>
      <Link
        href={`/produs/${product.slug}`}
        className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group block"
      >
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.featured && (
              <span className="flex items-center justify-center gap-1 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md transform transition-transform duration-300 hover:scale-105">
                <Star size={14} className="flex-none" />
                <span className="flex-1 text-center">Recomandat</span>
              </span>
            )}
            {product.discount && (
              <span className="flex items-center justify-center gap-1 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md transform transition-transform duration-300 hover:scale-105">
                <Tag size={14} className="flex-none" />
                <span className="flex-1 text-center">
                  -{product.discount}% Reducere
                </span>
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity ">
            <button
              onClick={handleFavoriteClick}
              title={
                isProductFavorite ? "Șterge din favorite" : "Adaugă în favorite"
              }
              name="favorite"
              className={`p-2 rounded-full transition-colors cursor-pointer ${
                isProductFavorite
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-600 hover:text-red-500"
              }`}
            >
              <Heart
                size={16}
                fill={isProductFavorite ? "currentColor" : "none"}
              />
            </button>
          </div>

          {/* Stock Status */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="bg-white text-red-600 px-3 py-1 rounded-md font-semibold">
                Stoc epuizat
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3rem] group-hover:text-green-600 transition-colors">
            {product.name}
          </h3>

          <p className="text-gray-600 text-sm mb-3 line-clamp-2 min-h-[2.7rem]">
            {product.description}
          </p>

          {/* Price */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              {product.discount ? (
                <>
                  <span className="text-lg font-bold text-green-600">
                    {discountedPrice.toFixed(2)} lei
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    {product.price.toFixed(2)} lei
                  </span>
                </>
              ) : (
                <span className="text-lg font-bold text-green-600">
                  {product.price.toFixed(2)} lei
                </span>
              )}
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={handleContactClick}
            disabled={!product.inStock}
            title={product.inStock ? "Sună pentru comandă" : "Indisponibil"}
            name="contact"
            className={`w-full py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer ${
              product.inStock
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
          >
            <Phone size={16} />
            {product.inStock ? "Sună pentru comandă" : "Indisponibil"}
          </button>
        </div>
      </Link>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        productName={product.name}
      />
    </>
  );
};
