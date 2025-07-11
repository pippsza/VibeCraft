import { useTheme } from "../../ThemeContext.jsx";

export default function InfoBoxes() {
  const { theme, changeTheme } = useTheme();
  const {
    typography,
    icons,
    styleUtils: { borderRadius, borderWidth },
  } = theme;

  const styleBox =
    "bg-[#f9f9f9] w-[50%] h-[87px] px-[17px] py-[15px] rounded-[15px] flex flex-col justify-between";
  return (
    <div className="mb-[12px] lg:mb-[16px]">
      <ul
        style={{ fontFamily: typography }}
        className="flex flex-col gap-2 lg:flex-row lg:gap-[16px]"
      >
        <li
          className={
            "bg-[#f9f9f9] w-full h-auto px-3 py-3 rounded-[15px] flex flex-col justify-between lg:w-[50%] lg:h-[87px] lg:px-[17px] lg:py-[15px]"
          }
        >
          <div className="flex justify-between">
            <p className="text-[#7e7e7e] leading-[152%] font-semibold text-sm lg:text-[16px]">
              TYPOGRAPHY
            </p>
            <a
              className="text-[11px] leading-[177%] font-medium transition hover:text-[#767676] lg:text-[12px]"
              href=""
            >
              Find Font
            </a>
          </div>
          <h4 className="font-semibold text-base lg:text-[18px]">
            {typography}
          </h4>
        </li>
        <li
          className={
            "bg-[#f9f9f9] w-full h-auto px-3 py-3 rounded-[15px] flex flex-col justify-between lg:w-[50%] lg:h-[87px] lg:px-[17px] lg:py-[15px]"
          }
        >
          <div className="flex justify-between">
            <p className="text-[#7e7e7e] leading-[152%] font-semibold text-sm lg:text-[16px]">
              ICON STYLE
            </p>
            <a
              className="text-[11px] leading-[177%] font-medium transition hover:text-[#767676] lg:text-[12px]"
              href=""
            >
              Browse Icons
            </a>
          </div>
          <h4 className="font-semibold text-base lg:text-[18px]">{icons}</h4>
        </li>
      </ul>
    </div>
  );
}
