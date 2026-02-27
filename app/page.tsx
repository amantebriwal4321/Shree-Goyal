import Hero from "@/components/sections/Hero";
import ProductCategories from "@/components/sections/ProductCategories";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Leadership from "@/components/sections/Leadership";
import Reviews from "@/components/sections/Reviews";
import CallToAction from "@/components/sections/CallToAction";
import StoreGallery from "@/components/sections/StoreGallery";
import Location from "@/components/sections/Location";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Leadership />
      <StoreGallery />
      <ProductCategories />
      <Location />
      <Reviews />
      <CallToAction />
      <Footer />
    </>
  );
}
