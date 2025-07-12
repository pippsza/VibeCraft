import { useTheme } from "../../ThemeContext.jsx";

export default function Navlist() {
  const { theme } = useTheme();
  const { typography } = theme;
  return (
    <nav>
      <ul
        style={{ fontFamily: typography }}
        className="flex gap-4 items-center justify-center  text-2xl sm:text-base
        lg:text-lg lg:gap-12 lg:text-5"
      >
        <li>
          <a
            className="relative after:absolute after:bottom-0 after:w-full after:h-px after:bg-black after:left-0 after:content-['']"
            href=""
          >
            Home
          </a>
        </li>

        <li>
          <a href="" className="hover:text-[#767676] transition">
            Templates
          </a>
        </li>
        <li className="hidden sm:block">
          <a href="" className="hover:text-[#767676] transition ">
            Explore
          </a>
        </li>

        <li className="hidden sm:block">
          <a href="" className="hover:text-[#767676] transition">
            About Us
          </a>
        </li>
      </ul>
    </nav>
  );
}
