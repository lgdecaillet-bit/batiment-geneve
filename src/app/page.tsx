import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CTABand from "@/components/CTABand";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <About />
      <Portfolio />
      <Testimonials />
      <CTABand />
      <ContactBar />
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
