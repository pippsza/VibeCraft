import { useState } from "react";
import { styleOptions, colors } from "../../tools/stylesCfg.js";
import { Listbox } from "@headlessui/react";
import { useTheme } from "../../ThemeContext.jsx";
import { iconStyleMap } from "../../tools/socialIconMap.js";
export default function StyleDropdown({ type, setParametrs, parametrs }) {
  const { theme } = useTheme();
  const { icons } = theme;
  const iconsMapped = iconStyleMap[icons] || iconStyleMap["EmojiStyle"];
  let keys;

  switch (type) {
    case "Style":
      keys = Object.keys(styleOptions);
      break;
    case "Category":
      keys = Object.keys(colors);
      break;
    case "Audience":
      keys = Object.keys(colors[parametrs.Category]).filter(
        (key) => typeof colors[parametrs.Category][key] === "object"
      );
      break;
    case "Typography":
      keys = Object.keys(styleOptions[parametrs.Style]["typography"]);
      break;
    case "Icons":
      keys = Object.keys(styleOptions[parametrs.Style]["icons"]);
      break;
    default:
      break;
  }

  const [selectedStyle, setSelectedStyle] = useState(keys[0]);

  const handleChange = (value) => {
    setSelectedStyle(value);
    setParametrs({ ...parametrs, [type]: value });
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <Listbox value={selectedStyle} onChange={handleChange}>
        <p className=" text-sm">{type}</p>
        <div className="relative">
          <Listbox.Button className="relative w-full h-9 cursor-pointer bg-white border-px border-solid rounded-lg border-[#efefef] text-left flex justify-between items-center px-3 transition hover:bg-[rgba(241,91,181,0.15)]">
            {type === "Typography"
              ? styleOptions[parametrs.Style]["typography"][selectedStyle]
              : type === "Icons"
              ? styleOptions[parametrs.Style]["icons"][selectedStyle]
              : selectedStyle}
            <iconsMapped.dropdown className="stroke-black" size={20} />
          </Listbox.Button>
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none">
            {keys.map((styleKey) => {
              let label;
              if (type === "Typography") {
                label = styleOptions[parametrs.Style]["typography"][styleKey];
              } else if (type === "Icons") {
                label = styleOptions[parametrs.Style]["icons"][styleKey];
              } else {
                label = styleKey;
              }
              return (
                <Listbox.Option key={styleKey} value={styleKey}>
                  {({ active }) => (
                    <div
                      style={
                        active
                          ? {
                              backgroundColor: theme.palette[0] + "20",
                              color: "#000",
                            }
                          : { color: "#767676" }
                      }
                      className="cursor-pointer select-none px-4 py-2 transition"
                    >
                      {label}
                    </div>
                  )}
                </Listbox.Option>
              );
            })}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}
