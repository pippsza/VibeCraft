import { useEffect, useState } from "react";
import Container from "../Container/Container.jsx";
import Settings from "../Settings/Settings.jsx";
import SideCard from "../SideCard/SideCard.jsx";
import { useTheme } from "../../ThemeContext.jsx";
import generateTheme from "../../tools/styleBuilder.js";

export default function MainMenu() {
  const { theme, changeTheme } = useTheme();
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
    <div className="w-full flex flex-col gap-2 px-2 mb-8 h-full lg:w-[1034px] lg:h-[703px] lg:px-[20px] lg:mb-[200px] lg:flex-row">
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
