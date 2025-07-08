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
    <section id="services" className="py-20 bg-gray-50">
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
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-2">
                      {t(`services.${service.key}.title`)}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {t(`services.${service.key}.description`)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {(t(`services.${service.key}.features`) as string[]).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
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
