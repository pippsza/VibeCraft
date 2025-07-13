import { useTheme } from "../../ThemeContext.jsx";
import { iconStyleMap } from "../../tools/socialIconMap.js";

export default function PreviewBox() {
  const { theme } = useTheme();
  const { palette, icons, typography, styleUtils } = theme;
  const { secondaryWidth } = styleUtils;

  const iconsMapped = iconStyleMap[icons];

  return (
    <div className="w-full flex flex-col gap-2  bg-white  lg:gap-4 ">
      <h3 className="text-[#7e7e7e] uppercase text-xs md:text-sm">preview</h3>
      <div
        style={{ fontFamily: typography }}
        className={`flex flex-col gap-3 w-full bg-white rounded-xl py-4 px-4 text-sm md:text-base lg:text-base ${secondaryWidth}`}
      >
        <h2 className=" font-semibold text-sm ">Header Example</h2>
        <p className="font-medium text-sm  ">
          This is how your body text would look with these colors.
        </p>
        <div className="flex flex-col md:flex-row gap-2 ">
          <button
            style={{ backgroundColor: palette[0] }}
            className="w-36 hover:cursor-pointer h-9 text-base  font-semibold rounded-lg text-white transition"
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
            className="w-36 hover:cursor-pointer h-9 text-base font-semibold rounded-lg border-2 transition"
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = palette[1] + "20")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = palette[1] + "10")
            }
          >
            Secondary
          </button>
          <div className="grid md:grid-cols-4 grid-cols-[1fr_7fr]">
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
