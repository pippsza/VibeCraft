import { useTheme } from "../../ThemeContext.jsx";
import Dropdown from "../DropDownElement/DropDownElement.jsx";

export default function Settings() {
  const { theme, changeTheme } = useTheme();
  const {
    typography,
    styleUtils: {
      borderRadius,
      borderWidth,
      boxShadow,
      hoverShadow,
      transition,
    },
  } = theme;

  return (
    <div
      style={{ fontFamily: typography }}
      className={`w-full h-full bg-white px-[24px] py-[32px] flex flex-col gap-[42px] ${borderWidth} ${borderRadius}`}
    >
      <h3 className="font-semibold text-[18px] ">Brand Parameters</h3>
      <div>
        <Dropdown type={"style"} />
      </div>
      <button className="hover:cursor-pointer h-[40px] text-[#f9f9f9] bg-[#121212] ">
        Generate Branding
      </button>
    </div>
  );
}
