import { Users, Shield, Truck } from "lucide-react";

export default function Team() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Echipa AgroPeti
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Echipa noastră este formată din specialiști pasionați de
            agricultură, cu experiență vastă în domeniu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Users className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Vânzări & Consultanță
            </h3>
            <p className="text-gray-600">
              Specialiștii noștri în vânzări oferă consultanță tehnică expertă
              pentru alegerea produselor potrivite fiecărui client.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Shield className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Service Tehnic
            </h3>
            <p className="text-gray-600">
              Echipa noastră de service asigură instalarea, întreținerea și
              reparația echipamentelor comercializate.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <div className="w-24 h-24 bg-yellow-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Truck className="text-yellow-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Logistică
            </h3>
            <p className="text-gray-600">
              Departamentul logistic coordonează livrările pentru a asigura
              ajungerea produselor la timp și în condiții optime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
