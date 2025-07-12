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
      className={` w-full flex flex-col gap-5 px-4 py-4 h-full  font-medium p-8 ${borderWidth} ${borderRadius}`}
    >
      <h3 className="font-semibold text-base lg:text-lg">Brand Parameters</h3>
      <DropDownBox parametrs={parametrs} setParametrs={setParametrs} />
      <button
        onClick={changeThemeHandler}
        className="rounded-2 hover:cursor-pointer h-9 text-[#f9f9f9] bg-[#121212] hover:bg-[#767676] transition text-sm lg:rounded-xl lg:h-11 lg:text-base"
      >
        Generate Branding
      </button>
    </div>
  );
}
