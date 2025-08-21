import { Shield, Star, Truck, Phone } from "lucide-react";
import Link from "next/link";

export default function Featured() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Despre AgroPeti
            </h2>
            <p className="text-gray-600 mb-6">
              AgroPeti este un furnizor de încredere de echipamente și soluții
              agricole, cu o experiență de peste 15 ani în servirea fermierilor
              români. Ne-am câștigat reputația prin calitatea produselor,
              prețurile competitive și serviciul excepțional oferit clienților.
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
                <span className="text-gray-700">Livrări în toată România</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="text-blue-600" size={20} />
                <span className="text-gray-700">
                  Garanție extinsă pentru toate produsele
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-green-600" size={20} />
                <span className="text-gray-700">Suport tehnic specializat</span>
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
                recunoscuți pentru inovație, calitate și servicii excepționale.
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
  );
}
