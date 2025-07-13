import { useTheme } from "../../ThemeContext.jsx";
import toast from "react-hot-toast";
import { colors } from "../../tools/stylesCfg";

export default function PalleteBoxes({ setParametrs, parametrs }) {
  const { theme } = useTheme();
  const {
    typography,
    palette,
    styleUtils: { borderRadius, borderWidth },
  } = theme;

  const accent = palette[0];
  const categories = Object.keys(colors);
  const getAudiences = (category) =>
    Object.keys(colors[category]).filter(
      (key) => typeof colors[category][key] === "object"
    );
  const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

  return (
    <div
      style={{ fontFamily: typography }}
      className="flex flex-col w-full  gap-3.5 "
    >
      <div className="flex justify-between">
        <h3 className="text-[#7e7e7e] uppercase text-base">color palette</h3>
        <button
          onClick={() => {
            const randomCategory = getRandom(categories);
            const randomAudience = getRandom(getAudiences(randomCategory));
            setParametrs({
              ...parametrs,
              Category: randomCategory,
              Audience: randomAudience,
            });
          }}
          className="text-sm  h-9 border-2 w-36 rounded-lg border-[#efefef] hover:cursor-pointer font-medium hover:bg-[rgba(241,91,181,0.15)] transition"
        >
          Refresh Colors
        </button>
      </div>
      <ul className="grid grid-cols-2 lg:grid-cols-3 gap-2">
        {palette.map((el, i) => {
          const label =
            i === 0 || i === 3
              ? "Primary"
              : i === 1 || i === 2
              ? "Secondary"
              : "Other";

          return (
            <li
              key={i}
              className={`w-full h-28 rounded-xl grid grid-rows-2 overflow-hidden transition-transform duration-200 hover:scale-105 cursor-pointer ${borderRadius} ${borderWidth}`}
              onClick={() => {
                navigator.clipboard && navigator.clipboard.writeText(el);
                toast.custom(
                  (t) => (
                    <div
                      className="px-4 py-2 bg-white rounded-lg shadow-lg flex items-center"
                      style={{
                        border: `2px solid ${accent}`,
                        color: accent,
                        fontWeight: 600,
                      }}
                    >
                      <span style={{ marginRight: 8 }}>✔</span> Color has
                      coppied!
                    </div>
                  ),
                  { duration: 1500 }
                );
              }}
            >
              <div style={{ backgroundColor: el }}></div>
              <div className="bg-[#f8f8f8] p-[11px]">
                <h5 className="text-sm  font-medium">{label}</h5>
                <p className="text-xs text-[#787878] ">{el}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
