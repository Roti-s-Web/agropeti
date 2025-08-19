"use client";

import { useState, useEffect, useRef } from "react";
import { Plus, Edit, Trash2, LogOut, Package, TrendingUp } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useProducts } from "../../context/ProductProvider";
import { Product } from "../../types/types";
import { ProductForm } from "./ProductForm";
import { DeleteModal } from "./DeleteModal";

export default function Admin() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { products, fetchProducts, deleteProduct, loading } = useProducts();
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const didFetch = useRef(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);

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

  const totalProducts = products.length;
  const inStockProducts = products.filter((p: Product) => p.inStock).length;
  const featuredProducts = products.filter((p: Product) => p.featured).length;

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
                  {inStockProducts}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Package className="text-yellow-600" size={24} />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Produse recomandate</p>
                <p className="text-2xl font-bold text-gray-900">
                  {featuredProducts}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Gestionare produse
          </h2>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors cursor-pointer"
          >
            <Plus size={16} />
            Produs nou
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Se încarcă produsele...</p>
          </div>
        )}

        {/* Products Table */}
        {!loading && (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {products.length === 0 ? (
              <div className="p-8 text-center">
                <Package className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  Nu există produse
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Începeți prin a adăuga primul produs.
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => setShowForm(true)}
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                  >
                    <Plus size={16} className="mr-2" />
                    Produs nou
                  </button>
                </div>
              </div>
            ) : (
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
                            <img
                              src={product.images[0]}
                              alt={product.name}
                              className="w-12 h-12 object-cover rounded-lg"
                            />
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
                            {product.category}/{product.subcategory}
                          </span>
                        </td>
                        <td className="p-4">
                          <span className="font-medium text-gray-900 text-nowrap">
                            {discountedPrice(
                              product.price,
                              product.discount
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
                                product.inStock ? "bg-green-600" : "bg-red-600"
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
                            >
                              <Edit size={16} />
                            </button>
                            <button
                              onClick={() => openDeleteModal(product)}
                              className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors cursor-pointer"
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
            )}
          </div>
        )}
      </div>

      {/* Product Form Modal */}
      {showForm && (
        <ProductForm product={editingProduct} onClose={handleCloseForm} />
      )}
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
