import { useTheme } from "../../ThemeContext.jsx";
import Icons from "../Icons/Icons.jsx";
import Logo from "../Logo/Logo.jsx";
import Navlist from "../Navlist/Navlist.jsx";

export default function Header() {
  const {
    theme: { palette },
  } = useTheme();
  return (
    <header className=" relative container max-w-[1024px] px-4 lg:px-8 mx-auto flex flex-col md:flex-row gap-5 items-center justify-between py-4 bg-transparent lg:py-12">
      <Logo />
      <Navlist />
      <Icons />
      <div className="opacity-20 absolute w-full h-full -z-10 ">
        <div
          style={{ backgroundColor: palette[0] }}
          className="absolute w-[30%] blur-[200px] top-0 -translate-y-7/10 left-22 h-115 rounded-full -translate-x-1/2 "
        ></div>
        <div
          style={{ backgroundColor: palette[2] }}
          className="absolute w-[50%] blur-[250px] top-0 -translate-y-4/5 left-1/2 -translate-x-3/5 h-[600%] rounded-full"
        ></div>
        <div
          style={{ backgroundColor: palette[1] }}
          className="absolute w-[30%] blur-[200px] top-0 -translate-y-2/3 right-0 h-115 rounded-full "
        ></div>
      </div>
    </header>
  );
}
