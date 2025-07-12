import { useEffect, useState } from "react";
import Container from "../Container/Container.jsx";
import Settings from "../Settings/Settings.jsx";
import SideCard from "../SideCard/SideCard.jsx";
import { useTheme } from "../../ThemeContext.jsx";
import generateTheme from "../../tools/styleBuilder.js";

export default function MainMenu() {
  const { changeTheme } = useTheme();
  const [parametrs, setParametrs] = useState({
    Style: "classic",
    Category: "fashion",
    Audience: "youth",
    Typography: "fourthFont",
    Icon: "thirdIcons",
  });
  const changeLocalThemeHandler = () => {
    const { Style, Audience, Category, Icon, Typography } = parametrs;
    return generateTheme(Style, Category, Audience, Typography, Icon);
  };

  const [localTheme, setLocalTheme] = useState(changeLocalThemeHandler());

  const changeThemeHandler = () => {
    const { Style, Audience, Category, Icon, Typography } = parametrs;

    changeTheme(Style, Category, Audience, Typography, Icon);
  };

  useEffect(() => {
    setLocalTheme(changeLocalThemeHandler());
  }, [parametrs]);

  return (
    <div class="container max-w-[1024px] mx-auto px-4 lg:px-8 grid grid-cols-2 grid-cols-[1fr_2fr] gap-x-6 justify-start">
      <Settings
        changeThemeHandler={changeThemeHandler}
        parametrs={parametrs}
        setParametrs={setParametrs}
      />
      <SideCard
        localTheme={localTheme}
        setParametrs={setParametrs}
        parametrs={parametrs}
      />
    </div>
  );
}
