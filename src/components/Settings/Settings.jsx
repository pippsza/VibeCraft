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
      className={`w-full flex flex-col gap-2 px-2 py-2 mb-2 h-full bg-white font-medium ${borderWidth} ${borderRadius} lg:w-[379px] lg:px-[24px] lg:py-[32px] lg:gap-[42px]`}
    >
      <h3 className="font-semibold text-base tracking-[-0.01em] lg:text-[18px] lg:tracking-[-0.02em]">
        Brand Parameters
      </h3>
      <DropDownBox parametrs={parametrs} setParametrs={setParametrs} />
      <button
        onClick={changeThemeHandler}
        className="rounded-[8px] hover:cursor-pointer h-[36px] text-[#f9f9f9] bg-[#121212] hover:bg-[#767676] transition text-sm lg:rounded-[10px] lg:h-[40px] lg:text-base"
      >
        Generate Branding
      </button>
    </div>
  );
}
