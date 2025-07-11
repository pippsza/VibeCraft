import { useTheme } from "../../ThemeContext.jsx";
import InfoBoxes from "../InfoBoxes/InfoBoxes.jsx";
import PalleteBoxes from "../PaletteBoxes/PaletteBoxes.jsx";
import PreviewBox from "../PreviewBox/PreviewBox.jsx";

export default function SideCard({ localTheme, setParametrs, parametrs }) {
  const { theme, changeTheme } = useTheme();
  const {
    typography,
    styleUtils: { borderRadius, borderWidth },
  } = theme;
  return (
    <div
      className={`w-[589px] h-full bg-white px-[35px] py-[32px] ${borderWidth} ${borderRadius}`}
    >
      <h3
        style={{ fontFamily: typography }}
        className="font-semibold text-[18px] tracking-[-0.02em]"
      >
        Brand palette
      </h3>
      <InfoBoxes />
      <PalleteBoxes localTheme={localTheme} />
      <PreviewBox localTheme={localTheme} parametrs={parametrs} />
    </div>
  );
}
