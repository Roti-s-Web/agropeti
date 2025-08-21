import { Phone } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
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
  );
}
