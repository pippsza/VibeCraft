import { useTheme } from "../../ThemeContext.jsx";

export default function InfoBoxes({ localTheme }) {
  const { theme, changeTheme } = useTheme();
  const {
    typography,
    styleUtils: { borderRadius, borderWidth },
  } = theme;
  console.log("params", localTheme);
  const localTypography = localTheme.typography;
  const localIcons = localTheme.icons;

  const styleBox = "bg-[#f9f9f9] w-[256px] h-[87px] px-[17px] py-[15px]";
  return (
    <div className="mb-[23px]">
      <ul style={{ fontFamily: typography }} className="flex gap-[16px]">
        <li className={styleBox}>
          <div className="flex justify-between">
            <p>TYPOGRAPHY</p>
            <a href="">Find Font</a>
          </div>
          <h4>{localTypography}</h4>
        </li>
        <li className={styleBox}>
          <div className="flex justify-between">
            <p>ICON STYLE</p>
            <a href="">Browse Icons</a>
          </div>
          <h4>{localIcons}</h4>
        </li>
      </ul>
    </div>
  );
}
