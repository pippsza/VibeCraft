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
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Templates</a>
        </li>
        <li>
          <a href="">Explore</a>
        </li>
        <li>
          <a href="">About Us</a>
        </li>
      </ul>
    </div>
  );
}
