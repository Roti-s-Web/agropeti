"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface FavoritesContextType {
  favorites: string[];
  addToFavorites: (productId: string) => void;
  removeFromFavorites: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
  clearFavorites: () => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("agropeti_favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("agropeti_favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (productId: string | number) => {
    setFavorites((prev) => [...prev, String(productId)]);
  };

  const removeFromFavorites = (productId: string | number) => {
    setFavorites((prev) => prev.filter((id) => id !== String(productId)));
  };

  const isFavorite = (productId: string | number) => {
    return favorites.includes(String(productId));
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        clearFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
