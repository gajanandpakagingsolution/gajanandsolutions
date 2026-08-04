import React from "react";
import TopBar from "@/TopBar";
import Navigation from "@/Navigation";
import HeroSection from "@/HeroSection";
import UspSection from "@/UspSection";
import ProductsSection from "@/ProductsSection";
import IndustriesSection from "@/IndustriesSection";
import WorkingProcess from "@/WorkingProcess";
import Testimonial from "@/Testimonial";
import GallerySection from "@/GallerySection";
import AboutUsSection from "@/AboutUsSection";
import ContactSection from "@/ContactSection";
import CtaBox from "@/CtaBox";
import Footer from "@/Footer";
import FloatingButtons from "@/FloatingButtons";

const IndexPage = () => {
  return (
    <div id="top" className="bg-white font-sans">
      <TopBar />
      <Navigation />
      <main>
      <HeroSection />
      <UspSection />
      <ProductsSection />
      <IndustriesSection />
      <WorkingProcess />
      <Testimonial />
      <GallerySection />
      <AboutUsSection />
      <ContactSection />
      <CtaBox />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default IndexPage;
