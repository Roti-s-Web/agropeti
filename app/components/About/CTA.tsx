import Link from "next/link";
export default function CTA() {
  return (
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
          <Link
            href="/contact"
            className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold cursor-pointer"
          >
            Solicită consultanță gratuită
          </Link>
          <Link
            href="/produse"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-green-600 transition-colors font-semibold cursor-pointer"
          >
            Vezi produsele noastre
          </Link>
        </div>
      </div>
    </section>
  );
}
