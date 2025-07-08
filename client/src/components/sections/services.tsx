import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "@/hooks/use-translation";
import { motion } from "framer-motion";
import { 
  HardHat, 
  Compass, 
  Store, 
  Factory, 
  ClipboardCheck, 
  Workflow,
  CheckCircle
} from "lucide-react";

export function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: HardHat,
      key: "civil",
      color: "bg-blue-500",
    },
    {
      icon: Compass,
      key: "architecture",
      color: "bg-green-500",
    },
    {
      icon: Store,
      key: "franchises",
      color: "bg-purple-500",
    },
    {
      icon: Factory,
      key: "industrial",
      color: "bg-orange-500",
    },
    {
      icon: ClipboardCheck,
      key: "consulting",
      color: "bg-red-500",
    },
    {
      icon: Workflow,
      key: "management",
      color: "bg-indigo-500",
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
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("services.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("services.subtitle")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.key} variants={itemVariants}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white border-0 shadow-lg relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardHeader className="text-center pb-2 relative z-10">
                    <div className={`w-20 h-20 ${service.color} rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-4 text-gray-800 group-hover:text-primary transition-colors duration-300">
                      {t(`services.${service.key}.title`)}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {t(`services.${service.key}.description`)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4 relative z-10">
                    <ul className="space-y-3">
                      {(t(`services.${service.key}.features`) as string[]).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                          <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <div className="text-center">
                        <span className="text-xs text-gray-500 group-hover:text-primary transition-colors duration-300 font-medium">
                          Saiba mais
                        </span>
                      </div>
                    </div>
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
