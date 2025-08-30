"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";
import { Product } from "../types/types";

interface ProductContextType {
  products: Product[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  totalCount: number;
  recommendedCount: number;
  inStockCount: number;
  fetchProducts: (
    page?: number,
    limit?: number,
    search?: string
  ) => Promise<void>;
  loadMoreProducts: () => Promise<void>;
  searchProducts: (keyword: string) => Promise<void>;
  resetProducts: () => void;
  addProduct: (
    product: Omit<Product, "id" | "createdAt" | "updatedAt">
  ) => Promise<void>;
  updateProduct: (id: string, product: Partial<Product>) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [recommendedCount, setRecommendedCount] = useState(0);
  const [inStockCount, setInStockCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSearch, setCurrentSearch] = useState("");

  const fetchProducts = useCallback(
    async (page = 1, limit = 10, search = "") => {
      try {
        setLoading(true);
        setError(null);

        const params = new URLSearchParams({
          page: page.toString(),
          limit: limit.toString(),
          ...(search && { search }),
        });

        const response = await fetch(`/api/products?${params}`);

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        if (page === 1) {
          setProducts(data.products);
        } else {
          setProducts((prev) => [...prev, ...data.products]);
        }

        setTotalCount(data.total);
        setRecommendedCount(data.recommended);
        setInStockCount(data.inStock);
        setHasMore(data.hasMore);
        setCurrentPage(page);
        setCurrentSearch(search);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const loadMoreProducts = async () => {
    if (!hasMore || loading) return;

    const nextPage = currentPage + 1;
    await fetchProducts(nextPage, 10, currentSearch);
  };

  const searchProducts = useCallback(
    async (keyword: string) => {
      setCurrentPage(1);
      await fetchProducts(1, 10, keyword);
    },
    [fetchProducts]
  );

  const resetProducts = () => {
    setProducts([]);
    setCurrentPage(1);
    setCurrentSearch("");
    setHasMore(true);
    setTotalCount(0);
  };

  const addProduct = async (
    productData: Omit<Product, "id" | "createdAt" | "updatedAt">
  ) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        throw new Error("Failed to create product");
      }

      const newProduct = await response.json();
      setProducts((prev) => [newProduct, ...prev]);
      setTotalCount((prev) => prev + 1);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create product");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateProduct = async (id: string, productData: Partial<Product>) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        throw new Error("Failed to update product");
      }

      const updatedProduct = await response.json();
      setProducts((prev) =>
        prev.map((product) => (product.id === id ? updatedProduct : product))
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update product");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete product");
      }

      setProducts((prev) => prev.filter((product) => product.id !== id));
      setTotalCount((prev) => prev - 1);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete product");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
        hasMore,
        totalCount,
        recommendedCount,
        inStockCount,
        fetchProducts,
        loadMoreProducts,
        searchProducts,
        resetProducts,
        addProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
}
