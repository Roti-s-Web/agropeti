import { Leaf } from "lucide-react";
export default function Hero() {
  return (
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
            noastră pentru agricultură se reflectă în fiecare produs și serviciu
            oferit.
          </p>
        </div>
      </div>
    </section>
  );
}
