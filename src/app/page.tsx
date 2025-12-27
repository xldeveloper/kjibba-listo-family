import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AiShowcase from "@/components/AiShowcase";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
// import FoundersPass from "@/components/FoundersPass";
// <FoundersPass />
// Note: Component file missing, commented out to unblock build
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <AiShowcase />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      {/* <FoundersPass /> */}
      <BlogPreview />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}

