import { useEffect, useRef, useState } from "react";
import { X, Heart } from "lucide-react";
import { useFavorites } from "../../../context/FavoritesContext";
import { ProductCard } from "../Product/ProductCard";
import { Product } from "@/types/types";

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FavoritesModal: React.FC<FavoritesModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { favorites } = useFavorites();
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (favorites.length === 0) {
      setFavoriteProducts([]);
      localStorage.removeItem("favoriteProducts");
      return;
    }

    // actualizăm cachedProducts
    const cachedProducts = localStorage.getItem("favoriteProducts");
    let parsed: Product[] = cachedProducts ? JSON.parse(cachedProducts) : [];

    // filtrăm produsele care mai sunt favorite
    parsed = parsed.filter((p) => favorites.includes(p.id));

    if (parsed.length === favorites.length) {
      // cache-ul e complet și actual
      setFavoriteProducts(parsed);
      localStorage.setItem("favoriteProducts", JSON.stringify(parsed));
      return;
    }

    // fetch pentru produsele noi
    const idsToFetch = favorites.filter(
      (id) => !parsed.some((p) => p.id === id)
    );

    if (idsToFetch.length > 0) {
      fetch("/api/products/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: idsToFetch }),
      })
        .then((res) => res.json())
        .then((data: Product[]) => {
          const updated = [...parsed, ...data];
          setFavoriteProducts(updated);
          localStorage.setItem("favoriteProducts", JSON.stringify(updated));
        })
        .catch((err) => console.error(err));
    } else {
      setFavoriteProducts(parsed);
      localStorage.setItem("favoriteProducts", JSON.stringify(parsed));
    }
  }, [favorites]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20 px-2 sm:px-4">
      <div
        className="bg-white rounded-xl w-full max-w-3xl sm:max-w-5xl lg:max-w-6xl max-h-[80vh] overflow-hidden shadow-lg"
        ref={modalRef}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b">
          <div className="flex items-center gap-3">
            <Heart className="text-red-500" size={24} />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Produsele mele favorite ({favorites.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-800"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto max-h-[60vh]">
          {favoriteProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {favoriteProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Heart size={48} className="text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg mb-2">
                Nu ai produse favorite
              </p>
              <p className="text-gray-400">
                Adaugă produse la favorite pentru a le găsi mai ușor
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
