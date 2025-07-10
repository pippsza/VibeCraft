import { useTheme } from "../../ThemeContext.jsx";
import InfoBoxes from "../InfoBoxes/InfoBoxes.jsx";

export default function SideCard({ localTheme, setParametrs }) {
  const { theme, changeTheme } = useTheme();
  const {
    typography,
    styleUtils: { borderRadius, borderWidth },
  } = theme;
  return (
    <div
      className={`w-full h-full bg-white px-[24px] py-[32px] flex flex-col gap-[42px] ${borderWidth} ${borderRadius}`}
    >
      <h3
        style={{ fontFamily: typography }}
        className="font-semibold text-[18px] tracking-[-0.02em]"
      >
        Brand palette
      </h3>
      <InfoBoxes localTheme={localTheme} />
    </div>
  );
}
