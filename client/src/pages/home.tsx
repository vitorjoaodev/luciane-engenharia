import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { PartnersGallery } from "@/components/sections/partners-gallery";
import { Partners } from "@/components/sections/partners";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <PartnersGallery />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
