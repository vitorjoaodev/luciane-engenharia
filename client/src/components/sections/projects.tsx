import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/hooks/use-translation";
import { motion } from "framer-motion";

export function Projects() {
  const { t } = useTranslation();

  const featuredProjects = [
    {
      key: "featured1",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      area: "15.000m²",
      year: "2023",
    },
    {
      key: "featured2",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      area: "25.000m²",
      year: "2024",
    },
  ];

  const projects = [
    {
      key: "project1",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      area: "8.000m²",
      year: "2023",
    },
    {
      key: "project2",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      area: "12.000m²",
      year: "2022",
    },
    {
      key: "project3",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      area: "18.000m²",
      year: "2024",
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
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("projects.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {featuredProjects.map((project) => (
            <motion.div key={project.key} variants={itemVariants}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src={project.image}
                  alt={t(`projects.${project.key}.title`)}
                  className="w-full h-64 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-2xl mb-3">
                    {t(`projects.${project.key}.title`)}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    {t(`projects.${project.key}.description`)}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-primary font-semibold">
                      {project.area}
                    </Badge>
                    <span className="text-sm text-gray-500">
                      {t(`projects.${project.key}.status`)}
                    </span>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.key} variants={itemVariants}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src={project.image}
                  alt={t(`projects.${project.key}.title`)}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <CardTitle className="text-lg mb-2">
                    {t(`projects.${project.key}.title`)}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm mb-3">
                    {t(`projects.${project.key}.description`)}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-primary font-semibold">
                      {project.area}
                    </Badge>
                    <span className="text-xs text-gray-500">{project.year}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
