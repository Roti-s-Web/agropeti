import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Phone,
  Star,
  Truck,
  Shield,
  CheckCircle,
  XCircle,
  Clock,
  Award,
} from "lucide-react";
import { ProductImageGallery } from "../../components/Product/ProductImageGallery";
import { ProductActions } from "@/app/components/Product/ProductActions";
import { Product } from "@/types/types";
import { prisma } from "../../../lib/prisma";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

function formatCategoryName(name: string): string {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

type ProductWithSlug = Omit<Product, "slug"> & {
  slug: string;
};

export async function generateStaticParams() {
  try {
    const products = await prisma.product.findMany({
      select: { slug: true },
    });

    return products
      .filter((product): product is { slug: string } => product.slug !== null)
      .map((product) => ({
        slug: product.slug,
      }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

interface ProductDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;

  let product: ProductWithSlug | null = null;
  let relatedProducts: ProductWithSlug[] = [];

  try {
    const fetchedProduct = (await prisma.product.findUnique({
      where: { slug: slug },
    })) as Product | null;

    if (!fetchedProduct || !fetchedProduct.slug) {
      notFound();
    }

    product = fetchedProduct as ProductWithSlug;

    const fetchedRelatedProducts = (await prisma.product.findMany({
      where: {
        category: product.category,
        slug: {
          not: product.slug,
        },
        inStock: true,
      },
      take: 4,
      orderBy: {
        createdAt: "desc",
      },
    })) as Product[];

    relatedProducts = fetchedRelatedProducts.filter(
      (p): p is ProductWithSlug => p.slug !== null
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    notFound();
  }

  const discountedPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6 overflow-hidden">
          <Link
            href="/"
            className="hover:text-green-600 transition-colors whitespace-nowrap"
          >
            Acasă
          </Link>
          <span>/</span>
          <Link
            href="/produse"
            className="hover:text-green-600 transition-colors whitespace-nowrap"
          >
            Produse
          </Link>
          <span>/</span>
          <Link
            href={`/produse?category=${encodeURIComponent(product.category)}`}
            className="hover:text-green-600 transition-colors whitespace-nowrap"
          >
            {formatCategoryName(product.category)}
          </Link>
          <span>/</span>
          <span className="text-gray-900 truncate whitespace-nowrap ">
            {product.name}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <ProductImageGallery
            images={product.images}
            productName={product.name}
          />

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">(4.8)</span>
                </div>
                <span className="text-sm text-gray-500">
                  COD: {product.id.slice(-8)}
                </span>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {product.featured && (
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Recomandat
                  </span>
                )}
                {product.discount && (
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    -{product.discount}% REDUCERE
                  </span>
                )}
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {formatCategoryName(product.category)}
                </span>
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2 mb-6">
                {product.inStock ? (
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle size={20} />
                    <span className="font-medium">În stoc</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-red-600">
                    <XCircle size={20} />
                    <span className="font-medium">Stoc epuizat</span>
                  </div>
                )}
              </div>
            </div>

            {/* Price */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  {product.discount ? (
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl font-bold text-green-600">
                          {discountedPrice.toFixed(2)} lei
                        </span>
                        <span className="text-lg text-gray-500 line-through">
                          {product.price.toFixed(2)} lei
                        </span>
                      </div>
                      <p className="text-sm text-green-600 font-medium">
                        Economisești{" "}
                        {(product.price - discountedPrice).toFixed(2)} lei
                      </p>
                    </div>
                  ) : (
                    <span className="text-3xl font-bold text-green-600">
                      {product.price.toFixed(2)} lei
                    </span>
                  )}
                </div>
              </div>

              <ProductActions product={product} />
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-200">
                <Truck className="text-green-600 flex-shrink-0" size={24} />
                <div>
                  <p className="font-medium text-gray-900">Livrare rapidă</p>
                  <p className="text-sm text-gray-600">2-3 zile lucrătoare</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-200">
                <Shield className="text-blue-600 flex-shrink-0" size={24} />
                <div>
                  <p className="font-medium text-gray-900">Garanție</p>
                  <p className="text-sm text-gray-600">Extinsă</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-200">
                <Award className="text-purple-600 flex-shrink-0" size={24} />
                <div>
                  <p className="font-medium text-gray-900">Calitate</p>
                  <p className="text-sm text-gray-600">Certificată</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Description */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Descrierea produsului
              </h2>
              <div className="prose prose-gray max-w-none">
                <div className="text-gray-600 leading-relaxed">
                  <Markdown
                    remarkPlugins={[remarkBreaks]}
                    components={{
                      p: ({ children }) => <p className="mb-4">{children}</p>,
                      br: () => <br className="mb-2" />,
                    }}
                  >
                    {product.description}
                  </Markdown>
                </div>
              </div>
            </div>

            {/* Specifications */}
            {product.specifications &&
              Object.keys(product.specifications).length > 0 && (
                <div className="bg-white rounded-xl p-6 border border-gray-200 mt-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Specificații tehnice
                  </h2>
                  <div className="space-y-3">
                    {Object.entries(
                      product.specifications as Record<string, string>
                    ).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-center w-full py-3 border-b border-gray-100 last:border-b-0"
                      >
                        <span className="font-medium text-gray-700">
                          {formatCategoryName(key)}:
                        </span>
                        <span className="text-gray-600 text-right">
                          {String(value)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Ai nevoie de ajutor?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="text-green-600" size={20} />
                  <div>
                    <p className="font-medium text-gray-900">Telefon</p>
                    <Link
                      href="tel:0740123456"
                      className="text-green-600 hover:text-green-700"
                    >
                      0740 123 456
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-blue-600" size={20} />
                  <div>
                    <p className="font-medium text-gray-900">Program</p>
                    <p className="text-sm text-gray-600">Lun-Vin: 8:00-18:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Category Info */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Categorie
              </h3>
              <div className="space-y-2">
                <Link
                  href={`/produse?category=${encodeURIComponent(
                    product.category
                  )}`}
                  className="block text-green-600 hover:text-green-700 font-medium"
                >
                  {formatCategoryName(product.category)}
                </Link>
                {product.subcategory && (
                  <Link
                    href={`/produse?category=${encodeURIComponent(
                      product.category
                    )}&subcategory=${encodeURIComponent(product.subcategory)}`}
                    className="block text-gray-600 hover:text-gray-700 text-sm"
                  >
                    {formatCategoryName(product.subcategory)}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="bg-white rounded-xl p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Produse similare
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/produs/${relatedProduct.slug}`}
                  className="group"
                >
                  <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 ">
                    <div className="aspect-square overflow-hidden bg-gray-100 relative">
                      <Image
                        src={relatedProduct.images[0]}
                        alt={relatedProduct.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3
                        className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors"
                        style={{ minHeight: "3.2rem" }}
                      >
                        {relatedProduct.name}
                      </h3>

                      <div className="flex items-center justify-between">
                        <div>
                          {relatedProduct.discount ? (
                            <div className="flex items-center gap-2">
                              <span className="text-lg font-bold text-green-600">
                                {(
                                  relatedProduct.price *
                                  (1 - relatedProduct.discount / 100)
                                ).toFixed(2)}{" "}
                                lei
                              </span>
                              <span className="text-sm text-gray-500 line-through">
                                {relatedProduct.price.toFixed(2)} lei
                              </span>
                            </div>
                          ) : (
                            <span className="text-lg font-bold text-green-600">
                              {relatedProduct.price.toFixed(2)} lei
                            </span>
                          )}
                        </div>
                        {relatedProduct.featured && (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                            Top
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
