"use client";

import React, { useState } from "react";
import { Phone, Share2, Heart } from "lucide-react";
import { useFavorites } from "../../../context/FavoritesContext";
import { ContactModal } from "../UI/ContactModal";

interface ProductActionsProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    discount?: number | null;
  };
}

export const ProductActions: React.FC<ProductActionsProps> = ({ product }) => {
  const [isSharing, setIsSharing] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const isProductFavorite = isFavorite(product.id);

  const handleContact = () => {
    setIsContactModalOpen(true);
  };

  const handleShare = async () => {
    setIsSharing(true);

    try {
      if (navigator.share) {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        });
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        // You could show a toast notification here
        alert("Link-ul a fost copiat în clipboard!");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    } finally {
      setIsSharing(false);
    }
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault(); // prevent navigating when clicking favorite
    if (isProductFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product.id);
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        {/* Contact */}
        <button
          onClick={handleContact}
          className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <Phone size={20} />
          <span>Contactează pentru comandă</span>
        </button>

        {/* Favorite */}
        <button
          onClick={handleFavoriteClick}
          className={`flex-1 sm:flex-none px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer ${
            isProductFavorite
              ? "bg-red-100 hover:bg-red-200 text-red-600"
              : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          }`}
          title={
            isProductFavorite ? "Elimină din favorite" : "Adaugă la favorite"
          }
        >
          <Heart
            size={20}
            className={isProductFavorite ? "fill-current" : ""}
          />
          <span className="sm:hidden">
            {isProductFavorite ? "Favorite" : "Adaugă la favorite"}
          </span>
        </button>

        {/* Share */}
        <button
          onClick={handleShare}
          disabled={isSharing}
          className="flex-1 sm:flex-none bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
          title="Distribuie produsul"
        >
          <Share2 size={20} className={isSharing ? "animate-spin" : ""} />
          <span className="sm:hidden">Distribuie</span>
        </button>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        productName={product.name}
      />
    </>
  );
};
