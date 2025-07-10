import { iconStyleMap } from "../../tools/socialIconMap.js";
import { styleOptions } from "../../tools/stylesCfg.js";
import { useState, useEffect } from "react";

export default function PreviewBox({ localTheme, parametrs }) {
  const { palette, icons, typography } = localTheme;
  console.log("LOCAL:", localTheme);
  const [localIcons, setLocalIcons] = useState(icons);
  useEffect(() => {
    setLocalIcons(parametrs.Icon);
  }, [parametrs.Icon]);
  const iconStyleName =
    styleOptions[parametrs.Style].icons[localIcons] || "EmojiStyle";
  const iconsMapped = iconStyleMap[iconStyleName] || iconStyleMap["EmojiStyle"];

  return (
    <div className=" bg-white flex flex-col gap-[15px]">
      <h3 className="text-[#7e7e7e] uppercase text-[15px] leading-[142%]">
        preview
      </h3>
      <div
        style={{ fontFamily: typography }}
        className="w-[533px] h-[162px] rounded-[10px] border-[1px] border-[#efefef] pt-[31px] px-[33px]"
      >
        <h2 className="mb-[6px] font-semibold text-[18px] tracking-[-0.02em] leading-[115%]">
          Header Example
        </h2>
        <p className="font-medium text-[14px] tracking-[-0.02] leading-[146%] mb-[13px]">
          This is how your body text would look with these colors.
        </p>
        <div className="flex gap-[9px] ">
          <button
            style={{ backgroundColor: palette[0] }}
            className="w-[142px] hover:cursor-pointer h-[35px] text-[15px] tracking-[-0.02em] leading-[142%] font-semibold rounded-[10px] text-white"
          >
            Primary
          </button>
          <button
            style={{ color: palette[1], borderColor: palette[1] }}
            className="w-[142px] hover:cursor-pointer h-[35px] text-[15px] tracking-[-0.02em] leading-[142%] font-semibold rounded-[10px] border-[1px]"
          >
            Secondary
          </button>
          {iconsMapped.github && (
            <iconsMapped.github className="stroke-black" size={20} />
          )}
          {iconsMapped.discord && (
            <iconsMapped.discord className="stroke-black" size={20} />
          )}
          {iconsMapped.twitter && (
            <iconsMapped.twitter className="stroke-black" size={20} />
          )}
          {iconsMapped.reddit && (
            <iconsMapped.reddit className="stroke-black" size={20} />
          )}
        </div>
      </div>
    </div>
  );
}
