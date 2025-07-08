import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";
import { motion } from "framer-motion";

export function Hero() {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
        }}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          {t("hero.title")}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-white mb-8"
        >
          {t("hero.subtitle")}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            variant="secondary"
            onClick={() => scrollToSection("projects")}
            className="text-primary hover:text-primary-dark"
          >
            {t("hero.cta1")}
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
          >
            {t("hero.cta2")}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
