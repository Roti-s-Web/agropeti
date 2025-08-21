import Hero from "../components/About/Hero";
import Story from "../components/About/Story";
import Stats from "../components/About/Stats";
import dynamic from "next/dynamic";

const WhyChooseUs = dynamic(() => import("../components/About/WhyChooseUs"));
const Team = dynamic(() => import("../components/About/Team"));
const CTA = dynamic(() => import("../components/About/CTA"));

export default function About() {
  return (
    <>
      <Hero />
      <Story />
      <Stats />
      <WhyChooseUs />
      <Team />
      <CTA />
    </>
  );
}
