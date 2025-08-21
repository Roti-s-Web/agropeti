import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Truck,
  Shield,
  Phone,
  Star,
  Leaf,
  Users,
  Award,
} from "lucide-react";
import { Product } from "@/types/types";
import { ProductGrid } from "./components/Product/ProductGrid";
import { getFeaturedProducts } from "../lib/getFeaturedProducts";

export default async function Home() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative text-white overflow-hidden bg-cover bg-center bg-no-repeat min-h-[600px] flex items-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-green-900/70"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                <Leaf size={32} />
              </div>
              <h1 className="text-5xl font-bold">AgroPeti</h1>
            </div>
            <p className="text-xl mb-2 text-green-100">
              Soluții agricole premium pentru fermierii moderni
            </p>
            <p className="text-lg mb-8 text-gray-100 max-w-2xl mx-auto">
              Descoperă gama noastră completă de echipamente și materiale
              agricole de înaltă calitate. Peste 15 ani de experiență în
              serviciul fermierilor români.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/produse"
                className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                Explorează produsele
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors flex items-center justify-center gap-2 cursor-pointer backdrop-blur-sm"
              >
                <Phone size={18} />
                Contactează-ne
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Despre AgroPeti
              </h2>
              <p className="text-gray-600 mb-6">
                AgroPeti este un furnizor de încredere de echipamente și soluții
                agricole, cu o experiență de peste 15 ani în servirea
                fermierilor români. Ne-am câștigat reputația prin calitatea
                produselor, prețurile competitive și serviciul excepțional
                oferit clienților.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Star className="text-yellow-500" size={20} />
                  <span className="text-gray-700">
                    Peste 5000 de clienți mulțumiți
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="text-green-600" size={20} />
                  <span className="text-gray-700">
                    Livrări în toată România
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="text-blue-600" size={20} />
                  <span className="text-gray-700">
                    Garanție extinsă pentru toate produsele
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-green-600" size={20} />
                  <span className="text-gray-700">
                    Suport tehnic specializat
                  </span>
                </div>
              </div>

              <Link href="/despre">
                <button
                  className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium cursor-pointer"
                  title="Află mai multe despre noi"
                  name="about"
                >
                  Află mai multe despre noi
                </button>
              </Link>
            </div>

            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="font-semibold text-green-800 mb-2">
                  Misiunea noastră
                </h4>
                <p className="text-green-700">
                  Să oferim fermierilor români cele mai bune soluții agricole,
                  contribuind la dezvoltarea unei agriculturi moderne și
                  sustenabile.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-semibold text-blue-800 mb-2">
                  Viziunea noastră
                </h4>
                <p className="text-blue-700">
                  Să devenim liderul pieței de echipamente agricole din România,
                  recunoscuți pentru inovație, calitate și servicii
                  excepționale.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl">
                <h4 className="font-semibold text-yellow-800 mb-2">
                  Valorile noastre
                </h4>
                <p className="text-yellow-700">
                  Integritate, calitate, inovație și dedicare totală pentru
                  succesul clienților noștri în agricultura modernă.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Gata să îți modernizezi ferma?
          </h2>
          <p className="text-green-200 mb-8 max-w-2xl mx-auto">
            Contactează-ne astăzi pentru o consultație gratuită și descoperă cum
            te putem ajuta să îți îmbunătățești producția agricolă cu
            echipamentele noastre de top.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:0740123456"
              className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone size={18} />
              0740 123 456
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors cursor-pointer"
            >
              Trimite mesaj
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
