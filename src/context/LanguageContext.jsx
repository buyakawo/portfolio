import { createContext, useContext, useState } from "react";
import zh from "../locales/zh.json";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // ← read from localStorage on first load
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  const isZh = language === "zh";

  const t = (key) => {
    const keys = key.split(".");
    let result = zh;
    for (const k of keys) {
      result = result?.[k];
    }
    return result || key;
  };

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === "en" ? "zh" : "en";
      localStorage.setItem("language", next); // ← save on toggle
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isZh }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);