import React from "react";
import {
  Leaf,
  Users,
  Award,
  Target,
  Heart,
  Truck,
  Shield,
  Star,
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-white/20 p-3 rounded-full">
                <Leaf size={32} />
              </div>
              <h1 className="text-4xl font-bold">Despre AgroPeti</h1>
            </div>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Peste 15 ani de experiență în furnizarea de echipamente și soluții
              agricole de înaltă calitate pentru fermierii români. Pasiunea
              noastră pentru agricultură se reflectă în fiecare produs și
              serviciu oferit.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Povestea noastră
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  AgroPeti a început în 2008 ca o mică afacere de familie,
                  condusă de pasiunea pentru agricultură și dorința de a ajuta
                  fermierii români să își modernizeze exploatațiile agricole.
                </p>
                <p>
                  De atunci, am crescut constant, construind relații solide cu
                  producători de renume mondial și dezvoltând o expertiză
                  profundă în domeniul echipamentelor agricole.
                </p>
                <p>
                  Astăzi, suntem mândri să servim peste 5000 de clienți în toată
                  România, de la fermieri mici la exploatații agricole mari,
                  oferind soluții personalizate pentru fiecare nevoie.
                </p>
                <p>
                  Misiunea noastră rămâne aceeași: să oferim produse de calitate
                  superioară, consiliere expertă și servicii de încredere care
                  să contribuie la succesul agricultorilor români.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Target className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-green-800">Misiunea</h3>
                </div>
                <p className="text-green-700">
                  Să oferim fermierilor români cele mai bune soluții agricole,
                  contribuind la dezvoltarea unei agriculturi moderne, eficiente
                  și sustenabile.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Award className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-800">Viziunea</h3>
                </div>
                <p className="text-blue-700">
                  Să devenim liderul pieței de echipamente agricole din România,
                  recunoscuți pentru inovație, calitate și servicii
                  excepționale.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-yellow-100 p-2 rounded-lg">
                    <Heart className="text-yellow-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-yellow-800">
                    Valorile
                  </h3>
                </div>
                <p className="text-yellow-700">
                  Integritate, calitate, inovație și dedicare totală pentru
                  succesul clienților noștri în agricultura modernă.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              AgroPeti în cifre
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Rezultatele noastre vorbesc despre calitatea serviciilor și
              încrederea pe care o oferim clienților.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
              <p className="text-gray-600">Ani de experiență</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
              <p className="text-gray-600">Clienți mulțumiți</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">
                1000+
              </div>
              <p className="text-gray-600">Produse disponibile</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">42</div>
              <p className="text-gray-600">Județe acoperite</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              De ce să ne alegi pe noi?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experiența, calitatea și dedicarea noastră fac diferența în
              fiecare colaborare.
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
                Construim relații de încredere cu clienții noștri, oferind
                suport continuu și soluții adaptate nevoilor în evoluție.
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

      {/* Team Section */}
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

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Hai să colaborăm pentru succesul fermei tale!
          </h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Indiferent de mărimea exploatației sau de provocările cu care te
            confrunți, echipa AgroPeti este gata să te ajute cu soluții
            personalizate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold cursor-pointer">
              Solicită consultanță gratuită
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-green-600 transition-colors font-semibold cursor-pointer">
              Vezi produsele noastre
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
