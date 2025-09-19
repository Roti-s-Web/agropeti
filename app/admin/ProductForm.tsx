import { useState, useEffect, useRef } from "react";
import { X, Upload, Image as ImageIcon, Tag } from "lucide-react";
import { useProducts } from "../../context/ProductProvider";
import { categories } from "../../data/categories";
import { Product } from "../../types/types";
import { uploadToCloudinary } from "../../lib/upload";
import Image from "next/image";

interface ProductFormProps {
  product?: Product | null;
  onClose: () => void;
}

export const ProductForm: React.FC<ProductFormProps> = ({
  product,
  onClose,
}) => {
  const { addProduct, updateProduct } = useProducts();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    images: [""],
    category: "",
    subcategory: "",
    inStock: true,
    featured: false,
    discount: "",
    specifications: {} as { [key: string]: string },
  });

  const [newSpecKey, setNewSpecKey] = useState("");
  const [newSpecValue, setNewSpecValue] = useState("");
  const [uploading, setUploading] = useState<boolean[]>([]);
  const [loading, setLoading] = useState(false);
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        description: product.description,
        price: product.price.toString(),
        images: product.images,
        category: product.category,
        subcategory: product.subcategory,
        inStock: product.inStock,
        featured: product.featured || false,
        discount: product.discount?.toString() || "",
        specifications: product.specifications || {},
      });
    }
  }, [product]);

  const selectedCategory = categories.find((c) => c.id === formData.category);

  const originalPrice = parseFloat(formData.price) || 0;
  const discountPercent = parseFloat(formData.discount) || 0;
  const discountedPrice =
    originalPrice - (originalPrice * discountPercent) / 100;
  const savings = originalPrice - discountedPrice;

  const handleImageChange = (index: number, value: string) => {
    const newImages = [...formData.images];
    newImages[index] = value;
    setFormData({ ...formData, images: newImages });
  };

  const handleFileUpload = async (index: number, file: File) => {
    try {
      const newUploading = [...uploading];
      newUploading[index] = true;
      setUploading(newUploading);

      const imageUrl = await uploadToCloudinary(file);
      handleImageChange(index, imageUrl);
    } catch (error) {
      console.error("Upload error:", error);
      alert("Eroare la încărcarea imaginii. Încercați din nou.");
    } finally {
      const newUploading = [...uploading];
      newUploading[index] = false;
      setUploading(newUploading);
    }
  };

  const addImageField = () => {
    setFormData({ ...formData, images: [...formData.images, ""] });
    setUploading([...uploading, false]);
  };

  const removeImageField = (index: number) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    const newUploading = uploading.filter((_, i) => i !== index);
    setFormData({ ...formData, images: newImages });
    setUploading(newUploading);
  };

  const addSpecification = () => {
    if (newSpecKey && newSpecValue) {
      setFormData({
        ...formData,
        specifications: {
          ...formData.specifications,
          [newSpecKey]: newSpecValue,
        },
      });
      setNewSpecKey("");
      setNewSpecValue("");
    }
  };

  const removeSpecification = (key: string) => {
    const newSpecs = { ...formData.specifications };
    delete newSpecs[key];
    setFormData({ ...formData, specifications: newSpecs });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const productData: Omit<Product, "id" | "createdAt" | "updatedAt"> = {
        name: formData.name,
        slug: formData.name.toLowerCase().replace(/\s+/g, "-"),
        description: formData.description,
        price: parseFloat(formData.price),
        images: formData.images.filter((img) => img.trim() !== ""),
        category: formData.category,
        subcategory: formData.subcategory,
        inStock: formData.inStock,
        featured: formData.featured,
        discount: formData.discount ? parseFloat(formData.discount) : undefined,
        specifications:
          Object.keys(formData.specifications).length > 0
            ? formData.specifications
            : undefined,
      };

      if (product) {
        await updateProduct(product.id, productData);
      } else {
        await addProduct(productData);
      }

      onClose();
    } catch (error) {
      console.error("Error saving product:", error);
      alert("Eroare la salvarea produsului. Încercați din nou.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            {product ? "Editează produs" : "Produs nou"}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            disabled={loading}
            title="Close"
            name="Close"
          >
            <X size={24} className="text-gray-900" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Basic Info */}
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="name"
              >
                Nume produs *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder:text-gray-400 text-gray-900 focus:outline-none"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="description"
              >
                Descriere *
              </label>
              <textarea
                value={formData.description}
                id="description"
                name="description"
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder:text-gray-400 text-gray-900 focus:outline-none"
                required
                disabled={loading}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  htmlFor="price"
                >
                  Preț (lei) *
                </label>
                <input
                  type="number"
                  min="0"
                  name="price"
                  id="price"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder:text-gray-400 text-gray-900 focus:outline-none"
                  required
                  disabled={loading}
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  htmlFor="discount"
                >
                  Reducere (%)
                </label>
                <input
                  type="number"
                  step="1"
                  name="discount"
                  id="discount"
                  min="0"
                  max="100"
                  value={formData.discount}
                  onChange={(e) =>
                    setFormData({ ...formData, discount: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder:text-gray-400 text-gray-900 focus:outline-none"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Price Preview */}
            {originalPrice > 0 && discountPercent > 0 && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Tag className="h-4 w-4 text-green-600" />
                  <h4 className="text-sm font-medium text-green-800">
                    Previzualizare preț
                  </h4>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Preț original:
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        discountPercent > 0
                          ? "line-through text-gray-500"
                          : "text-gray-900"
                      }`}
                    >
                      {originalPrice.toFixed(2)} lei
                    </span>
                  </div>

                  {discountPercent > 0 && (
                    <>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">
                          Reducere ({discountPercent}%):
                        </span>
                        <span className="text-sm font-medium text-red-600">
                          -{savings.toFixed(2)} lei
                        </span>
                      </div>

                      <div className="flex items-center justify-between border-t border-green-200 pt-2">
                        <span className="text-sm font-semibold text-green-800">
                          Preț final:
                        </span>
                        <span className="text-lg font-bold text-green-600">
                          {discountedPrice.toFixed(2)} lei
                        </span>
                      </div>

                      <div className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded">
                        💰 Clientul economisește {savings.toFixed(2)} lei (
                        {discountPercent}%)
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  htmlFor="category"
                >
                  Categorie *
                </label>
                <select
                  value={formData.category}
                  id="category"
                  name="category"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      category: e.target.value,
                      subcategory: "",
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder:text-gray-400 text-gray-900 focus:outline-none"
                  required
                  disabled={loading}
                >
                  <option value="">Selectează categoria</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  htmlFor="subcategory"
                >
                  Subcategorie *
                </label>
                <select
                  value={formData.subcategory}
                  id="subcategory"
                  name="subcategory"
                  onChange={(e) =>
                    setFormData({ ...formData, subcategory: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder:text-gray-400 text-gray-900 focus:outline-none"
                  required
                  disabled={!selectedCategory || loading}
                >
                  <option value="">Selectează subcategoria</option>
                  {selectedCategory?.subcategories.map((subcategory) => (
                    <option key={subcategory.id} value={subcategory.id}>
                      {subcategory.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Images */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Imagini *
            </label>
            <div className="space-y-3">
              {formData.images.map((image, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex gap-3">
                    <input
                      type="url"
                      name={`images[${index}]`}
                      id={`images[${index}]`}
                      value={image}
                      onChange={(e) => handleImageChange(index, e.target.value)}
                      placeholder="URL imagine sau încarcă o imagine"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder:text-gray-400 text-gray-900 focus:outline-none"
                      required={index === 0}
                      disabled={loading || uploading[index]}
                    />
                    <input
                      type="file"
                      ref={(el) => {
                        fileInputRefs.current[index] = el;
                      }}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileUpload(index, file);
                      }}
                      accept="image/*"
                      className="hidden"
                    />

                    <button
                      type="button"
                      onClick={() => fileInputRefs.current[index]?.click()}
                      className="px-3 py-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors disabled:opacity-50 cursor-pointer"
                      disabled={loading || uploading[index]}
                    >
                      {uploading[index] ? (
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-600"></div>
                      ) : (
                        <ImageIcon size={16} />
                      )}
                    </button>
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => removeImageField(index)}
                        className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                        disabled={loading}
                      >
                        <X size={16} />
                      </button>
                    )}
                  </div>
                  {image && (
                    <div className="relative w-20 h-20">
                      <Image
                        src={image}
                        alt={`Preview ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover rounded-lg border"
                      />
                    </div>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addImageField}
                className="flex items-center gap-2 px-4 py-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors cursor-pointer"
                disabled={loading}
              >
                <Upload size={16} />
                Adaugă imagine
              </button>
            </div>
          </div>

          {/* Specifications */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="specValue"
            >
              Specificații
            </label>
            <div className="space-y-3">
              {Object.entries(formData.specifications).map(([key, value]) => (
                <div
                  key={key}
                  className="flex gap-3 items-center p-3 bg-gray-50 rounded-lg "
                >
                  <span className="font-medium text-gray-700">{key}:</span>
                  <span className="text-gray-600">{value}</span>
                  <button
                    type="button"
                    onClick={() => removeSpecification(key)}
                    className="ml-auto text-red-600 hover:bg-red-100 p-1 rounded cursor-pointer"
                    disabled={loading}
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}

              <div className="flex gap-3">
                <input
                  type="text"
                  name="specKey"
                  id="specKey"
                  placeholder="Specificație"
                  value={newSpecKey}
                  onChange={(e) => setNewSpecKey(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder:text-gray-400 text-gray-900 focus:outline-none"
                  disabled={loading}
                />
                <input
                  type="text"
                  name="specValue"
                  id="specValue"
                  placeholder="Valoare"
                  value={newSpecValue}
                  onChange={(e) => setNewSpecValue(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder:text-gray-400 text-gray-900 focus:outline-none"
                  disabled={loading}
                />
                <button
                  type="button"
                  name="addSpec"
                  title="Adaugă specificație"
                  onClick={addSpecification}
                  disabled={!newSpecKey || !newSpecValue || loading}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  Adaugă
                </button>
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="inStock"
                checked={formData.inStock}
                onChange={(e) =>
                  setFormData({ ...formData, inStock: e.target.checked })
                }
                className="rounded border-gray-300 text-green-600 focus:ring-green-500 cursor-pointer"
                disabled={loading}
              />
              <label
                htmlFor="inStock"
                className="text-sm font-medium text-gray-700"
              >
                În stoc
              </label>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="featured"
                checked={formData.featured}
                onChange={(e) =>
                  setFormData({ ...formData, featured: e.target.checked })
                }
                className="rounded border-gray-300 text-green-600 focus:ring-green-500 cursor-pointer"
                disabled={loading}
              />
              <label
                htmlFor="featured"
                className="text-sm font-medium text-gray-700"
              >
                Produs recomandat
              </label>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-6 border-t border-gray-200">
            <button
              type="button"
              name="cancel"
              title="Anulează"
              onClick={onClose}
              className="flex-1 px-4 py-3 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium cursor-pointer"
              disabled={loading}
            >
              Anulează
            </button>
            <button
              type="submit"
              name="save"
              title="Salvează"
              disabled={loading || uploading.some((u) => u)}
              className="flex-1 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium cursor-pointer"
            >
              {loading
                ? "Se salvează produsul..."
                : product
                ? "Actualizează produsul"
                : "Creează"}{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
