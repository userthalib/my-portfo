"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../data/translations";

type Theme = "dark" | "light";
type Language = "en" | "id";

interface AppContextProps {
  theme: Theme;
  language: Language;
  toggleTheme: () => void;
  toggleLanguage: () => void;
  t: (key: string) => any;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

/**
 * AppProvider Component
 * 
 * Provides global state management for:
 * 1. Theme Configuration: Toggles HTML element classes and local storage states.
 * 2. Locale Translations: Manages translations across EN and ID locales.
 */
export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [language, setLanguage] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  // Sync state with localStorage on mount (hydration safety check)
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as Theme;
    const savedLang = localStorage.getItem("portfolio-lang") as Language;

    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "light") {
        document.documentElement.classList.add("light");
      }
    } else {
      // Default theme is dark, make sure light is not present
      document.documentElement.classList.remove("light");
    }

    if (savedLang) {
      setLanguage(savedLang);
    }

    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);

    if (nextTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  };

  const toggleLanguage = () => {
    const nextLang = language === "en" ? "id" : "en";
    setLanguage(nextLang);
    localStorage.setItem("portfolio-lang", nextLang);
  };

  /**
   * Translates a dot-notated dictionary path into a string or node structure.
   * e.g., t("hero.description")
   */
  const t = (key: string): any => {
    const keys = key.split(".");
    let current: any = translations[language];
    for (const k of keys) {
      if (current && current[k] !== undefined) {
        current = current[k];
      } else {
        // Fallback to English dictionary if key is not found in local dict
        let engFallback: any = translations["en"];
        for (const fk of keys) {
          if (engFallback && engFallback[fk] !== undefined) {
            engFallback = engFallback[fk];
          } else {
            return key; // return raw path if both fail
          }
        }
        return engFallback;
      }
    }
    return current;
  };

  // Prevent SSR flickering before initial client mount hydration completes
  const value = {
    theme: mounted ? theme : "dark",
    language: mounted ? language : "en",
    toggleTheme,
    toggleLanguage,
    t,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

/**
 * Custom Hook to access AppContext values.
 */
export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
