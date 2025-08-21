import Link from "next/link";
import { ArrowRight, Phone, Leaf } from "lucide-react";

export default function Hero() {
  return (
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
            Descoperă gama noastră completă de echipamente și materiale agricole
            de înaltă calitate. Peste 15 ani de experiență în serviciul
            fermierilor români.
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
  );
}
