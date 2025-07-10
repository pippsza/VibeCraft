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
    Audience: "professionals",
    Typography: "fourthFont",
    Icon: "thirdIcons",
  });
  const changeLocalThemeHandler = () => {
    const { Style, Audience, Category, Icon, Typography } = parametrs;
    return generateTheme(Style, Category, Audience, Typography, Icon);
  };

  const [localTheme, setLocalTheme] = useState(changeLocalThemeHandler());

  console.log(localTheme, "localtheme");

  const changeThemeHandler = () => {
    const { Style, Audience, Category, Icon, Typography } = parametrs;

    changeTheme(Style, Category, Audience, Typography, Icon);
  };

  useEffect(() => {
    setLocalTheme(changeLocalThemeHandler());
  }, [parametrs]);

  return (
    <Container style="h-[703px] grid gap-[18px] grid-cols-2 grid-cols-[380px_1fr] ">
      <Settings
        changeThemeHandler={changeThemeHandler}
        parametrs={parametrs}
        setParametrs={setParametrs}
      />
      <SideCard localTheme={localTheme} setParametrs={setParametrs} />
    </Container>
  );
}
