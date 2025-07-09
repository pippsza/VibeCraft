import { useTheme } from "../../ThemeContext.jsx";
import { iconStyleMap } from "../../tools/socialIconMap.js";

export default function Icons() {
  const { theme } = useTheme();
  const { icons } = theme;
  const iconsMapped = iconStyleMap[icons] || iconStyleMap["EmojiStyle"];

  return (
    <div className="flex gap-4">
      <ul className="flex gap-[16px] ">
        <li>
          <a href="">
            {iconsMapped.github && (
              <iconsMapped.github className="stroke-black" size={20} />
            )}
          </a>
        </li>
        <li>
          <a href="">
            {iconsMapped.discord && (
              <iconsMapped.discord className="stroke-black" size={20} />
            )}
          </a>
        </li>
        <li>
          <a href="">
            {iconsMapped.reddit && (
              <iconsMapped.reddit className="stroke-black" size={20} />
            )}
          </a>
        </li>
        <li>
          <a href="">
            {iconsMapped.twitter && (
              <iconsMapped.twitter className="stroke-black" size={20} />
            )}
          </a>
        </li>
      </ul>
    </div>
  );
}
