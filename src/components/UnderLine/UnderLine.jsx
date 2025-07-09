import { useTheme } from "../../ThemeContext.jsx";

export default function Underline() {
  const { theme, changeTheme } = useTheme();
  const { palette } = theme;
  return (
    <svg
      width="258"
      height="34"
      viewBox="0 0 258 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 left-0 pointer-events-none select-none"
    >
      <defs>
        <linearGradient
          id="paint0_linear_63_170"
          x1="5"
          y1="17"
          x2="253"
          y2="17"
          gradientUnits="userSpaceOnUse"
        >
          {palette.map((color, index) => (
            <stop
              key={index}
              offset={(index / (palette.length - 1)).toFixed(3)}
              stopColor={color}
            />
          ))}
        </linearGradient>
      </defs>
      <path
        d="M5 29C53.1279 19.6247 170.107 1.79891 253 5.49764"
        stroke="url(#paint0_linear_63_170)"
        strokeWidth="9"
        strokeLinecap="round"
      />
    </svg>
  );
}
