import Container from "../Container/Container.jsx";
import Settings from "../Settings/Settings.jsx";
import SideCard from "../SideCard/SideCard.jsx";

export default function MainMenu() {
  return (
    <Container style="h-[703px] grid gap-[18px] grid-cols-2 grid-cols-[380px_1fr] bg-red-500 ">
      <Settings />
      <SideCard />
    </Container>
  );
}
