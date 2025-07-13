import { useEffect, useState } from "react";
import Container from "./Container.jsx";
import Settings from "./Settings.jsx";
import SideCard from "./SideCard.jsx";
import { useTheme } from "../ThemeContext.jsx";

export default function MainMenu() {
  const {
    changeTheme,
    theme: { palette },
  } = useTheme();
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
    <div className=" relative container max-w-[1024px] mx-auto px-4 lg:px-8 grid mb-30 lg:grid-rows-1 grid-rows-2 gap-y-6 lg:grid-cols-[1fr_2fr] gap-x-6 justify-center lg:justify-start animate-fade-in-up ">
      <Settings parametrs={parametrs} setParametrs={setParametrs} />
      <SideCard setParametrs={setParametrs} parametrs={parametrs} />
      <div className="opacity-20 absolute w-full h-full -z-10">
        <div
          style={{ backgroundColor: palette[0] }}
          className="absolute w-8/12 blur-[200px] top-0 left-0 h-165 rounded-full"
        ></div>
        <div
          style={{ backgroundColor: palette[3] }}
          className="absolute bottom-0 blur-[160px] right-0 w-8/12 h-170 rounded-full"
        ></div>
      </div>
    </div>
  );
}
