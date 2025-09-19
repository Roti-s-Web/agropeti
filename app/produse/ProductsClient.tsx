"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ProductCard } from "../components/Product/ProductCard";
import { categories } from "../../data/categories";
import { Product } from "../../types/types";
import ProductsFilters from "../components/Product/ProductFilters";
import { ArrowUpDown, ChevronDown, Loader2, PackageOpen } from "lucide-react";

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  value,
  onChange,
  options,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={selectRef}>
      <button
        type="button"
        title="Selectează categorie"
        name="category"
        onClick={() => setIsOpen(!isOpen)}
        className="border border-gray-300 rounded-lg px-3 py-2 text-xs sm:text-sm focus:border-green-500 focus:outline-none text-left flex items-center justify-between bg-white min-w-[140px] cursor-pointer"
      >
        <span className={selectedOption ? "text-gray-900" : "text-gray-500"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          size={14}
          className={`ml-1 transition-transform  text-gray-700 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute z-20 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto min-w-[140px]">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                name="category"
                title="Selectează categorie"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`w-full px-3 py-2 text-left text-xs sm:text-sm hover:bg-gray-100 text-gray-700  cursor-pointer ${
                  value === option.value ? "bg-green-50 text-green-700" : ""
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

interface FilterState {
  search: string;
  category: string;
  subcategory: string;
  minPrice: string;
  maxPrice: string;
  onSale: boolean;
  inStock: boolean;
  outOfStock: boolean;
  featured: boolean;
  sortBy: "newest" | "oldest" | "price-low" | "price-high" | "name" | "";
}

const ProductsPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreProducts, setHasMoreProducts] = useState(true);

  const loadMoreRef = useRef<HTMLDivElement>(null);
  const isLoadingRef = useRef(false);

  const PRODUCTS_PER_PAGE = 12;

  const [filters, setFilters] = useState<FilterState>({
    search: searchParams.get("search") || "",
    category: searchParams.get("category") || "",
    subcategory: searchParams.get("subcategory") || "",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    onSale: searchParams.get("onSale") === "true",
    inStock: searchParams.get("inStock") === "true",
    outOfStock: searchParams.get("outOfStock") === "true",
    featured: searchParams.get("featured") === "true",
    sortBy: (searchParams.get("sortBy") as FilterState["sortBy"]) || "newest",
  });

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/products?limit=1000");
      if (!response.ok) throw new Error("Failed to fetch products");
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      search: searchParams.get("search") || "",
      category: searchParams.get("category") || "",
      subcategory: searchParams.get("subcategory") || "",
      minPrice: searchParams.get("minPrice") || "",
      maxPrice: searchParams.get("maxPrice") || "",
      onSale: searchParams.get("onSale") === "true",
      inStock: searchParams.get("inStock") === "true",
      outOfStock: searchParams.get("outOfStock") === "true",
      featured: searchParams.get("featured") === "true",
      sortBy: (searchParams.get("sortBy") as FilterState["sortBy"]) || "newest",
    }));
  }, [searchParams]);

  useEffect(() => {
    let filtered = [...products];

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower) ||
          product.category.toLowerCase().includes(searchLower) ||
          product.subcategory.toLowerCase().includes(searchLower)
      );
    }

    if (filters.category) {
      filtered = filtered.filter(
        (product) => product.category === filters.category
      );
    }

    if (filters.subcategory) {
      filtered = filtered.filter(
        (product) => product.subcategory === filters.subcategory
      );
    }

    if (filters.minPrice) {
      const minPrice = parseFloat(filters.minPrice);
      filtered = filtered.filter((product) => {
        const price = product.discount
          ? product.price * (1 - product.discount / 100)
          : product.price;
        return price >= minPrice;
      });
    }

    if (filters.maxPrice) {
      const maxPrice = parseFloat(filters.maxPrice);
      filtered = filtered.filter((product) => {
        const price = product.discount
          ? product.price * (1 - product.discount / 100)
          : product.price;
        return price <= maxPrice;
      });
    }

    if (filters.onSale) {
      filtered = filtered.filter(
        (product) => product.discount && product.discount > 0
      );
    }

    if (filters.featured) {
      filtered = filtered.filter((product) => product.featured);
    }

    const stockFilters: boolean[] = [];
    if (filters.inStock) stockFilters.push(true);
    if (filters.outOfStock) stockFilters.push(false);

    if (stockFilters.length === 1) {
      filtered = filtered.filter((product) =>
        stockFilters.includes(product.inStock)
      );
    }

    filtered.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;

      switch (filters.sortBy) {
        case "price-low":
          const priceA = a.discount
            ? a.price * (1 - a.discount / 100)
            : a.price;
          const priceB = b.discount
            ? b.price * (1 - b.discount / 100)
            : b.price;
          return priceA - priceB;
        case "price-high":
          const priceA2 = a.discount
            ? a.price * (1 - a.discount / 100)
            : a.price;
          const priceB2 = b.discount
            ? b.price * (1 - b.discount / 100)
            : b.price;
          return priceB2 - priceA2;
        case "name":
          return a.name.localeCompare(b.name);
        case "oldest":
          return (
            new Date(a.createdAt as Date).getTime() -
            new Date(a.createdAt as Date).getTime()
          );
        case "newest":
        default:
          return (
            new Date(b.createdAt as Date).getTime() -
            new Date(a.createdAt as Date).getTime()
          );
      }
    });

    filtered.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      if (a.inStock && !b.inStock) return -1;
      if (!a.inStock && b.inStock) return 1;
      return 0;
    });

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [products, filters]);

  useEffect(() => {
    const startIndex = 0;
    const endIndex = currentPage * PRODUCTS_PER_PAGE;
    const displayed = filteredProducts.slice(startIndex, endIndex);
    setDisplayedProducts(displayed);
    setHasMoreProducts(endIndex < filteredProducts.length);
  }, [filteredProducts, currentPage]);

  const loadMoreProducts = useCallback(() => {
    if (!isLoadingRef.current && hasMoreProducts && !loading) {
      isLoadingRef.current = true;
      setLoadingMore(true);

      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        setLoadingMore(false);
        isLoadingRef.current = false;
      }, 300);
    }
  }, [hasMoreProducts, loading]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
          loadMoreProducts();
        }
      },
      {
        rootMargin: "200px",
        threshold: 0.1,
      }
    );

    const currentRef = loadMoreRef.current;
    if (currentRef && hasMoreProducts) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [loadMoreProducts, hasMoreProducts]);

  useEffect(() => {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (
        value &&
        value !== "" &&
        value !== false &&
        !(key === "inStock" && value === true)
      ) {
        params.set(key, value.toString());
      }
    });

    const newUrl = params.toString()
      ? `/produse?${params.toString()}`
      : "/produse";
    router.replace(newUrl, { scroll: false });
  }, [filters, router]);

  const updateFilter = (key: keyof FilterState, value: string | boolean) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      category: "",
      subcategory: "",
      minPrice: "",
      maxPrice: "",
      onSale: false,
      inStock: true,
      outOfStock: false,
      featured: false,
      sortBy: "newest",
    });
  };

  const getSelectedCategory = () => {
    return categories.find((cat) => cat.id === filters.category);
  };

  const getSelectedSubcategory = () => {
    const category = getSelectedCategory();
    return category?.subcategories.find(
      (sub) => sub.id === filters.subcategory
    );
  };

  const activeFiltersCount = Object.entries(filters).filter(([key, value]) => {
    if (key === "inStock" && value === true) return false;
    if (key === "sortBy") return false;
    return value && value !== "";
  }).length;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center py-20">
            <Loader2 className="animate-spin text-green-600" size={32} />
            <span className="ml-2 text-gray-600">Se încarcă produsele...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-4 sm:py-8">
        <div className="flex flex-col-reverse lg:flex-row gap-3 lg:gap-8">
          <div className="order-2 lg:order-1">
            <ProductsFilters
              filters={filters}
              onFilterChange={updateFilter}
              onClearFilters={clearFilters}
              activeFiltersCount={activeFiltersCount}
              showMobileFilters={showMobileFilters}
              onToggleMobileFilters={() =>
                setShowMobileFilters(!showMobileFilters)
              }
            />
          </div>

          <div className="flex-1 order-1 lg:order-2">
            <div className="flex flex-row items-center justify-between mb-4 sm:mb-6 gap-3">
              <div>
                <p className="text-gray-600 text-sm sm:text-base">
                  <span className="font-medium text-gray-900">
                    {filteredProducts.length}
                  </span>{" "}
                  {filteredProducts.length === 1
                    ? "produs găsit"
                    : "produse găsite"}
                  {(filters.category ||
                    filters.subcategory ||
                    filters.search) && (
                    <>
                      {" "}
                      pentru{" "}
                      {filters.search && (
                        <span className="font-medium">
                          &quot;{filters.search}&quot;
                        </span>
                      )}
                      {filters.category && (
                        <span className="font-medium">
                          {getSelectedCategory()?.name}
                          {filters.subcategory &&
                            ` > ${getSelectedSubcategory()?.name}`}
                        </span>
                      )}
                    </>
                  )}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <ArrowUpDown size={16} className="text-gray-400" />
                <CustomSelect
                  value={filters.sortBy}
                  onChange={(value) => updateFilter("sortBy", value)}
                  options={[
                    { value: "newest", label: "Cele mai noi" },
                    { value: "oldest", label: "Cele mai vechi" },
                    { value: "name", label: "Nume (A-Z)" },
                    { value: "price-low", label: "Preț crescător" },
                    { value: "price-high", label: "Preț descrescător" },
                  ]}
                  placeholder="Sortare"
                />
              </div>
            </div>

            {displayedProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                  {displayedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Infinite Scroll Trigger & Loading Indicator */}
                {hasMoreProducts && (
                  <div
                    ref={loadMoreRef}
                    className="flex justify-center items-center mt-8 py-8"
                  >
                    {loadingMore && (
                      <div className="flex items-center gap-2 text-green-600">
                        <Loader2 className="animate-spin" size={20} />
                        <span className="text-sm">
                          Se încarcă mai multe produse...
                        </span>
                      </div>
                    )}
                  </div>
                )}

                <div className="text-center text-gray-500 text-sm mt-4">
                  Se afișează {displayedProducts.length} din{" "}
                  {filteredProducts.length} produse
                  {!hasMoreProducts &&
                    filteredProducts.length > PRODUCTS_PER_PAGE && (
                      <div className="mt-2 text-xs text-green-600">
                        ✓ Toate produsele au fost încărcate
                      </div>
                    )}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <PackageOpen className="mx-auto text-gray-400 mb-4" size={64} />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Nu am găsit produse
                </h3>
                <p className="text-gray-600 mb-4">
                  Nu există produse care să corespundă filtrelor selectate.
                </p>
                <button
                  onClick={clearFilters}
                  title="Șterge filtrele"
                  name="clear-filters"
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors cursor-pointer"
                >
                  Șterge filtrele
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
