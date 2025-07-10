import { createContext, useContext, useState } from "react";
import generateTheme from "./tools/styleBuilder.js";
import toast from "react-hot-toast";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    try {
      return generateTheme(
        "playful",
        "fintech",
        "adults",
        "firstFont",
        "firstIcons"
      );
    } catch (error) {
      console.error("Error generating theme:", error);
      return null;
    }
  });

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
