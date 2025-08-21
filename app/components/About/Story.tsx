import { Target, Heart, Award } from "lucide-react";

export default function Story() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Povestea noastră
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                AgroPeti a început în 2008 ca o mică afacere de familie, condusă
                de pasiunea pentru agricultură și dorința de a ajuta fermierii
                români să își modernizeze exploatațiile agricole.
              </p>
              <p>
                De atunci, am crescut constant, construind relații solide cu
                producători de renume mondial și dezvoltând o expertiză profundă
                în domeniul echipamentelor agricole.
              </p>
              <p>
                Astăzi, suntem mândri să servim peste 5000 de clienți în toată
                România, de la fermieri mici la exploatații agricole mari,
                oferind soluții personalizate pentru fiecare nevoie.
              </p>
              <p>
                Misiunea noastră rămâne aceeași: să oferim produse de calitate
                superioară, consiliere expertă și servicii de încredere care să
                contribuie la succesul agricultorilor români.
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
                recunoscuți pentru inovație, calitate și servicii excepționale.
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <Heart className="text-yellow-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-yellow-800">Valorile</h3>
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
  );
}
