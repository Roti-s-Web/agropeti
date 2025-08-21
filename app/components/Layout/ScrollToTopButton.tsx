"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      // Calculate scroll progress
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setScrollProgress(scrollPercent);

      // Show button when page is scrolled more than 300px
      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Calculate stroke dash offset for circular progress
  const circumference = 2 * Math.PI * 22; // radius = 22
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          type="button"
          name="scroll-to-top"
          className="fixed bottom-5 right-5 z-50 group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
          aria-label="Scroll to top"
        >
          {/* SVG Circle Progress */}
          <div className="relative">
            <svg className="w-14 h-14 transform -rotate-90" viewBox="0 0 48 48">
              {/* Background circle */}
              <circle
                cx="24"
                cy="24"
                r="22"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="2"
                className="opacity-20"
              />

              {/* Progress circle */}
              <circle
                cx="24"
                cy="24"
                r="22"
                fill="none"
                stroke={
                  scrollProgress < 25
                    ? "#10b981"
                    : scrollProgress < 50
                    ? "#059669"
                    : scrollProgress < 75
                    ? "#047857"
                    : "#065f46"
                }
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-200 ease-out drop-shadow-sm"
              />
            </svg>

            {/* Button content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white hover:bg-green-50 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
                <ChevronUp
                  size={20}
                  className={`transition-colors duration-300 ${
                    scrollProgress < 25
                      ? "text-green-500"
                      : scrollProgress < 50
                      ? "text-green-600"
                      : scrollProgress < 75
                      ? "text-green-700"
                      : "text-green-800"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              Mergi sus
              <div className="absolute top-full right-2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-800"></div>
            </div>
          </div>
        </button>
      )}
    </>
  );
};
