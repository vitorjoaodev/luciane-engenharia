import { useTranslation } from "@/hooks/use-translation";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";


export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/logo-luciane.png" 
                alt="Luciane Rodrigues Engenharia & Arquitetura" 
                className="h-10 w-auto mr-3 filter invert"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/logo-luciane.svg";
                }}
              />
              <div>
                <h3 className="text-lg font-bold">Luciane Rodrigues</h3>
                <p className="text-gray-300">Engenharia & Arquitetura</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/104625924/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.services")}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("services.civil.title")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("services.architecture.title")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("services.industrial.title")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("services.consulting.title")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:administracao@lucianeengenharia.com" className="hover:text-white transition-colors">
                  administracao@lucianeengenharia.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>(11) 3917-0292</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Av. Imperatriz Leopoldina, 845 - Vila Leopoldina, São Paulo - SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Luciane Rodrigues Engenharia & Arquitetura. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
