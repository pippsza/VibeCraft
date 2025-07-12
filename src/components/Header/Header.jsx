import Icons from "../Icons/Icons.jsx";
import Logo from "../Logo/Logo.jsx";
import Navlist from "../Navlist/Navlist.jsx";

export default function Header() {
  return (
    <header className="container px-4 lg:px-8 mx-auto flex flex-col md:flex-row gap-5 items-center justify-between py-4 bg-transparent lg:py-12">
      <Logo />
      <Navlist />
      <Icons />
    </header>
  );
}
