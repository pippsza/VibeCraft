import { useTheme } from "../../ThemeContext.jsx";
import { iconStyleMap } from "../../tools/socialIconMap.js";
import { useState } from "react";

export default function Icons() {
  const { theme } = useTheme();
  const { icons } = theme;
  const iconsMapped = iconStyleMap[icons] || iconStyleMap["EmojiStyle"];
  const accent = theme.palette[0];
  const [hovered, setHovered] = useState("");

  return (
    <div className="flex gap-4">
      <a
        href=""
        className="rounded-full flex items-center transition"
        onMouseEnter={() => setHovered("github")}
        onMouseLeave={() => setHovered("")}
      >
        {iconsMapped.github && (
          <iconsMapped.github
            className="transition"
            size={20}
            style={{ stroke: hovered === "github" ? accent : "#000" }}
          />
        )}
      </a>
      <a
        href=""
        className="rounded-full flex items-center transition"
        onMouseEnter={() => setHovered("discord")}
        onMouseLeave={() => setHovered("")}
      >
        {iconsMapped.discord && (
          <iconsMapped.discord
            className="transition"
            size={20}
            style={{ stroke: hovered === "discord" ? accent : "#000" }}
          />
        )}
      </a>
      <a
        href=""
        className="rounded-full flex items-center transition"
        onMouseEnter={() => setHovered("reddit")}
        onMouseLeave={() => setHovered("")}
      >
        {iconsMapped.reddit && (
          <iconsMapped.reddit
            className="transition"
            size={20}
            style={{ stroke: hovered === "reddit" ? accent : "#000" }}
          />
        )}
      </a>
      <a
        href=""
        className="rounded-full flex items-center transition"
        onMouseEnter={() => setHovered("twitter")}
        onMouseLeave={() => setHovered("")}
      >
        {iconsMapped.twitter && (
          <iconsMapped.twitter
            className="transition"
            size={20}
            style={{ stroke: hovered === "twitter" ? accent : "#000" }}
          />
        )}
      </a>
    </div>
  );
}
