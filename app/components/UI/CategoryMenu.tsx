import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { categories } from "../../../data/categories";
import Link from "next/link";

export const CategoryMenu = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="py-4">
      <div className="flex flex-wrap gap-2 lg:gap-6">
        {categories.map((category) => (
          <div key={category.id} className="relative group">
            <Link
              href={`/produse?category=${category.id}`}
              className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium text-sm lg:text-base cursor-pointer"
              onMouseEnter={() => setActiveCategory(category.id)}
              onMouseLeave={() => setActiveCategory(null)}
              onClick={() => setIsOpen(false)}
            >
              <span className="flex items-center gap-3">
                <span>
                  <category.icon size={20} />{" "}
                </span>
                <span>{category.name}</span>
              </span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  activeCategory === category.id ? "rotate-180" : ""
                }`}
              />
            </Link>

            {/* Dropdown Menu */}
            {activeCategory === category.id && (
              <div
                className="absolute top-9 left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-50 min-w-[220px] max-w-[280px]"
                onMouseEnter={() => setActiveCategory(category.id)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <div className="py-2">
                  {category.subcategories.map((subcategory) => (
                    <Link
                      href={`/produse?category=${category.id}&subcategory=${subcategory.id}`}
                      key={subcategory.id}
                      className="w-full text-left px-4 py-3 text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors duration-200 flex items-center gap-2 text-sm cursor-pointer"
                      onClick={() => {
                        setActiveCategory(null);
                        setIsOpen(false);
                      }}
                    >
                      <span>
                        <subcategory.icon size={18} />
                      </span>
                      <span>{subcategory.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
