"use client";

import React, { useState } from "react";
import { Phone, Share2, Heart } from "lucide-react";
import { useFavorites } from "../../../context/FavoritesProvider";
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
        await navigator.clipboard.writeText(window.location.href);

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
    e.preventDefault();
    if (isProductFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product.id);
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <button
          onClick={handleContact}
          title="Contactează pentru comandă"
          name="contact"
          className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <Phone size={20} />
          <span>Contactează pentru comandă</span>
        </button>

        <button
          onClick={handleFavoriteClick}
          name="favorite"
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

        <button
          onClick={handleShare}
          disabled={isSharing}
          name="share"
          className="flex-1 sm:flex-none bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
          title="Distribuie produsul"
        >
          <Share2 size={20} className={isSharing ? "animate-spin" : ""} />
          <span className="sm:hidden">Distribuie</span>
        </button>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        productName={product.name}
      />
    </>
  );
};
