import { useTheme } from "../../ThemeContext.jsx";

export default function Navlist() {
  const { theme, changeTheme } = useTheme();
  const {
    typography,
    background,
    palette,
    styleUtils: {
      borderWidth,
      borderRadius,
      boxShadow,
      focusRing,
      hoverShadow,
      transition,
    },
  } = theme;
  // console.log(
  //   typography,
  //   background,
  //   palette,
  //   borderWidth,
  //   borderRadius,
  //   boxShadow,
  //   focusRing,
  //   hoverShadow,
  //   transition
  // );
  return (
    <div className="">
      <ul
        style={{ fontFamily: typography }}
        className="  flex gap-[48px] items-center justify-center text-[18px]"
      >
        <li>
          <a
            className="relative after:absolute after:bottom-0 after:w-[100%]
            after:h-[1px] after:bg-black after:left-0 after:content-['']"
            href=""
          >
            Home
          </a>
        </li>
        <li>
          <div className="flex gap-[28px]">
            <a href="" className="hover:text-[#767676] transition">
              Templates
            </a>
            <a href="" className="hover:text-[#767676] transition">
              Explore
            </a>
          </div>
        </li>

        <li>
          <a href="" className="hover:text-[#767676] transition">
            About Us
          </a>
        </li>
      </ul>
    </div>
  );
}
