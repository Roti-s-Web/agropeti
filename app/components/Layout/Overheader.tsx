import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export const Overheader = () => {
  const phone = "0740 123 456";
  const email = "contact@agropeti.ro";
  const address = "Str. Agricolă Nr. 123, București";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <div className="bg-green-800 text-white py-2 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} aria-hidden />
              <Link
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white/40 rounded-sm transition"
                aria-label={`Sună la ${phone}`}
              >
                {phone}
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={14} aria-hidden />
              <Link
                href={`mailto:${email}`}
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white/40 rounded-sm transition"
                aria-label={`Trimite email la ${email}`}
              >
                {email}
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={14} aria-hidden />
            <Link
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-white/40 rounded-sm transition"
              aria-label={`Deschide ${address} în Google Maps`}
            >
              {address}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
