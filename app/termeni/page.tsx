import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Shield,
  FileText,
  Clock,
  Truck,
  RefreshCw,
} from "lucide-react";

export default function Termeni() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link
            href="/"
            className="hover:text-green-600 transition-colors flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Acasă
          </Link>
          <span>/</span>
          <span className="text-gray-900">Termeni și Condiții</span>
        </nav>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-green-100 p-3 rounded-xl">
                <FileText className="text-green-600" size={32} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  Termeni și Condiții
                </h1>
                <p className="text-gray-600 mt-2">
                  Actualizat la data de 21 august 2025
                </p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Prin utilizarea site-ului <strong>AgroPeti</strong> și a
              serviciilor noastre, acceptați termenii și condițiile prezentate
              mai jos. Vă rugăm să citiți cu atenție aceste informații înainte
              de a continua navigarea.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Informații generale */}
            <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Shield className="text-blue-600" size={24} />
                1. Informații generale
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Site-ul <strong>AgroPeti</strong> este operat de{" "}
                  <strong>SC AgroPeti SRL</strong>, o societate înregistrată în
                  România, specializată în comercializarea de echipamente și
                  materiale agricole.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">
                    Date de contact:
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-green-700">
                      <Phone size={16} />
                      <span>0740 123 456</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-700">
                      <Mail size={16} />
                      <span>contact@agropeti.ro</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-700">
                      <MapPin size={16} />
                      <span>Strada Agricolă nr. 123, Oradea, Bihor</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Utilizarea site-ului */}
            <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Utilizarea site-ului
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Site-ul AgroPeti este destinat prezentării produselor noastre
                  și facilitării contactului cu clienții. Prin utilizarea
                  site-ului, vă angajați să:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Utilizați site-ul doar în scopuri legale</li>
                  <li>
                    Nu încercați să accesați părți neautorizate ale site-ului
                  </li>
                  <li>Nu distribuiți conținut dăunător sau ilegal</li>
                  <li>Respectați drepturile de proprietate intelectuală</li>
                </ul>
              </div>
            </section>

            {/* Comenzi și prețuri */}
            <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Phone className="text-green-600" size={24} />
                3. Comenzi și prețuri
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-yellow-800 font-medium">
                    <strong>Important:</strong> Toate comenzile se fac exclusiv
                    telefonic la numărul 0740 123 456. Nu acceptăm comenzi
                    online și nu oferim servicii de plată electronică.
                  </p>
                </div>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Prețurile afișate pe site sunt informative și pot fi
                    modificate fără preaviz
                  </li>
                  <li>
                    Prețul final va fi confirmat telefonic la plasarea comenzii
                  </li>
                  <li>
                    Toate prețurile sunt exprimate în lei români și includ TVA
                  </li>
                  <li>
                    Disponibilitatea produselor va fi confirmată telefonic
                  </li>
                  <li>
                    Comenzile sunt procesate doar după confirmarea telefonică
                  </li>
                </ul>
              </div>
            </section>

            {/* Livrare */}
            <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Truck className="text-green-600" size={24} />
                4. Livrare și transport
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Oferim servicii de livrare în toată România prin
                  transportatori specializați în echipamente agricole.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">
                      Termene de livrare:
                    </h3>
                    <ul className="space-y-1 text-green-700">
                      <li>• 2-3 zile lucrătoare (produse în stoc)</li>
                      <li>• 5-7 zile lucrătoare (produse la comandă)</li>
                      <li>• Termene speciale pentru echipamente mari</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">
                      Costuri de transport:
                    </h3>
                    <ul className="space-y-1 text-blue-700">
                      <li>• Calculat în funcție de greutate și distanță</li>
                      <li>• Comunicat telefonic la comandă</li>
                      <li>
                        • Posibilitate transport gratuit pentru comenzi mari
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Garanție și retururi */}
            <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <RefreshCw className="text-blue-600" size={24} />
                5. Garanție și retururi
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Toate produsele comercializate beneficiază de garanție conform
                  specificațiilor producătorului și legislației în vigoare.
                </p>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Garanție:
                    </h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Garanție legală de conformitate: 24 luni</li>
                      <li>
                        Garanție comercială: conform specificațiilor
                        producătorului
                      </li>
                      <li>
                        Service autorizat pentru toate mărcile comercializate
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Retururi:
                    </h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>
                        Drept de retur în 14 zile pentru produsele nefolosite
                      </li>
                      <li>
                        Produsele returate trebuie să fie în ambalajul original
                      </li>
                      <li>
                        Costurile de transport pentru retur sunt suportate de
                        client
                      </li>
                      <li>Excepții: produse personalizate sau deteriorate</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Proprietatea intelectuală */}
            <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Proprietatea intelectuală
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Întregul conținut al site-ului AgroPeti (texte, imagini,
                  logo-uri, design) este protejat de drepturile de autor și
                  aparține SC AgroPeti SRL sau partenerilor noștri.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Este interzisă reproducerea fără acordul nostru scris</li>
                  <li>
                    Utilizarea comercială a conținutului este strict interzisă
                  </li>
                  <li>
                    Mărcile și logo-urile sunt proprietatea respectivilor
                    deținători
                  </li>
                </ul>
              </div>
            </section>

            {/* Limitarea răspunderii */}
            <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Limitarea răspunderii
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>SC AgroPeti SRL nu este răspunzătoare pentru:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Întreruperi temporare ale funcționării site-ului</li>
                  <li>Erori tipografice în descrierea produselor</li>
                  <li>Daunele indirecte rezultate din utilizarea produselor</li>
                  <li>
                    Modificările de preț sau disponibilitate între vizitarea
                    site-ului și comandă
                  </li>
                </ul>
                <div className="bg-red-50 p-4 rounded-lg mt-4">
                  <p className="text-red-800 text-sm">
                    <strong>Notă:</strong> Răspunderea noastră este limitată la
                    valoarea produsului achiziționat și nu depășește în nicio
                    situație această sumă.
                  </p>
                </div>
              </div>
            </section>

            {/* Modificarea termenilor */}
            <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Clock className="text-gray-600" size={24} />
                8. Modificarea termenilor
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  AgroPeti își rezervă dreptul de a modifica acești termeni și
                  condiții în orice moment, fără notificare prealabilă.
                  Modificările intră în vigoare imediat după publicarea pe site.
                </p>
                <p>
                  Continuarea utilizării site-ului după modificări constituie
                  acceptarea noilor termeni.
                </p>
              </div>
            </section>

            {/* Legea aplicabilă */}
            <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Legea aplicabilă și jurisdicția
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Prezentii termeni și condiții sunt guvernați de legea română.
                  Orice dispută va fi rezolvată pe cale amiabilă, iar în caz
                  contrar, de către instanțele competente din România.
                </p>
                <p>
                  Pentru orice întrebări sau clarificări privind acești termeni,
                  ne puteți contacta la numerele de telefon indicate mai sus.
                </p>
              </div>
            </section>
          </div>

          {/* Contact footer */}
          <div className="bg-green-600 text-white rounded-xl p-6 mt-8">
            <h3 className="text-lg font-bold mb-4">Aveți întrebări?</h3>
            <p className="mb-4">
              Dacă aveți nelămuriri privind termenii și condițiile noastre, nu
              ezitați să ne contactați.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="tel:0740123456"
                className="flex items-center gap-2 bg-white text-green-800 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors"
              >
                <Phone size={18} />
                0740 123 456
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 bg-transparent border-2 border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-green-800 transition-colors"
              >
                <Mail size={18} />
                Trimite mesaj
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
