"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Search, Heart, Leaf } from "lucide-react";
import { CategoryMenu } from "../UI/CategoryMenu";
import { FavoritesModal } from "../Favorites/FavoritesModal";
import Link from "next/link";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const headerRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLInputElement>(null);

  const pathname = usePathname();
  const [activePage, setActivePage] = useState("acasa");

  useEffect(() => {
    const page = pathname?.split("/")[1] || "acasa";
    setActivePage(page);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
        setIsMobileSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isMobileSearchOpen && mobileSearchRef.current) {
      mobileSearchRef.current.focus();
    }
  }, [isMobileSearchOpen]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.location.href = `/produse?search=${encodeURIComponent(
        searchQuery
      )}`;
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const toggleMobileSearch = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen);
    if (!isMobileSearchOpen) {
      setIsMenuOpen(false);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <header
      className="bg-white shadow-lg border-t-4 border-green-600"
      ref={headerRef}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="bg-green-600 p-2 rounded-lg">
              <Leaf className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-green-800">AgroPeti</h1>
              <p className="text-xs text-gray-600">Soluții agricole premium</p>
            </div>
          </Link>

          {/* Desktop Search */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="w-full relative">
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  name="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Caută produse agricole..."
                  className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all duration-200 bg-gray-50 focus:bg-white text-gray-700 placeholder-gray-500 focus:shadow-md"
                />
                <button
                  onClick={handleSearch}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-green-600 transition-colors"
                  title="Caută"
                >
                  <Search size={20} />
                </button>
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    title="Șterge"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`hover:text-green-600 font-medium transition-colors ${
                activePage === "acasa" ? "text-green-600" : "text-gray-700"
              }`}
            >
              Acasă
            </Link>
            <Link
              href="/produse"
              className={`hover:text-green-600 font-medium transition-colors ${
                activePage === "produse" ? "text-green-600" : "text-gray-700"
              }`}
            >
              Produse
            </Link>
            <Link
              href="/despre"
              className={`hover:text-green-600 font-medium transition-colors ${
                activePage === "despre" ? "text-green-600" : "text-gray-700"
              }`}
            >
              Despre noi
            </Link>
            <Link
              href="/contact"
              className={`hover:text-green-600 font-medium transition-colors ${
                activePage === "contact" ? "text-green-600" : "text-gray-700"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              className="hidden lg:block p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
              title="Favorite"
              onClick={() => setIsFavoritesOpen(true)}
            >
              <Heart
                size={20}
                className="text-gray-600 hover:text-red-500 transition-colors"
              />
            </button>

            {/* Mobile Search Button */}
            <button
              onClick={toggleMobileSearch}
              className={`lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 ${
                isMobileSearchOpen
                  ? "bg-green-100 text-green-600 shadow-sm"
                  : "text-gray-600"
              }`}
              title="Căutare"
            >
              {isMobileSearchOpen ? <X size={20} /> : <Search size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                setIsMobileSearchOpen(false);
              }}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? (
                <X size={20} className="text-gray-600" />
              ) : (
                <Menu size={20} className="text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Input */}
        {isMobileSearchOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200 pt-4 animate-in slide-in-from-top duration-200">
            <div className="relative">
              <input
                ref={mobileSearchRef}
                id="mobile-search"
                name="mobile-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Caută produse agricole..."
                className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all duration-200 bg-gray-50 focus:bg-white text-gray-700 placeholder-gray-500 focus:shadow-md"
              />
              <button
                onClick={handleSearch}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-green-600 transition-colors"
                title="Caută"
              >
                <Search size={20} />
              </button>
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  title="Șterge"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Category Menu - Desktop */}
        <div className="hidden lg:block border-t border-gray-200">
          <CategoryMenu />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className={`hover:text-green-600 font-medium transition-colors ${
                  activePage === "acasa" ? "text-green-600" : "text-gray-700"
                }`}
              >
                Acasă
              </Link>
              <Link
                href="/produse"
                onClick={() => setIsMenuOpen(false)}
                className={`hover:text-green-600 font-medium transition-colors ${
                  activePage === "produse" ? "text-green-600" : "text-gray-700"
                }`}
              >
                Produse
              </Link>
              <Link
                href="/despre"
                onClick={() => setIsMenuOpen(false)}
                className={`hover:text-green-600 font-medium transition-colors ${
                  activePage === "despre" ? "text-green-600" : "text-gray-700"
                }`}
              >
                Despre noi
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`hover:text-green-600 font-medium transition-colors ${
                  activePage === "contact" ? "text-green-600" : "text-gray-700"
                }`}
              >
                Contact
              </Link>
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <CategoryMenu />
            </div>
            {/* Mobile Favorites in menu */}
            <div
              className="mt-4 pt-4 border-t border-gray-200"
              onClick={() => setIsFavoritesOpen(true)}
            >
              <button className="flex items-center gap-3 text-gray-700 hover:text-green-600 font-medium w-full transition-colors">
                <Heart size={20} />
                Favorite
              </button>
            </div>
          </div>
        )}
      </div>

      {isFavoritesOpen && (
        <FavoritesModal onClose={() => setIsFavoritesOpen(false)} isOpen />
      )}
    </header>
  );
};
