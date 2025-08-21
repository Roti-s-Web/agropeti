import Link from "next/link";
import {
  Leaf,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white p-2 rounded-lg">
                <Leaf className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">AgroPeti</h3>
                <p className="text-xs text-green-200">
                  Soluții agricole premium
                </p>
              </div>
            </div>
            <p className="text-green-200 mb-4">
              Furnizor de încredere pentru echipamente și soluții agricole de
              înaltă calitate. Servim fermierii cu pasiune și dedicare de peste
              15 ani.
            </p>
            <div className="flex gap-3">
              <button
                className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
                title="Facebook"
                name="facebook"
              >
                <Facebook size={20} />
              </button>
              <button
                className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
                title="Instagram"
                name="instagram"
              >
                <Instagram size={20} />
              </button>{" "}
              <button
                className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
                title="Twitter"
                name="twitter"
              >
                <Twitter size={20} />
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Link-uri rapide</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-green-200 hover:text-white transition-colors"
                >
                  Acasă
                </Link>
              </li>
              <li>
                <Link
                  href="/categorii"
                  className="text-green-200 hover:text-white transition-colors"
                >
                  Produse
                </Link>
              </li>
              <li>
                <Link
                  href="/despre"
                  className="text-green-200 hover:text-white transition-colors"
                >
                  Despre noi
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-green-200 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Categorii principale</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#ambalare"
                  className="text-green-200 hover:text-white transition-colors"
                >
                  Ambalare
                </Link>
              </li>
              <li>
                <Link
                  href="/zootehnie"
                  className="text-green-200 hover:text-white transition-colors"
                >
                  Zootehnie
                </Link>
              </li>
              <li>
                <Link
                  href="/jucarii"
                  className="text-green-200 hover:text-white transition-colors"
                >
                  Jucării
                </Link>
              </li>
              <li>
                <Link
                  href="/piese-agricole"
                  className="text-green-200 hover:text-white transition-colors"
                >
                  Piese Agricole
                </Link>
              </li>
              <li>
                <Link
                  href="/piese-plug"
                  className="text-green-200 hover:text-white transition-colors"
                >
                  Piese pentru plug
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-green-300" />
                <span className="text-green-200">0740 123 456</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-green-300" />
                <span className="text-green-200">contact@agropeti.ro</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-green-300 mt-1" />
                <span className="text-green-200">
                  Str. Agricolă Nr. 123
                  <br />
                  București, România
                </span>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Program de lucru</h4>
              <p className="text-green-200 text-sm">
                Luni - Vineri: 8:00 - 18:00
                <br />
                Sâmbătă: 9:00 - 15:00
                <br />
                Duminică: Închis
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-green-200 text-sm">
              © 2025 AgroPeti. Toate drepturile rezervate.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#privacy"
                className="text-green-200 hover:text-white transition-colors"
              >
                Politica de confidențialitate
              </a>
              <a
                href="#terms"
                className="text-green-200 hover:text-white transition-colors"
              >
                Termeni și condiții
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
