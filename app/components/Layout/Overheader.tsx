import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export const Overheader = () => {
  return (
    <div className="bg-green-800 text-white py-2 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>0740 123 456</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>contact@agropeti.ro</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <span>Str. Agricolă Nr. 123, București</span>
          </div>
        </div>
      </div>
    </div>
  );
};
