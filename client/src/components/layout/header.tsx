import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { useTranslation } from "@/hooks/use-translation";
import { Menu } from "lucide-react";


export function Header() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const NavigationItems = () => (
    <>
      <button
        onClick={() => scrollToSection("hero")}
        className="text-gray-700 hover:text-primary transition-colors"
      >
        {t("nav.home")}
      </button>
      <button
        onClick={() => scrollToSection("services")}
        className="text-gray-700 hover:text-primary transition-colors"
      >
        {t("nav.services")}
      </button>

      <button
        onClick={() => scrollToSection("partners")}
        className="text-gray-700 hover:text-primary transition-colors"
      >
        {t("nav.partners")}
      </button>
      <button
        onClick={() => scrollToSection("contact")}
        className="text-gray-700 hover:text-primary transition-colors"
      >
        {t("nav.contact")}
      </button>
    </>
  );

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img 
              src="/logo-luciane.png"
              alt="Luciane Rodrigues Engenharia & Arquitetura" 
              className="h-12 w-auto mr-3"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/logo-luciane.svg";
              }}
            />
            <div>
              <h1 className="text-xl font-bold text-primary">Luciane Rodrigues</h1>
              <p className="text-sm text-gray-600">Engenharia & Arquitetura</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavigationItems />
            <LanguageSwitcher />
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <nav className="flex flex-col space-y-6 mt-8">
                  <NavigationItems />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}