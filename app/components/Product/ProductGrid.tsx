"use client";

import React from "react";
import { ProductCard } from "./ProductCard";
import { Product } from "../../../types/types";

interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  title = "Produse recomandate",
  subtitle = "Descoperă selecția noastră de produse premium, recomandate de experții noștri pentru calitatea și performanțele excepționale.",
}) => {
  if (products.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">{subtitle}</p>
            <p className="text-gray-500">
              Nu sunt produse disponibile momentan.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
