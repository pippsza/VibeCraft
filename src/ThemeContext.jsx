import { createContext, useContext, useState, useEffect } from "react";
import generateTheme from "./tools/styleBuilder.js";
import toast from "react-hot-toast";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const localStorageTheme = "vibecraft_theme";
  const getInitialTheme = () => {
    try {
      const saved = localStorage.getItem(localStorageTheme);
      if (saved) {
        return JSON.parse(saved);
      }
      return generateTheme(
        "modern",
        "fintech",
        "youth",
        "firstFont",
        "firstIcons"
      );
    } catch (error) {
      console.error("Error loading theme from storage:", error);
      return generateTheme(
        "playful",
        "fintech",
        "adults",
        "firstFont",
        "firstIcons"
      );
    }
  };

  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    try {
      localStorage.setItem(localStorageTheme, JSON.stringify(theme));
    } catch (error) {
      console.error("Error saving theme to storage:", error);
    }
  }, [theme]);

  const changeTheme = (
    styleKey,
    categoryKey,
    audienceKey,
    typographyKey,
    iconKey
  ) => {
    try {
      const newTheme = generateTheme(
        styleKey,
        categoryKey,
        audienceKey,
        typographyKey,
        iconKey
      );
      setTheme(newTheme);
    } catch (error) {
      toast.error("Error changing theme:", error);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
