import { useEffect, useState } from "react";
import Container from "../Container/Container.jsx";
import Settings from "../Settings/Settings.jsx";
import SideCard from "../SideCard/SideCard.jsx";
import { useTheme } from "../../ThemeContext.jsx";

export default function MainMenu() {
  const { changeTheme } = useTheme();
  const getInitialKeys = () => {
    const savedKeys = localStorage.getItem("vibecraft_keys");
    if (savedKeys) {
      try {
        const parsed = JSON.parse(savedKeys);
        const { styleKey, categoryKey, audienceKey, typographyKey, iconKey } =
          parsed;
        return {
          Style: styleKey,
          Category: categoryKey,
          Audience: audienceKey,
          Typography: typographyKey,
          Icon: iconKey,
        };
      } catch (e) {
        console.error("parsing errors:", e);
      }
    } else {
      return {
        Style: "classic",
        Category: "fashion",
        Audience: "youth",
        Typography: "fourthFont",
        Icon: "thirdIcons",
      };
    }
  };
  const [parametrs, setParametrs] = useState(getInitialKeys);
  useEffect(() => {
    changeThemeHandler();
  }, [parametrs]);

  const changeThemeHandler = () => {
    const { Style, Audience, Category, Icon, Typography } = parametrs;

    changeTheme(Style, Category, Audience, Typography, Icon);
  };

  return (
    <div className="container max-w-[1024px] mx-auto px-4 lg:px-8 grid mb-30 grid-rows-2 gap-y-6 lg:grid-cols-[1fr_2fr] gap-x-6 justify-center lg:justify-start">
      <Settings parametrs={parametrs} setParametrs={setParametrs} />
      <SideCard setParametrs={setParametrs} parametrs={parametrs} />
    </div>
  );
}
