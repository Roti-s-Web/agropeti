import React from "react";
import Link from "next/link";
import { Home, Phone, Search, Package, Leaf, MapPin, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Visual */}
          <div className="mb-12">
            <div className="relative">
              {/* Large 404 */}
              <div className="text-8xl md:text-9xl font-bold text-green-100 select-none">
                404
              </div>

              {/* Tractor icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-green-600 p-6 rounded-full shadow-lg">
                  <Leaf className="text-white" size={48} />
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pagina nu a fost găsită
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Ne pare rău, dar pagina pe care o căutați nu există sau a fost
              mutată. Poate ați tastat greșit adresa sau linkul pe care l-ați
              urmat nu mai este valid.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/"
              className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-colors font-semibold shadow-lg"
            >
              <Home size={20} />
              Înapoi acasă
            </Link>

            <Link
              href="/produse"
              className="inline-flex items-center gap-3 bg-white text-green-800 border-2 border-green-600 px-8 py-4 rounded-xl hover:bg-green-50 transition-colors font-semibold"
            >
              <Package size={20} />
              Vezi produsele
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors font-semibold"
            >
              <Phone size={20} />
              Contactează-ne
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="bg-green-100 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Search className="text-green-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Caută produse
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Găsește echipamentele agricole de care ai nevoie din gama
                noastră variată.
              </p>
              <Link
                href="/produse"
                className="text-green-600 hover:text-green-700 font-medium text-sm"
              >
                Explorează produsele →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Phone className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Sună-ne direct
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Vorbește cu experții noștri pentru a avea parte de o consultanță
                personalizată.
              </p>
              <Link
                href="tel:0740123456"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                0740 123 456 →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="bg-purple-100 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Leaf className="text-purple-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Despre AgroPeti
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Află mai multe despre compania noastră și experiența de peste 15
                ani.
              </p>
              <Link
                href="/despre"
                className="text-purple-600 hover:text-purple-700 font-medium text-sm"
              >
                Citește mai mult →
              </Link>
            </div>
          </div>

          {/* Popular Categories */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Categorii populare
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                href="/produse?category=tractoare"
                className="bg-green-50 p-4 rounded-lg hover:bg-green-100 transition-colors group"
              >
                <h3 className="font-semibold text-green-800 group-hover:text-green-900 mb-1">
                  Tractoare
                </h3>
                <p className="text-green-600 text-xs">Echipamente de bază</p>
              </Link>

              <Link
                href="/produse?category=utilaje"
                className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors group"
              >
                <h3 className="font-semibold text-blue-800 group-hover:text-blue-900 mb-1">
                  Utilaje
                </h3>
                <p className="text-blue-600 text-xs">Mașini agricole</p>
              </Link>

              <Link
                href="/produse?category=scule"
                className="bg-yellow-50 p-4 rounded-lg hover:bg-yellow-100 transition-colors group"
              >
                <h3 className="font-semibold text-yellow-800 group-hover:text-yellow-900 mb-1">
                  Scule
                </h3>
                <p className="text-yellow-600 text-xs">Instrumente manuale</p>
              </Link>

              <Link
                href="/produse?category=materiale"
                className="bg-purple-50 p-4 rounded-lg hover:bg-purple-100 transition-colors group"
              >
                <h3 className="font-semibold text-purple-800 group-hover:text-purple-900 mb-1">
                  Materiale
                </h3>
                <p className="text-purple-600 text-xs">Consumabile</p>
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-green-600 text-white rounded-xl p-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Leaf size={32} />
              <h2 className="text-2xl font-bold">
                AgroPeti - Partenerul tău agricol
              </h2>
            </div>

            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Dacă nu găsești ce cauți sau ai nevoie de ajutor, suntem aici
              pentru tine. Cu peste 15 ani de experiență, îți oferim cele mai
              bune soluții agricole.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-green-500/20 p-4 rounded-lg backdrop-blur-sm">
                <Phone className="mx-auto mb-2" size={24} />
                <h3 className="font-semibold mb-1">Telefon</h3>
                <Link
                  href="tel:0740123456"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  0740 123 456
                </Link>
              </div>

              <div className="bg-green-500/20 p-4 rounded-lg backdrop-blur-sm">
                <Mail className="mx-auto mb-2" size={24} />
                <h3 className="font-semibold mb-1">Email</h3>
                <Link
                  href="mailto:contact@agropeti.ro"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  contact@agropeti.ro
                </Link>
              </div>

              <div className="bg-green-500/20 p-4 rounded-lg backdrop-blur-sm">
                <MapPin className="mx-auto mb-2" size={24} />
                <h3 className="font-semibold mb-1">Locația</h3>
                <p className="text-green-100 text-sm">Oradea, Bihor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
