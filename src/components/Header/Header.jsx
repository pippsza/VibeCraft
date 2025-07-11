import Container from "../Container/Container.jsx";
import Icons from "../Icons/Icons.jsx";
import Logo from "../Logo/Logo.jsx";
import Navlist from "../Navlist/Navlist.jsx";

export default function Header() {
  return (
    <header className="flex justify-center py-4 bg-transparent lg:py-12">
      <Container style="flex justify-between flex-col gap-[20px] lg:flex-row items-center w-full px-2 lg:w-[1000px] lg:px-0">
        <Logo />
        <Navlist />
        <Icons />
      </Container>
    </header>
  );
}
