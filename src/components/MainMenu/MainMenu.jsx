import { useEffect, useState } from "react";
import Container from "../Container/Container.jsx";
import Settings from "../Settings/Settings.jsx";
import SideCard from "../SideCard/SideCard.jsx";
import { useTheme } from "../../ThemeContext.jsx";

export default function MainMenu() {
  const { theme, changeTheme } = useTheme();
  const [parametrs, setParametrs] = useState({
    Style: "classic",
    Category: "fashion",
    Audience: "professionals",
    Typography: "fourthFont",
    Icon: "thirdIcons",
  });
  const changeThemeHandler = () => {
    const { Style, Audience, Category, Icon, Typography } = parametrs;
    changeTheme(Style, Category, Audience, Typography, Icon);
  };
  useEffect(() => {
    changeThemeHandler();
    console.log("PARAMETRS ARE:", parametrs);
  }, [parametrs]);

  return (
    <Container style="h-[703px] grid gap-[18px] grid-cols-2 grid-cols-[380px_1fr] bg-red-500 ">
      <Settings parametrs={parametrs} setParametrs={setParametrs} />
      <SideCard />
    </Container>
  );
}
