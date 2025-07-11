import { useTheme } from "../../ThemeContext.jsx";

export default function PalleteBoxes({ localTheme }) {
  const { theme } = useTheme();
  const { typography } = theme;
  const { palette } = localTheme;

  return (
    <div
      style={{ fontFamily: typography }}
      className="flex flex-col w-[520px] gap-[13px] mb-[25px]"
    >
      <div className="flex justify-between">
        <h3 className="text-[#7e7e7e] uppercase text-[15px] leading-[142%]">
          color palette
        </h3>
        <button
          onClick={console.log("TEST")}
          className="text-[13px] tracking-[-0.02em] leading-[164%] w-[141px] h-[35px] border-[1px] rounded-[8px] border-[#efefef] hover:cursor-pointer font-medium"
        >
          Refresh Colors
        </button>
      </div>
      <ul className="flex gap-x-[8px] gap-y-[10px]  flex-wrap">
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
              className="w-[168px] h-[106px] rounded-[10px]  grid grid-rows-2 overflow-hidden"
            >
              <div style={{ backgroundColor: el }}></div>
              <div className="bg-[#f8f8f8] p-[11px]">
                <h5 className="text-[10px] tracking-[-0.02em] leading-[202%] font-medium">
                  {label}
                </h5>
                <p className="text-[12px] text-[#787878] tracking-[-0.02em] leading-[170%]">
                  {el}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
