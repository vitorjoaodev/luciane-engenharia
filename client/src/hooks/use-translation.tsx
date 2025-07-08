import { useState, useEffect } from "react";
import { translations } from "@/lib/translations";

export type Language = "pt" | "en";

export function useTranslation() {
  const [language, setLanguage] = useState<Language>("pt");

  useEffect(() => {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "pt" || savedLanguage === "en")) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "pt" ? "en" : "pt";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const t = (key: string) => {
    const keys = key.split(".");
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return {
    language,
    toggleLanguage,
    t,
  };
}
