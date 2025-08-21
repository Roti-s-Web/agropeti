import Hero from "./components/Home/Hero";
import Featured from "./components/Home/Featured";
import dynamic from "next/dynamic";
import { Product } from "@/types/types";
import { getFeaturedProducts } from "../lib/getFeaturedProducts";

const About = dynamic(() => import("./components/Home/About"));
const CTA = dynamic(() => import("./components/Home/CTA"));

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
