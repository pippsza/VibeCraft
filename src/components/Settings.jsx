import { useTheme } from "../ThemeContext.jsx";
import DropDownBox from "./DropDownBox.jsx";
import { styleOptions, colors } from "../tools/stylesCfg.js";

export default function Settings({ parametrs, setParametrs }) {
  const { theme } = useTheme();
  const {
    typography,
    styleUtils: { borderRadius, borderWidth },
  } = theme;

  function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  const handleGenerateBranding = () => {
    const styleKey = getRandom(Object.keys(styleOptions));
    const categoryKey = getRandom(Object.keys(colors));
    const audienceKeys = Object.keys(colors[categoryKey]).filter(
      (key) => typeof colors[categoryKey][key] === "object"
    );
    const audienceKey = getRandom(audienceKeys);
    const typographyKey = getRandom(
      Object.keys(styleOptions[styleKey]["typography"])
    );
    const iconKey = getRandom(Object.keys(styleOptions[styleKey]["icons"]));
    setParametrs({
      Style: styleKey,
      Category: categoryKey,
      Audience: audienceKey,
      Typography: typographyKey,
      Icon: iconKey,
    });
  };

  return (
    <div
      style={{ fontFamily: typography }}
      className={` w-full flex flex-col gap-5 px-4 py-4 h-full bg-white font-medium p-8 ${borderWidth} ${borderRadius}`}
    >
      <h3 className="font-semibold text-base lg:text-lg">Brand Parameters</h3>
      <DropDownBox parametrs={parametrs} setParametrs={setParametrs} />
      <button
        onClick={handleGenerateBranding}
        className="rounded-2 hover:cursor-pointer h-9 text-[#f9f9f9] bg-[#121212] hover:bg-[#767676] transition text-sm rounded-xl lg:h-11 lg:text-base"
      >
        Generate Branding
      </button>
    </div>
  );
}
