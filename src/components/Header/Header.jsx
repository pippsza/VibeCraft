import Container from "../Container/Container.jsx";
import Icons from "../Icons/Icons.jsx";
import Logo from "../Logo/Logo.jsx";
import Navlist from "../Navlist/Navlist.jsx";

export default function Header() {
  return (
    <header className="flex justify-center py-12 ">
      <Container style="flex justify-between">
        <Logo />
        <Navlist />
        <Icons />
      </Container>
    </header>
  );
}
