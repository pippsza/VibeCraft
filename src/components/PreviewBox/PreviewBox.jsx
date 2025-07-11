import { iconStyleMap } from "../../tools/socialIconMap.js";
import { styleOptions } from "../../tools/stylesCfg.js";
import { useState, useEffect } from "react";

export default function PreviewBox({ localTheme, parametrs }) {
  const { palette, icons, typography } = localTheme;
  const [localIcons, setLocalIcons] = useState(icons);
  useEffect(() => {
    setLocalIcons(parametrs.Icon);
  }, [parametrs.Icon]);
  const iconStyleName =
    styleOptions[parametrs.Style].icons[localIcons] || "EmojiStyle";
  const iconsMapped = iconStyleMap[iconStyleName] || iconStyleMap["EmojiStyle"];

  return (
    <div className="w-full flex flex-col gap-2 mb-2 bg-white rounded-[10px] border-[1px] border-[#efefef] lg:gap-[15px] lg:mb-0">
      <h3 className="text-[#7e7e7e] uppercase text-[13px] md:text-[15px] leading-[142%]">
        preview
      </h3>
      <div
        style={{ fontFamily: typography }}
        className="w-full h-[235px] lg:h-[162px] bg-white rounded-[10px] border-[1px] border-[#efefef] pt-[20px] px-[12px] text-sm md:text-base lg:pt-[31px] lg:px-[33px] lg:text-[18px]"
      >
        <h2 className="mb-[6px] font-semibold text-[18px] tracking-[-0.02em] leading-[115%]">
          Header Example
        </h2>
        <p className="font-medium text-[14px] tracking-[-0.02] leading-[146%] mb-[13px]">
          This is how your body text would look with these colors.
        </p>
        <div className="flex flex-col lg:flex-row gap-[9px] ">
          <button
            style={{ backgroundColor: palette[0] }}
            className="w-[142px] hover:cursor-pointer h-[35px] text-[15px] tracking-[-0.02em] leading-[142%] font-semibold rounded-[10px] text-white transition"
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = palette[0] + "CC")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = palette[0])
            }
          >
            Primary
          </button>
          <button
            style={{
              color: palette[1],
              borderColor: palette[1],
              backgroundColor: palette[1] + "10",
            }}
            className="w-[142px] hover:cursor-pointer h-[35px] text-[15px] tracking-[-0.02em] leading-[142%] font-semibold rounded-[10px] border-[1px] transition"
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = palette[1] + "20")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = palette[1] + "10")
            }
          >
            Secondary
          </button>
          <div className="flex">
            {iconsMapped.github && (
              <span
                onMouseEnter={(e) =>
                  (e.currentTarget.firstChild.style.stroke = palette[0])
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.firstChild.style.stroke = "#000")
                }
                className="rounded-full p-1 transition flex items-center"
              >
                <iconsMapped.github
                  className="stroke-black transition hover:cursor-pointer"
                  size={20}
                />
              </span>
            )}
            {iconsMapped.discord && (
              <span
                onMouseEnter={(e) =>
                  (e.currentTarget.firstChild.style.stroke = palette[0])
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.firstChild.style.stroke = "#000")
                }
                className="rounded-full p-1 transition flex items-center"
              >
                <iconsMapped.discord
                  className="stroke-black transition hover:cursor-pointer"
                  size={20}
                />
              </span>
            )}
            {iconsMapped.twitter && (
              <span
                onMouseEnter={(e) =>
                  (e.currentTarget.firstChild.style.stroke = palette[0])
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.firstChild.style.stroke = "#000")
                }
                className="rounded-full p-1 transition flex items-center"
              >
                <iconsMapped.twitter
                  className="stroke-black transition hover:cursor-pointer"
                  size={20}
                />
              </span>
            )}
            {iconsMapped.reddit && (
              <span
                onMouseEnter={(e) =>
                  (e.currentTarget.firstChild.style.stroke = palette[0])
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.firstChild.style.stroke = "#000")
                }
                className="rounded-full p-1 transition flex items-center"
              >
                <iconsMapped.reddit
                  className="stroke-black transition hover:cursor-pointer"
                  size={20}
                />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
