import { useTheme } from "../../ThemeContext.jsx";

export default function InfoBoxes() {
  const { theme } = useTheme();
  const {
    typography,
    icons,
    styleUtils: { borderRadius, borderWidth },
  } = theme;

  const styleBox = `bg-[#f9f9f9] w-1/2  flex flex-col justify-between
  bg-[#f9f9f9] w-full h-auto px-3 py-3 rounded-4 flex flex-col justify-between  lg:h-20 lg:px-4 lg:py-4"
  ${borderRadius} ${borderWidth}`;
  return (
    <div>
      <ul
        style={{ fontFamily: typography }}
        className="grid lg:grid-cols-2  gap-2 lg:flex-row lg:gap-4"
      >
        <li className={styleBox}>
          <div className="flex justify-between">
            <p className="text-[#7e7e7e]  font-semibold text-sm lg:text-base">
              TYPOGRAPHY
            </p>
            <a
              className="text-xs  font-medium transition hover:text-[#767676] "
              href=""
            >
              Find Font
            </a>
          </div>
          <h4 className="font-semibold text-base lg:text-lg">{typography}</h4>
        </li>
        <li className={styleBox}>
          <div className="flex justify-between">
            <p className="text-[#7e7e7e]  font-semibold text-sm lg:text-base">
              ICON STYLE
            </p>
            <a
              className="text-xs  font-medium transition hover:text-[#767676] "
              href=""
            >
              Browse Icons
            </a>
          </div>
          <h4 className="font-semibold text-base lg:text-lg">{icons}</h4>
        </li>
      </ul>
    </div>
  );
}
