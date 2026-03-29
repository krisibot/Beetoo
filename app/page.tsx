import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import CaseStudies from "@/components/CaseStudies";
import ImageShowcase from "@/components/ImageShowcase";
import BrandedProduct from "@/components/BrandedProduct";
import Pricing from "@/components/Pricing";
import Timeline from "@/components/Timeline";
import EarlyAccess from "@/components/EarlyAccess";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <ImageShowcase />
      <BrandedProduct />
      <HowItWorks />
      <CaseStudies />
      <Pricing />
      <Timeline />
      <EarlyAccess />
      <Footer />
    </main>
  );
}
