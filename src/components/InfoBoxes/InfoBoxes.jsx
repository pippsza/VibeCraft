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
    <div className="mb-[16px]">
      <ul style={{ fontFamily: typography }} className="flex gap-[16px]">
        <li className={styleBox}>
          <div className="flex justify-between">
            <p className="text-[#7e7e7e] leading-[152%] font-semibold">
              TYPOGRAPHY
            </p>
            <a
              className="text-[12px] leading-[177%] font-medium transition hover:text-[#767676]"
              href=""
            >
              Find Font
            </a>
          </div>
          <h4 className="text-[18px] font-semibold">{typography}</h4>
        </li>
        <li className={styleBox}>
          <div className="flex justify-between">
            <p className="text-[#7e7e7e] leading-[152%] font-semibold">
              ICON STYLE
            </p>
            <a
              className="text-[12px] leading-[177%] font-medium transition hover:text-[#767676]"
              href=""
            >
              Browse Icons
            </a>
          </div>
          <h4 className="text-[18px] font-semibold">{icons}</h4>
        </li>
      </ul>
    </div>
  );
}
