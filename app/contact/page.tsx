import { Phone, Mail, MapPin, Clock, MessageCircle, Users } from "lucide-react";

export default function Contact() {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ia legătura cu noi
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Suntem aici să te ajutăm cu toate întrebările legate de produsele
            agricole. Contactează-ne prin oricare dintre metodele de mai jos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Informații de contact
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Telefon
                    </h3>
                    <p className="text-gray-600 mb-1">
                      Pentru comenzi și informații:
                    </p>
                    <a
                      href="tel:0740123456"
                      className="text-green-600 font-semibold text-lg hover:text-green-700"
                    >
                      0740 123 456
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Mail className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600 mb-1">
                      Pentru întrebări generale:
                    </p>
                    <a
                      href="mailto:contact@agropeti.ro"
                      className="text-green-600 font-semibold hover:text-green-700"
                    >
                      contact@agropeti.ro
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <MapPin className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Adresa</h3>
                    <p className="text-gray-600">
                      Str. Agricolă Nr. 123
                      <br />
                      București, România
                      <br />
                      Cod poștal: 123456
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Clock className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Program de lucru
                    </h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Luni - Vineri: 8:00 - 18:00</p>
                      <p>Sâmbătă: 9:00 - 15:00</p>
                      <p>Duminică: Închis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-green-600 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Comandă prin telefon</h3>
              <p className="text-green-100 mb-4">
                Pentru o experiență mai rapidă, sunați direct la numărul nostru
                de comenzi:
              </p>
              <div className="flex items-center gap-3 text-lg font-semibold">
                <Phone size={20} />
                <span>0740 123 456</span>
              </div>
              <p className="text-green-200 text-sm mt-2">
                Echipa noastră vă va ajuta să găsiți produsele potrivite și să
                plasați comanda în câteva minute.
              </p>
            </div>
          </div>

          {/* Map & Additional Info */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=46.667500448101,22.349721468451925&hl=en&z=16&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locația AgroPeti în Beiuș"
              ></iframe>
            </div>

            {/* FAQ Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Întrebări frecvente
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Cum plasez o comandă?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Sunați la 0740 123 456 sau trimiteți un email la
                    contact@agropeti.ro cu produsele dorite.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Care sunt modalitățile de plată?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Acceptăm plata ramburs, transfer bancar sau numerar la
                    ridicarea din depozit.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Cât durează livrarea?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Livrările se fac în 2-5 zile lucrătoare, în funcție de
                    destinație și disponibilitatea produselor.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Oferiți garanție pentru produse?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Da, toate produsele beneficiază de garanție conform
                    specificațiilor producătorului.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <Users size={24} />
                De ce AgroPeti?
              </h3>

              <ul className="space-y-3 text-blue-800">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                  <span className="text-sm">
                    Peste 15 ani de experiență în domeniul agricol
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                  <span className="text-sm">
                    Produse de calitate superioară la prețuri competitive
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                  <span className="text-sm">
                    Consiliere tehnică specializată gratuită
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                  <span className="text-sm">
                    Livrări rapide în toată România
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                  <span className="text-sm">Suport post-vânzare dedicat</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-white p-8 rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Pregătit să plasezi o comandă?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Echipa noastră de specialiști este gata să te ajute să găsești
            produsele potrivite pentru nevoile tale agricole.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0740123456"
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Sună acum: 0740 123 456
            </a>
            <a
              href="mailto:contact@agropeti.ro"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              Trimite email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
