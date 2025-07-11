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
      className={`w-full flex flex-col px-2 py-2 mt-2 h-full bg-white ${borderWidth} ${borderRadius} lg:w-[589px] lg:px-[35px] lg:py-[32px] lg:mt-0`}
    >
      <h3
        style={{ fontFamily: typography }}
        className="font-semibold text-[18px] tracking-[-0.02em]"
      >
        Brand palette
      </h3>
      <InfoBoxes />
      <PalleteBoxes
        localTheme={localTheme}
        setParametrs={setParametrs}
        parametrs={parametrs}
      />
      <PreviewBox localTheme={localTheme} parametrs={parametrs} />
    </div>
  );
}
