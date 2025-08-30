import React from "react";
import { X, Phone, Mail, Clock, MapPin, MessageCircle } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  productName,
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Contactează-ne</h2>
            {productName && (
              <p className="text-sm text-gray-600 mt-1">
                Pentru: {productName}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Metodele noastre de contact
              </h3>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-full flex-shrink-0">
                  <Phone className="text-green-600" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Sună-ne pentru a plasa comanda
                  </p>
                  <a
                    href="tel:0740123456"
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    <Phone size={16} />
                    0740 123 456
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-full flex-shrink-0">
                  <MessageCircle className="text-green-600" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Trimite-ne un mesaj rapid
                  </p>
                  <a
                    href="https://wa.me/40740123456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    <MessageCircle size={16} />
                    Mesaj WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-full flex-shrink-0">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Trimite-ne un email cu întrebările tale
                  </p>
                  <a
                    href="mailto:contact@example.com"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    <Mail size={16} />
                    contact@example.com
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Informații despre noi
              </h3>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-gray-600" size={20} />
                  <h4 className="font-semibold text-gray-900">
                    Program de lucru
                  </h4>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Luni - Vineri:</span>
                    <span className="font-medium">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sâmbătă:</span>
                    <span className="font-medium">09:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duminică:</span>
                    <span className="font-medium text-red-600">Închis</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-gray-600" size={20} />
                  <h4 className="font-semibold text-gray-900">
                    Locația noastră
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  Strada Exemplu nr. 123
                  <br />
                  Oradea, Bihor
                  <br />
                  România
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="font-semibold text-green-800 mb-3">
                  De ce să ne alegi?
                </h4>
                <ul className="space-y-2 text-sm text-green-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Consiliere gratuită și profesională</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Livrare rapidă în 2-3 zile lucrătoare</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Garanție extinsă pentru toate produsele</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Prețuri competitive și reduceri speciale</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
