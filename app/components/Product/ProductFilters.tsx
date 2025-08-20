"use client";

import React, { useState, useEffect, useRef } from "react";
import { categories } from "../../../data/categories";
import {
  Search,
  X,
  ChevronDown,
  ChevronUp,
  Star,
  Package,
  Tag,
  SlidersHorizontal,
} from "lucide-react";

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
  sortBy: "newest" | "oldest" | "price-low" | "price-high" | "name";
}

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

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="relative" ref={selectRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-sm sm:text-base text-left flex items-center justify-between bg-white"
      >
        <span className={selectedOption ? "text-gray-700" : "text-gray-500"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          size={16}
          className={`transition-transform text-gray-700 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <>
          {/* Overlay pentru mobile */}
          <div
            className="fixed inset-0 z-10 lg:hidden "
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-100 text-gray-700 ${
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

interface ProductsFiltersProps {
  filters: FilterState;
  onFilterChange: (key: keyof FilterState, value: string | boolean) => void;
  onClearFilters: () => void;
  activeFiltersCount: number;
  showMobileFilters: boolean;
  onToggleMobileFilters: () => void;
}

const ProductsFilters: React.FC<ProductsFiltersProps> = ({
  filters,
  onFilterChange,
  onClearFilters,
  activeFiltersCount,
  showMobileFilters,
  onToggleMobileFilters,
}) => {
  const getSelectedCategory = () => {
    return categories.find((cat) => cat.id === filters.category);
  };

  const categoryOptions = [
    { value: "", label: "Toate categoriile" },
    ...categories.map((cat) => ({ value: cat.id, label: cat.name })),
  ];

  const subcategoryOptions = [
    { value: "", label: "Toate subcategoriile" },
    ...(getSelectedCategory()?.subcategories.map((sub) => ({
      value: sub.id,
      label: sub.name,
    })) || []),
  ];

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4 sm:mb-6">
        <button
          onClick={onToggleMobileFilters}
          className="w-full flex items-center justify-between p-3 sm:p-4 bg-white rounded-lg border border-gray-200"
        >
          <div className="flex items-center gap-2 ">
            <SlidersHorizontal size={20} className="text-gray-600" />
            <span className="font-medium text-gray-700">Filtre</span>
            {activeFiltersCount > 0 && (
              <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                {activeFiltersCount}
              </span>
            )}
          </div>
          {showMobileFilters ? (
            <ChevronUp size={20} className="text-gray-700" />
          ) : (
            <ChevronDown size={20} className="text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Backdrop */}
      {showMobileFilters && (
        <div
          className="fixed inset-0 bg-black/50 bg-opacity-50 z-40 lg:hidden"
          onClick={onToggleMobileFilters}
        />
      )}

      {/* Filters Sidebar */}
      <div
        className={`fixed inset-0 z-50 lg:static lg:z-auto transition-transform duration-300 lg:transition-none ${
          showMobileFilters
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        } w-4/5 max-w-sm lg:w-80`}
      >
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 sm:p-6 h-full lg:h-auto max-h-full overflow-y-auto">
          <div className="flex items-center justify-between mb-4 sm:mb-6 sticky top-0 bg-white pb-2 border-b border-gray-100 ">
            <h2 className="text-lg font-semibold text-gray-900">Filtrează</h2>
            <div className="flex items-center gap-2">
              {activeFiltersCount > 0 && (
                <button
                  onClick={onClearFilters}
                  className="text-sm text-red-600 hover:text-red-700 font-medium mr-2 cursor-pointer"
                >
                  Șterge toate
                </button>
              )}
              <button
                onClick={onToggleMobileFilters}
                className="lg:hidden p-1 text-gray-400 hover:text-gray-600 bg-gray-100 rounded-full"
                aria-label="Închide filtrele"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {/* Search */}
            <div className="mb-4 sm:mb-6">
              <label
                className="block text-sm font-medium text-gray-700  mb-2"
                htmlFor="product-search"
              >
                Caută produse
              </label>
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <input
                  type="text"
                  name="product-search"
                  id="product-search"
                  placeholder="Caută produse agricole..."
                  value={filters.search}
                  onChange={(e) => onFilterChange("search", e.target.value)}
                  className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-sm sm:text-base placeholder-gray-500 text-gray-700"
                />
                {filters.search && (
                  <button
                    onClick={() => onFilterChange("search", "")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

            {/* Category */}
            <div className="mb-4 sm:mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categorie
              </label>
              <CustomSelect
                value={filters.category}
                onChange={(value) => {
                  onFilterChange("category", value);
                  onFilterChange("subcategory", ""); // Reset subcategory
                }}
                options={categoryOptions}
                placeholder="Toate categoriile"
              />
            </div>

            {/* Subcategory */}
            {filters.category && (
              <div className="mb-4 sm:mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subcategorie
                </label>
                <CustomSelect
                  value={filters.subcategory}
                  onChange={(value) => onFilterChange("subcategory", value)}
                  options={subcategoryOptions}
                  placeholder="Toate subcategoriile"
                />
              </div>
            )}

            {/* Price Range */}
            <div className="mb-4 sm:mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interval preț (Lei)
              </label>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <input
                    type="number"
                    name="minPrice"
                    id="minPrice"
                    placeholder="Preț minim"
                    value={filters.minPrice}
                    onChange={(e) => onFilterChange("minPrice", e.target.value)}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-sm sm:text-base placeholder-gray-500 text-gray-700"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="maxPrice"
                    id="maxPrice"
                    placeholder="Preț maxim"
                    value={filters.maxPrice}
                    onChange={(e) => onFilterChange("maxPrice", e.target.value)}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-sm sm:text-base placeholder-gray-500 text-gray-700"
                  />
                </div>
              </div>
            </div>

            {/* Special Filters */}
            <div className="mb-4 sm:mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Filtre speciale
              </label>
              <div className="space-y-3">
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="featured"
                    id="featured"
                    checked={filters.featured}
                    onChange={(e) =>
                      onFilterChange("featured", e.target.checked)
                    }
                    className="w-4 h-4 rounded border-gray-300 text-green-600 focus:border-green-500 focus:ring-green-500"
                  />
                  <Star size={16} className="text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">
                    Produse recomandate
                  </span>
                </label>

                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="onSale"
                    id="onSale"
                    checked={filters.onSale}
                    onChange={(e) => onFilterChange("onSale", e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-red-600 focus:border-red-500 focus:ring-red-500"
                  />
                  <Tag size={16} className="text-red-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">La reducere</span>
                </label>
              </div>
            </div>

            {/* Stock Status */}
            <div className="mb-4 sm:mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Disponibilitate
              </label>
              <div className="space-y-3">
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="inStock"
                    id="inStock"
                    checked={filters.inStock}
                    onChange={(e) =>
                      onFilterChange("inStock", e.target.checked)
                    }
                    className="w-4 h-4 rounded border-gray-300 text-green-600 focus:border-green-500 focus:ring-green-500"
                  />
                  <Package size={16} className="text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">În stoc</span>
                </label>

                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="outOfStock"
                    id="outOfStock"
                    checked={filters.outOfStock}
                    onChange={(e) =>
                      onFilterChange("outOfStock", e.target.checked)
                    }
                    className="w-4 h-4 rounded border-gray-300 text-gray-600 focus:border-gray-500 focus:ring-gray-500"
                  />
                  <X size={16} className="text-gray-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Stoc epuizat</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsFilters;
