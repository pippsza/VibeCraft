import { useTheme } from "../../ThemeContext.jsx";
import DropDownBox from "../DropDownBox/DropDownBox.jsx";

export default function Settings({
  changeThemeHandler,
  parametrs,
  setParametrs,
}) {
  const { theme } = useTheme();
  const {
    typography,
    styleUtils: { borderRadius, borderWidth },
  } = theme;

  return (
    <div
      style={{ fontFamily: typography }}
      className={`w-full flex flex-col gap-4 px-2 py-2 mb-2 h-full bg-white font-medium ${borderWidth} ${borderRadius} lg:w-[379px] lg:px-[24px] lg:py-[32px] lg:gap-[42px] lg:mb-0`}
    >
      <h3 className="font-semibold text-[18px] tracking-[-0.02em]">
        Brand Parameters
      </h3>
      <DropDownBox parametrs={parametrs} setParametrs={setParametrs} />
      <button
        onClick={changeThemeHandler}
        className="rounded-[10px] hover:cursor-pointer h-[40px] text-[#f9f9f9] bg-[#121212] hover:bg-[#767676] transition"
      >
        Generate Branding
      </button>
    </div>
  );
}
