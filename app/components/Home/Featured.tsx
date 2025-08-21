import { Product } from "@/types/types";
import { Shield, Truck, Users, Award } from "lucide-react";
import { ProductGrid } from "../Product/ProductGrid";
import Link from "next/link";

export default function Featured({
  featuredProducts,
}: {
  featuredProducts: Product[];
}) {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              De ce să alegi AgroPeti?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Suntem partenerul tău de încredere pentru toate nevoile agricole,
              oferind produse de calitate și servicii excepționale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="text-green-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Calitate garantată
              </h3>
              <p className="text-gray-600 text-sm">
                Toate produsele noastre sunt testate și certificate, cu garanție
                extinsă pentru liniștea ta.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Truck className="text-green-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Livrare rapidă
              </h3>
              <p className="text-gray-600 text-sm">
                Livrăm în toată țara cu transportatori de încredere, asigurând
                ajungerea produselor în siguranță.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Suport expert
              </h3>
              <p className="text-gray-600 text-sm">
                Echipa noastră de specialiști îți oferă consultanță gratuită
                pentru alegerea produselor potrivite.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="text-green-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                15+ ani experiență
              </h3>
              <p className="text-gray-600 text-sm">
                Peste 15 ani în piața agricolă românească, cu mii de clienți
                mulțumiți și proiecte reușite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Slider */}
      {featuredProducts.length > 0 ? (
        <ProductGrid products={featuredProducts as Product[]} />
      ) : (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Produse recomandate
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Descoperă selecția noastră de produse premium, recomandate de
                experții noștri pentru calitatea și performanțele excepționale.
              </p>
              <p className="text-gray-500 mb-8">
                Nu sunt produse recomandate momentan.
              </p>
              <Link
                href="/produse"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Vezi toate produsele
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
