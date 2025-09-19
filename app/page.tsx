import Hero from "./components/Home/Hero";
import Featured from "./components/Home/Featured";
import About from "./components/Home/About";
import CTA from "./components/Home/CTA";
import { Product } from "@/types/types";
import { getFeaturedProducts } from "../lib/utils/getFeaturedProducts";

export default async function Home() {
  const featuredProducts: Product[] = await getFeaturedProducts();

  return (
    <>
      <Hero />
      <Featured featuredProducts={featuredProducts} />
      <About />
      <CTA />
    </>
  );
}
