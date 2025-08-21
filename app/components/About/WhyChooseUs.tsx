import { Shield, Truck, Users, Star, Heart, Leaf } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            De ce să ne alegi pe noi?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experiența, calitatea și dedicarea noastră fac diferența în fiecare
            colaborare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
            <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
              <Shield className="text-green-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Calitate garantată
            </h3>
            <p className="text-gray-600">
              Colaborăm doar cu producători recunoscuți mondial și oferim
              garanție extinsă pentru toate produsele comercializate.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
              <Users className="text-blue-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Expertiză tehnică
            </h3>
            <p className="text-gray-600">
              Echipa noastră de specialiști oferă consultanță gratuită pentru
              alegerea soluțiilor optime pentru fiecare tip de exploatație.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
            <div className="bg-yellow-100 p-3 rounded-lg w-fit mb-4">
              <Truck className="text-yellow-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Livrări rapide
            </h3>
            <p className="text-gray-600">
              Rețeaua noastră logistică asigură livrări rapide și sigure în
              toată România, cu costuri transparente și competitive.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
            <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
              <Star className="text-purple-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Servicii complete
            </h3>
            <p className="text-gray-600">
              De la consultanță și vânzare până la instalare și service
              post-vânzare, oferim servicii complete pentru liniștea ta.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
            <div className="bg-red-100 p-3 rounded-lg w-fit mb-4">
              <Heart className="text-red-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Relații pe termen lung
            </h3>
            <p className="text-gray-600">
              Construim relații de încredere cu clienții noștri, oferind suport
              continuu și soluții adaptate nevoilor în evoluție.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
            <div className="bg-teal-100 p-3 rounded-lg w-fit mb-4">
              <Leaf className="text-teal-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Sustenabilitate
            </h3>
            <p className="text-gray-600">
              Promovăm soluții agricole sustenabile care protejează mediul și
              asigură profitabilitatea pe termen lung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
