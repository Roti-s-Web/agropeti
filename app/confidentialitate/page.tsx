import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Phone,
  Mail,
  Shield,
  Lock,
  Eye,
  Database,
  UserCheck,
  Clock,
  AlertTriangle,
  CheckCircle,
  Truck,
  MessageCircle,
  BarChart3,
  Search,
  Edit,
  Trash2,
  Ban,
  Package,
  Pause,
  MapPin,
} from "lucide-react";

export default function Confidentialitate() {
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
          <span className="text-gray-900">Politica de Confidențialitate</span>
        </nav>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Lock className="text-blue-600" size={32} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  Politica de Confidențialitate
                </h1>
                <p className="text-gray-600 mt-2">
                  Actualizată la data de 21 august 2025
                </p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              La <strong>AgroPeti</strong>, respectăm și protejăm
              confidențialitatea datelor personale ale utilizatorilor noștri.
              Această politică explică cum colectăm, folosim și protejăm
              informațiile dvs. personale.
            </p>
          </div>

          <div className="space-y-8">
            {/* Principii generale */}
            <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Shield className="text-green-600" size={24} />
                1. Principiile noastre
              </h2>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="text-green-600" size={20} />
                      <h3 className="font-semibold text-green-800">
                        Transparență
                      </h3>
                    </div>
                    <p className="text-green-700 text-sm">
                      Vă informăm clar despre ce date colectăm și cum le
                      folosim.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Lock className="text-blue-600" size={20} />
                      <h3 className="font-semibold text-blue-800">
                        Securitate
                      </h3>
                    </div>
                    <p className="text-blue-700 text-sm">
                      Implementăm măsuri tehnice pentru protejarea datelor dvs.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <UserCheck className="text-purple-600" size={20} />
                      <h3 className="font-semibold text-purple-800">Control</h3>
                    </div>
                    <p className="text-purple-700 text-sm">
                      Aveți control asupra datelor dvs. și le puteți modifica
                      oricând.
                    </p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Eye className="text-orange-600" size={20} />
                      <h3 className="font-semibold text-orange-800">
                        Minimalism
                      </h3>
                    </div>
                    <p className="text-orange-700 text-sm">
                      Colectăm doar datele strict necesare pentru serviciile
                      noastre.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Datele colectate */}
            <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Database className="text-blue-600" size={24} />
                2. Ce date colectăm
              </h2>
              <div className="space-y-6 text-gray-600">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 font-medium mb-2">
                    <strong>Important:</strong> Colectăm doar datele minime
                    necesare, fără să folosim sisteme de plată online sau
                    autentificare pentru utilizatori.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Date de contact (prin telefon):
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Nume și prenume</li>
                    <li>Număr de telefon</li>
                    <li>Adresa de email (opțional)</li>
                    <li>Adresa de livrare</li>
                    <li>Informații despre produsele dorite</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Date tehnice (automat):
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Adresa IP (pentru funcționarea site-ului)</li>
                    <li>Tipul de browser și dispozitiv</li>
                    <li>Paginile vizitate pe site</li>
                    <li>Timpul petrecut pe site</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">
                    Ce NU colectăm:
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-yellow-700 ml-4">
                    <li>Date bancare sau de plată (nu oferim plăți online)</li>
                    <li>
                      Parole sau conturi utilizator (nu există înregistrare)
                    </li>
                    <li>Date sensibile (religie, orientare politică, etc.)</li>
                    <li>Istoric de navigare din afara site-ului nostru</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cum folosim datele */}
            <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Cum folosim datele dvs.
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Folosim datele personale exclusiv pentru următoarele scopuri
                  legitime:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Phone className="text-green-600" size={16} />
                        <h3 className="font-semibold text-green-800">
                          Procesarea comenzilor
                        </h3>
                      </div>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Confirmarea comenzilor telefonice</li>
                        <li>• Calcularea costurilor de transport</li>
                        <li>• Programarea livrărilor</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Truck className="text-blue-600" size={16} />
                        <h3 className="font-semibold text-blue-800">
                          Livrarea produselor
                        </h3>
                      </div>
                      <ul className="text-blue-700 text-sm space-y-1">
                        <li>• Transmiterea datelor către transportatori</li>
                        <li>• Urmărirea statusului livrării</li>
                        <li>• Confirmarea recepției</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <MessageCircle className="text-purple-600" size={16} />
                        <h3 className="font-semibold text-purple-800">
                          Comunicarea cu clienții
                        </h3>
                      </div>
                      <ul className="text-purple-700 text-sm space-y-1">
                        <li>• Răspunsuri la întrebări</li>
                        <li>• Informații despre produse</li>
                        <li>• Suport tehnic post-vânzare</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <BarChart3 className="text-orange-600" size={16} />
                        <h3 className="font-semibold text-orange-800">
                          Îmbunătățirea serviciilor
                        </h3>
                      </div>
                      <ul className="text-orange-700 text-sm space-y-1">
                        <li>• Analiza preferințelor clienților</li>
                        <li>• Optimizarea site-ului</li>
                        <li>• Dezvoltarea de noi produse</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Partajarea datelor */}
            <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <AlertTriangle className="text-orange-600" size={24} />
                4. Partajarea datelor
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-red-800 font-medium">
                    <strong>Nu vindem, închiriem sau comercializăm</strong>{" "}
                    datele dvs. personale cu terți în scopuri de marketing.
                  </p>
                </div>

                <p>Partajăm datele dvs. doar în situațiile strict necesare:</p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="text-green-600 mt-1" size={16} />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Transportatori autorizați
                      </h3>
                      <p className="text-sm text-gray-600">
                        Pentru livrarea produselor (nume, telefon, adresa de
                        livrare)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="text-green-600 mt-1" size={16} />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Furnizori de servicii IT
                      </h3>
                      <p className="text-sm text-gray-600">
                        Pentru mentenanța și securitatea site-ului (date
                        tehnice)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="text-green-600 mt-1" size={16} />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Autorități competente
                      </h3>
                      <p className="text-sm text-gray-600">
                        Doar în cazul unei cereri legale (conform legislației)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Securitatea datelor */}
            <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Shield className="text-green-600" size={24} />
                5. Securitatea datelor
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Implementăm măsuri tehnice și organizatorice pentru protejarea
                  datelor dvs. personale împotriva accesului neautorizat,
                  pierderii sau divulgării accidentale.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">
                      Măsuri tehnice:
                    </h3>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Certificat SSL pentru criptarea datelor</li>
                      <li>• Servere securizate și actualizate</li>
                      <li>• Backup-uri regulate și securizate</li>
                      <li>• Monitorizare continuă a sistemelor</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">
                      Măsuri organizatorice:
                    </h3>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Acces limitat la datele personale</li>
                      <li>• Formarea echipei în protecția datelor</li>
                      <li>• Proceduri clare de securitate</li>
                      <li>• Auditări periodice de securitate</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-yellow-800 text-sm">
                    <strong>Notă:</strong> Deși implementăm cele mai bune
                    practici de securitate, nicio metodă de transmitere sau
                    stocare electronică nu este 100% sigură. Vă încurajăm să
                    fiți precauți când partajați informații personale.
                  </p>
                </div>
              </div>
            </section>

            {/* Cookie-uri */}
            <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Cookie-uri și tehnologii similare
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Site-ul nostru folosește exclusiv cookie-uri necesare pentru
                  funcționarea corectă. Nu folosim cookie-uri pentru urmărire
                  sau publicitate.
                </p>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">
                    Cookie-uri folosite:
                  </h3>
                  <ul className="text-green-700 text-sm space-y-2">
                    <li>
                      <strong>Cookie-uri de sesiune:</strong> Pentru
                      funcționarea normală a site-ului (se șterg când închideți
                      browser-ul)
                    </li>
                    <li>
                      <strong>Cookie-uri de preferințe:</strong> Pentru a reține
                      setările dvs. (limba, regiunea)
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">
                    Ce NU folosim:
                  </h3>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Cookie-uri de urmărire/tracking</li>
                    <li>• Cookie-uri de publicitate</li>
                    <li>
                      • Cookie-uri de la terți (Google Analytics, Facebook,
                      etc.)
                    </li>
                    <li>• Profilare comportamentală</li>
                  </ul>
                </div>

                <p className="text-sm">
                  Puteți dezactiva cookie-urile din setările browser-ului, dar
                  acest lucru poate afecta funcționarea site-ului.
                </p>
              </div>
            </section>

            {/* Drepturile utilizatorilor */}
            <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <UserCheck className="text-purple-600" size={24} />
                7. Drepturile dvs.
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Conform GDPR și legislației române, aveți următoarele drepturi
                  privind datele dvs. personale:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <Search className="text-blue-600" size={14} />
                        <h3 className="font-semibold text-blue-800 text-sm">
                          Dreptul de acces
                        </h3>
                      </div>
                      <p className="text-blue-700 text-xs mt-1">
                        Să știți ce date avem despre dvs.
                      </p>
                    </div>

                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <Edit className="text-green-600" size={14} />
                        <h3 className="font-semibold text-green-800 text-sm">
                          Dreptul de rectificare
                        </h3>
                      </div>
                      <p className="text-green-700 text-xs mt-1">
                        Să corectați datele inexacte
                      </p>
                    </div>

                    <div className="bg-red-50 p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <Trash2 className="text-red-600" size={14} />
                        <h3 className="font-semibold text-red-800 text-sm">
                          Dreptul de ștergere
                        </h3>
                      </div>
                      <p className="text-red-700 text-xs mt-1">
                        Să solicitați ștergerea datelor
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <Ban className="text-purple-600" size={14} />
                        <h3 className="font-semibold text-purple-800 text-sm">
                          Dreptul de opoziție
                        </h3>
                      </div>
                      <p className="text-purple-700 text-xs mt-1">
                        Să vă opuneți prelucrării
                      </p>
                    </div>

                    <div className="bg-orange-50 p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <Package className="text-orange-600" size={14} />
                        <h3 className="font-semibold text-orange-800 text-sm">
                          Dreptul la portabilitate
                        </h3>
                      </div>
                      <p className="text-orange-700 text-xs mt-1">
                        Să primiți datele în format digital
                      </p>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <Pause className="text-gray-600" size={14} />
                        <h3 className="font-semibold text-gray-800 text-sm">
                          Dreptul de limitare
                        </h3>
                      </div>
                      <p className="text-gray-700 text-xs mt-1">
                        Să restricționați prelucrarea
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">
                    Cum vă exercitați drepturile:
                  </h3>
                  <p className="text-yellow-700 text-sm mb-2">
                    Pentru orice solicitare legată de datele dvs. personale, ne
                    puteți contacta:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="flex items-center gap-1 text-yellow-700 text-sm">
                      <Phone size={14} />
                      <span>Telefon: 0740 123 456</span>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-700 text-sm">
                      <Mail size={14} />
                      <span>Email: contact@agropeti.ro</span>
                    </div>
                  </div>
                  <p className="text-yellow-700 text-xs mt-2">
                    Vom răspunde în maximum 30 de zile la solicitările dvs.
                  </p>
                </div>
              </div>
            </section>

            {/* Păstrarea datelor */}
            <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Clock className="text-blue-600" size={24} />
                8. Cât timp păstrăm datele
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Păstrăm datele dvs. personale doar atât timp cât este necesar
                  pentru îndeplinirea scopurilor pentru care au fost colectate:
                </p>

                <div className="space-y-3">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">
                      Date de comenzi și facturare:
                    </h3>
                    <p className="text-green-700 text-sm">
                      <strong>5 ani</strong> - conform obligațiilor legale de
                      arhivare fiscală
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">
                      Date de contact pentru comunicare:
                    </h3>
                    <p className="text-blue-700 text-sm">
                      <strong>3 ani</strong> - pentru suport post-vânzare și
                      garanții
                    </p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2">
                      Date tehnice (IP, browser):
                    </h3>
                    <p className="text-purple-700 text-sm">
                      <strong>1 an</strong> - pentru securitate și analiză
                      tehnică
                    </p>
                  </div>
                </div>

                <p className="text-sm">
                  După expirarea acestor termene, datele sunt șterse definitiv
                  din sistemele noastre, cu excepția situațiilor în care legea
                  impune păstrarea mai îndelungată.
                </p>
              </div>
            </section>

            {/* Minori */}
            <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Protecția minorilor
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-orange-800 font-medium">
                    Site-ul nostru nu este destinat minorilor sub 16 ani și nu
                    colectăm în mod intenționat date de la aceștia.
                  </p>
                </div>

                <p>
                  Dacă luăm cunoștință că am colectat date personale de la un
                  minor fără consimțământul părintelui/tutorelui, vom șterge
                  aceste informații cât mai curând posibil.
                </p>

                <p>
                  Dacă sunteți părinte și credeți că minorul dvs. ne-a furnizat
                  date personale, vă rugăm să ne contactați imediat.
                </p>
              </div>
            </section>

            {/* Modificări */}
            <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Modificări ale politicii
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Această politică de confidențialitate poate fi actualizată
                  periodic pentru a reflecta modificările în practici sau pentru
                  alte motive operaționale, legale sau de reglementare.
                </p>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Cum vă notificăm:</strong> În cazul modificărilor
                    importante, vă vom informa prin:
                  </p>
                  <ul className="text-blue-700 text-sm mt-2 space-y-1 ml-4">
                    <li>• Publicarea pe site cu evidențierea modificărilor</li>
                    <li>• Notificare prin email (dacă avem adresa dvs.)</li>
                    <li>• Anunț la următorul contact telefonic</li>
                  </ul>
                </div>

                <p className="text-sm">
                  Vă recomandăm să verificați periodic această pagină pentru a
                  fi la curent cu eventualele modificări.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Mail className="text-green-600" size={24} />
                11. Contact pentru protecția datelor
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Pentru orice întrebări, nelămuriri sau solicitări privind
                  această politică de confidențialitate sau prelucrarea datelor
                  dvs. personale:
                </p>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-3">
                    Datele de contact ale operatorului:
                  </h3>
                  <div className="space-y-2 text-green-700">
                    <p>
                      <strong>SC AgroPeti SRL</strong>
                    </p>
                    <div className="flex items-center gap-2">
                      <Phone size={16} />
                      <span>0740 123 456</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={16} />
                      <span>contact@agropeti.ro</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} /> Strada Agricolă nr. 123, Oradea,
                      Bihor, România
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">
                    Dreptul de plângere:
                  </h3>
                  <p className="text-blue-700 text-sm">
                    Dacă considerați că drepturile dvs. au fost încălcate,
                    puteți depune o plângere la Autoritatea Națională de
                    Supraveghere a Prelucrării Datelor cu Caracter Personal
                    (ANSPDCP) - <strong>www.dataprotection.ro</strong>
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="bg-blue-600 text-white rounded-xl p-6 mt-8">
            <h3 className="text-lg font-bold mb-4">
              Aveți întrebări despre confidențialitatea datelor?
            </h3>
            <p className="mb-4">
              Suntem disponibili să vă clarificăm orice aspecte legate de
              protecția și prelucrarea datelor dvs. personale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="tel:0740123456"
                className="flex items-center gap-2 bg-white text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <Phone size={18} />
                0740 123 456
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 bg-transparent border-2 border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-800 transition-colors"
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
