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
  sortBy: "newest" | "oldest" | "price-low" | "price-high" | "name" | "";
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
        title="Selectează categorie"
        name="category"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-sm sm:text-base text-left flex items-center justify-between bg-white cursor-pointer"
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
          <div
            className="fixed inset-0 z-10 lg:hidden "
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto z-200">
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
                className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-100 text-gray-700 cursor-pointer ${
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

interface PriceRangeSliderProps {
  minPrice: string;
  maxPrice: string;
  onMinPriceChange: (value: string) => void;
  onMaxPriceChange: (value: string) => void;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
}) => {
  const MIN_LIMIT = 0;
  const MAX_LIMIT = 5000;

  const minVal = Math.max(
    MIN_LIMIT,
    Math.min(Number(minPrice) || MIN_LIMIT, MAX_LIMIT)
  );
  const maxVal = Math.max(
    minVal + 10,
    Math.min(Number(maxPrice) || MAX_LIMIT, MAX_LIMIT)
  );

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxVal - 10);
    onMinPriceChange(value.toString());
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minVal + 10);
    onMaxPriceChange(value.toString());
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2">
        <div>
          <input
            type="number"
            name="minPrice"
            id="minPrice"
            min={MIN_LIMIT}
            max={MAX_LIMIT}
            placeholder="Preț minim"
            value={minPrice}
            onChange={(e) => onMinPriceChange(e.target.value)}
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-sm sm:text-base placeholder-gray-500 text-gray-700"
          />
        </div>
        <div>
          <input
            type="number"
            name="maxPrice"
            id="maxPrice"
            min={MIN_LIMIT}
            max={MAX_LIMIT}
            placeholder="Preț maxim"
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(e.target.value)}
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-sm sm:text-base placeholder-gray-500 text-gray-700"
          />
        </div>
      </div>

      <div className="px-2">
        <div className="relative h-10 mb-4">
          <div className="absolute top-1/2 w-full h-2 bg-gray-200 rounded-lg transform -translate-y-1/2"></div>

          <div
            className="absolute top-1/2 h-2 bg-green-500 rounded-lg transform -translate-y-1/2 pointer-events-none"
            style={{
              left: `${
                ((minVal - MIN_LIMIT) / (MAX_LIMIT - MIN_LIMIT)) * 100
              }%`,
              width: `${((maxVal - minVal) / (MAX_LIMIT - MIN_LIMIT)) * 100}%`,
            }}
          ></div>

          <input
            type="range"
            min={MIN_LIMIT}
            max={MAX_LIMIT}
            step="10"
            value={minVal}
            onChange={handleMinChange}
            className="absolute top-1/2 w-full h-6 bg-transparent appearance-none cursor-pointer transform -translate-y-1/2 z-10 dual-range-slider min-slider"
          />

          <input
            type="range"
            min={MIN_LIMIT}
            max={MAX_LIMIT}
            step="10"
            value={maxVal}
            onChange={handleMaxChange}
            className="absolute top-1/2 w-full h-6 bg-transparent appearance-none cursor-pointer transform -translate-y-1/2 z-20 dual-range-slider max-slider"
          />
        </div>

        <div className="flex justify-between text-xs text-gray-600">
          <span>{MIN_LIMIT} lei</span>
          <span className="font-medium text-gray-700">
            {minVal} - {maxVal} lei
          </span>
          <span>{MAX_LIMIT} lei</span>
        </div>
      </div>

      <style jsx>{`
        .dual-range-slider {
          pointer-events: none;
        }

        .dual-range-slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #10b981;
          border: 2px solid white;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          pointer-events: all;
          position: relative;
          z-index: 100;
        }

        .dual-range-slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #10b981;
          border: 2px solid white;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          pointer-events: all;
          position: relative;
          z-index: 100;
          border: none;
        }

        .dual-range-slider::-webkit-slider-track {
          background: transparent;
        }

        .dual-range-slider::-moz-range-track {
          background: transparent;
        }

        .dual-range-slider::-webkit-slider-thumb:active {
          cursor: grabbing;
        }

        /* Ensure max slider thumb is always on top when values are close */
        .max-slider {
          pointer-events: none;
        }

        .max-slider::-webkit-slider-thumb {
          pointer-events: all;
          z-index: 200 !important;
        }

        .max-slider::-moz-range-thumb {
          z-index: 200 !important;
        }

        .min-slider {
          pointer-events: none;
        }

        .min-slider::-webkit-slider-thumb {
          pointer-events: all;
          z-index: 100 !important;
        }

        .min-slider::-moz-range-thumb {
          z-index: 100 !important;
        }

        /* Adjust thumb position to align better with track */
        .dual-range-slider::-webkit-slider-thumb {
          margin-top: -9px;
          transform: translateY(3px);
        }

        .dual-range-slider::-moz-range-thumb {
          margin-top: 1px;
        }
      `}</style>
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
      <div className="lg:hidden mb-4 sm:mb-6">
        <button
          onClick={onToggleMobileFilters}
          type="button"
          title="Filtrează produse"
          name="filter"
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

      {showMobileFilters && (
        <div
          className="fixed inset-0 bg-black/50 bg-opacity-50 z-40 lg:hidden"
          onClick={onToggleMobileFilters}
        />
      )}

      <div
        className={`fixed inset-0 z-50 lg:static lg:z-auto transition-transform duration-300 lg:transition-none ${
          showMobileFilters
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        } w-4/5 max-w-sm lg:w-80`}
      >
        <div
          className="bg-white shadow-lg border border-gray-100 p-4 sm:p-6 h-full lg:h-auto max-h-full overflow-y-auto
  rounded-tr-xl rounded-br-xl lg:rounded-xl"
        >
          <div className="flex items-center justify-between mb-4 sm:mb-6 sticky top-0 bg-white pb-2 border-b border-gray-100 ">
            <h2 className="text-lg font-semibold text-gray-900">Filtrează</h2>
            <div className="flex items-center gap-2">
              {activeFiltersCount > 0 && (
                <button
                  onClick={onClearFilters}
                  title="Șterge filtrele"
                  name="clear-filters"
                  className="text-sm text-red-600 hover:text-red-700 font-medium mr-2 cursor-pointer"
                >
                  Șterge toate
                </button>
              )}
              <button
                onClick={onToggleMobileFilters}
                title="Închide filtrele"
                name="close-filters"
                className="lg:hidden p-1 text-gray-400 hover:text-gray-600 bg-gray-100 rounded-full"
                aria-label="Închide filtrele"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
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
                    title="Șterge cautarea"
                    name="clear-search"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

            <div className="mb-4 sm:mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categorie
              </label>
              <CustomSelect
                value={filters.category}
                onChange={(value) => {
                  onFilterChange("category", value);
                  onFilterChange("subcategory", "");
                }}
                options={categoryOptions}
                placeholder="Toate categoriile"
              />
            </div>

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

            <div className="mb-4 sm:mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interval preț (Lei)
              </label>
              <PriceRangeSlider
                minPrice={filters.minPrice}
                maxPrice={filters.maxPrice}
                onMinPriceChange={(value) => onFilterChange("minPrice", value)}
                onMaxPriceChange={(value) => onFilterChange("maxPrice", value)}
              />
            </div>

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
                    className="w-4 h-4 rounded border-gray-300 text-green-600 focus:border-green-500 focus:ring-green-500 cursor-pointer"
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
                    className="w-4 h-4 rounded border-gray-300 text-red-600 focus:border-red-500 focus:ring-red-500 cursor-pointer"
                  />
                  <Tag size={16} className="text-red-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">La reducere</span>
                </label>
              </div>
            </div>

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
                    className="w-4 h-4 rounded border-gray-300 text-green-600 focus:border-green-500 focus:ring-green-500 cursor-pointer"
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
                    className="w-4 h-4 rounded border-gray-300 text-gray-600 focus:border-gray-500 focus:ring-gray-500 cursor-pointer"
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
