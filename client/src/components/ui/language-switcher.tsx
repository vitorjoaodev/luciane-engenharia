import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

export function LanguageSwitcher() {
  const { language, toggleLanguage } = useTranslation();

  return (
    <Button
      onClick={toggleLanguage}
      variant="default"
      size="sm"
      className="flex items-center gap-2"
    >
      <Globe className="h-4 w-4" />
      {language.toUpperCase()}
    </Button>
  );
}
