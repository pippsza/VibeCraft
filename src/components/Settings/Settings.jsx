import { useTheme } from "../../ThemeContext.jsx";
import DropDownBox from "../DropDownBox/DropDownBox.jsx";

export default function Settings({ parametrs, setParametrs }) {
  const { theme } = useTheme();
  const {
    typography,
    styleUtils: { borderRadius, borderWidth },
  } = theme;

  return (
    <div
      style={{ fontFamily: typography }}
      className={`w-full h-full bg-white px-[24px] py-[32px] flex flex-col gap-[42px] ${borderWidth} ${borderRadius}`}
    >
      <h3 className="font-semibold text-[18px] ">Brand Parameters</h3>
      <DropDownBox parametrs={parametrs} setParametrs={setParametrs} />
      <button className="hover:cursor-pointer h-[40px] text-[#f9f9f9] bg-[#121212] ">
        Generate Branding
      </button>
    </div>
  );
}
