import { useTranslation } from "@/hooks/use-translation";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function PartnersGallery() {
  const { t } = useTranslation();

  const partners = [
    {
      name: "Zamloc",
      logo: "/zamloc-logo.jpg",
      description: t("partnersGallery.zamloc.description"),
    },
    {
      name: "Ultragaz",
      logo: "/ultragaz-logo.webp",
      description: t("partnersGallery.ultragaz.description"),
    },
    {
      name: "MRV",
      logo: "/mrv-logo.jpg",
      description: t("partnersGallery.mrv.description"),
    },
    {
      name: "Casa do Construtor",
      logo: "/casa-construtor-logo.jpg",
      description: t("partnersGallery.casaConstrutor.description"),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="partners-gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("partnersGallery.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("partnersGallery.subtitle")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {partners.map((partner, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="aspect-square mb-4 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                    {partner.name}
                  </h3>
                  <p className="text-gray-600 text-center text-sm">
                    {partner.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}