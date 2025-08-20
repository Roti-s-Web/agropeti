"use client";

import { useState, useEffect, useRef } from "react";
import {
  Plus,
  Edit,
  Trash2,
  LogOut,
  Package,
  TrendingUp,
  Star,
  Search,
  X,
  RefreshCw,
} from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useProducts } from "../../context/ProductProvider";
import { Product } from "../../types/types";
import { ProductForm } from "./ProductForm";
import { DeleteModal } from "./DeleteModal";
import Image from "next/image";

export default function Admin() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const {
    products,
    fetchProducts,
    loadMoreProducts,
    searchProducts,
    deleteProduct,
    loading,
    hasMore,
    totalCount,
    recommendedCount,
    inStockCount,
  } = useProducts();

  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const didFetch = useRef(false);
  const searchTimeoutRef = useRef<NodeJS.Timeout>(null);

  const discountedPrice = (price: number, discount = 0) => {
    const discountAmount = (price * discount) / 100;
    return price - discountAmount;
  };

  useEffect(() => {
    if (status === "loading") return;

    if (!session || !session.user?.isAdmin) {
      router.push("/login");
    } else {
      if (!didFetch.current) {
        fetchProducts();
        didFetch.current = true;
      }
    }
  }, [session, status, router, fetchProducts]);

  // Handle search with debouncing
  useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = setTimeout(async () => {
      if (searchQuery.trim()) {
        setIsSearching(true);
        await searchProducts(searchQuery.trim());
        setIsSearching(false);
      } else {
        // If search is empty, fetch all products
        await fetchProducts();
      }
    }, 500);

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [searchQuery, searchProducts, fetchProducts]);

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Se încarcă...</p>
        </div>
      </div>
    );
  }

  if (!session || !session.user?.isAdmin) {
    return null;
  }

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const openDeleteModal = (product: Product) => {
    setProductToDelete(product);
    setDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (productToDelete) {
      try {
        await deleteProduct(productToDelete.id);
      } catch (error) {
        console.error("Error deleting product:", error);
        alert("Eroare la ștergerea produsului");
      } finally {
        setDeleteModalOpen(false);
        setProductToDelete(null);
      }
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingProduct(null);
  };

  const handleLogout = () => {
    signOut({ callbackUrl: "/admin/login" });
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const handleLoadMore = async () => {
    await loadMoreProducts();
  };

  const totalProducts = totalCount;
  const totalRecommended = recommendedCount;
  const totalInStock = inStockCount;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              Bună ziua, {session.user?.name}
            </h1>
            <div className="flex items-center gap-4">
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
              >
                <LogOut size={16} />
                Ieșire
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Package className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Total produse</p>
                <p className="text-2xl font-bold text-gray-900">
                  {totalProducts}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <TrendingUp className="text-green-600" size={24} />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Produse în stoc</p>
                <p className="text-2xl font-bold text-gray-900">
                  {totalInStock}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Star className="text-yellow-600" size={24} />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Produse recomandate</p>
                <p className="text-2xl font-bold text-gray-900">
                  {totalRecommended}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-6">
          <div className="relative w-full sm:max-w-md">
            <input
              type="text"
              name="admin-search"
              id="admin-search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Caută printre produse..."
              className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all duration-200 bg-gray-50 focus:bg-white text-gray-700 placeholder-gray-500"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              {isSearching ? (
                <RefreshCw size={20} className="text-green-600 animate-spin" />
              ) : (
                <Search size={20} className="text-gray-400" />
              )}
            </div>
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={16} />
              </button>
            )}
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap"
          >
            <Plus size={16} />
            Produs nou
          </button>
        </div>

        {/* Results Info */}
        {searchQuery && (
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              {isSearching ? (
                "Se caută..."
              ) : (
                <>
                  {products.length} rezultate pentru &quot;{searchQuery}&quot;
                  {totalCount > products.length && (
                    <span> (din {totalCount} total)</span>
                  )}
                </>
              )}
            </p>
          </div>
        )}

        {/* Loading State */}
        {loading && products.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Se încarcă produsele...</p>
          </div>
        )}

        {/* Products Table */}
        {!loading || products.length > 0 ? (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {products.length === 0 ? (
              <div className="p-8 text-center">
                <Package className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  {searchQuery ? "Nu s-au găsit produse" : "Nu există produse"}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {searchQuery
                    ? "Încearcă să modifici termenii de căutare."
                    : "Începeți prin a adăuga primul produs."}
                </p>
                {!searchQuery && (
                  <div className="mt-6">
                    <button
                      onClick={() => setShowForm(true)}
                      className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                    >
                      <Plus size={16} className="mr-2" />
                      Produs nou
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left p-4 font-medium text-gray-600">
                          Produs
                        </th>
                        <th className="text-left p-4 font-medium text-gray-600">
                          Categorie
                        </th>
                        <th className="text-left p-4 font-medium text-gray-600">
                          Preț
                        </th>
                        <th className="text-left p-4 font-medium text-gray-600">
                          Stoc
                        </th>
                        <th className="text-left p-4 font-medium text-gray-600">
                          Status
                        </th>
                        <th className="text-right p-4 font-medium text-gray-600">
                          Acțiuni
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {products.map((product: Product) => (
                        <tr key={product.id} className="hover:bg-gray-50">
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              {product.images && product.images.length > 0 ? (
                                <div className="min-w-16 min-h-16 relative">
                                  <Image
                                    src={product.images[0]}
                                    alt={product.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover rounded-lg"
                                  />
                                </div>
                              ) : (
                                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                                  <Package size={24} />
                                </div>
                              )}
                              <div>
                                <p className="font-medium text-gray-900">
                                  {product.name}
                                </p>
                                <p className="text-sm text-gray-500 line-clamp-1">
                                  {product.description}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            <span className="text-sm text-gray-600 text-nowrap">
                              {product.category}
                              {product.subcategory && `/${product.subcategory}`}
                            </span>
                          </td>
                          <td className="p-4">
                            <span className="font-medium text-gray-900 text-nowrap">
                              {discountedPrice(
                                product.price,
                                product.discount || 0
                              ).toFixed(2)}{" "}
                              lei
                            </span>
                            {product.discount && (
                              <span className="ml-2 text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
                                -{product.discount}%
                              </span>
                            )}
                          </td>
                          <td className="p-4">
                            <span
                              className={`inline-flex items-center gap-1 text-sm text-nowrap ${
                                product.inStock
                                  ? "text-green-600"
                                  : "text-red-600"
                              }`}
                            >
                              <div
                                className={`w-2 h-2 rounded-full ${
                                  product.inStock
                                    ? "bg-green-600"
                                    : "bg-red-600"
                                }`}
                              ></div>
                              {product.inStock ? "În stoc" : "Epuizat"}
                            </span>
                          </td>
                          <td className="p-4">
                            {product.featured && (
                              <span className="inline-flex items-center text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                                Recomandat
                              </span>
                            )}
                          </td>
                          <td className="p-4 text-right">
                            <div className="flex items-center gap-2 justify-end">
                              <button
                                onClick={() => handleEdit(product)}
                                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                                title="Editează produsul"
                              >
                                <Edit size={16} />
                              </button>
                              <button
                                onClick={() => openDeleteModal(product)}
                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                                title="Șterge produsul"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Load More Button */}
                {hasMore && (
                  <div className="border-t border-gray-200 p-4 text-center">
                    <button
                      onClick={handleLoadMore}
                      disabled={loading}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-400 text-gray-700 rounded-xl transition-colors cursor-pointer disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <RefreshCw size={16} className="animate-spin" />
                          Se încarcă...
                        </>
                      ) : (
                        <>
                          <Plus size={16} />
                          Încarcă mai multe ({products.length} din {totalCount})
                        </>
                      )}
                    </button>
                  </div>
                )}

                {/* No more results */}
                {!hasMore && products.length > 0 && (
                  <div className="border-t border-gray-200 p-4 text-center">
                    <p className="text-sm text-gray-500">
                      Toate produsele au fost încărcate ({products.length}{" "}
                      total)
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        ) : null}
      </div>

      {/* Product Form Modal */}
      {showForm && (
        <ProductForm product={editingProduct} onClose={handleCloseForm} />
      )}

      {/* Delete Modal */}
      {deleteModalOpen && (
        <DeleteModal
          isOpen={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          onConfirm={confirmDelete}
          productName={productToDelete?.name}
        />
      )}
    </div>
  );
}
