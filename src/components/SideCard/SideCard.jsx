import { useTheme } from "../../ThemeContext.jsx";
import InfoBoxes from "../InfoBoxes/InfoBoxes.jsx";
import PalleteBoxes from "../PaletteBoxes/PaletteBoxes.jsx";
import PreviewBox from "../PreviewBox/PreviewBox.jsx";

export default function SideCard({ localTheme, setParametrs, parametrs }) {
  const { theme } = useTheme();
  const {
    typography,
    styleUtils: { borderRadius, borderWidth },
  } = theme;
  return (
    <div
      className={`w-full   flex flex-col gap-5 px-8 py-4  bg-white ${borderWidth} ${borderRadius}  `}
    >
      <h3 style={{ fontFamily: typography }} className="font-semibold text-lg">
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
