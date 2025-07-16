import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/hooks/use-translation";
import { motion } from "framer-motion";
import { Factory, Building, Store, Hospital } from "lucide-react";

export function Partners() {
  const { t } = useTranslation();

  const partnerCategories = [
    {
      key: "industries",
      icon: Factory,
      color: "bg-blue-500",
    },
    {
      key: "contractors",
      icon: Building,
      color: "bg-green-500",
    },
    {
      key: "retail",
      icon: Store,
      color: "bg-purple-500",
    },
    {
      key: "healthcare",
      icon: Hospital,
      color: "bg-red-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="partners" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            {t("partners.title")}
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {t("partners.subtitle")}
          </p>
        </motion.div>

        {/* Featured Partner - Burger King */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <CardContent className="p-12 flex flex-col justify-center">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4 p-2">
                    <img 
                      src="/burger-king-logo.png" 
                      alt="Burger King Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-gray-900">
                      {t("partners.burgerKing.title")}
                    </CardTitle>
                    <Badge variant="secondary" className="bg-yellow-400 text-red-600 font-semibold">
                      {t("partners.burgerKing.badge")}
                    </Badge>
                  </div>
                </div>
                <CardDescription className="text-gray-600 mb-6">
                  {t("partners.burgerKing.description")}
                </CardDescription>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-bold text-primary">50+</div>
                    <div className="text-sm text-gray-600">
                      {t("partners.burgerKing.stats.stores")}
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">5+</div>
                    <div className="text-sm text-gray-600">
                      {t("partners.burgerKing.stats.years")}
                    </div>
                  </div>
                </div>
              </CardContent>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                  alt="Burger King restaurant"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Other Partners */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {partnerCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div key={category.key} variants={itemVariants}>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center hover:bg-white/20 transition-colors duration-300">
                  <CardContent className="p-6">
                    <Icon className="h-12 w-12 text-white mx-auto mb-4" />
                    <CardTitle className="text-white font-semibold mb-2">
                      {t(`partners.categories.${category.key}`)}
                    </CardTitle>
                    <CardDescription className="text-blue-100 text-sm">
                      {t(`partners.categories.${category.key}Desc`)}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
