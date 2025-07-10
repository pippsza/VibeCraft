import { useState } from "react";
import { styleOptions, colors } from "../../tools/stylesCfg.js";
import { Listbox } from "@headlessui/react";
import { useTheme } from "../../ThemeContext.jsx";
import { iconStyleMap } from "../../tools/socialIconMap.js";
export default function StyleDropdown({ type }) {
  const { theme, changeTheme, icons } = useTheme();
  const iconsMapped = iconStyleMap[icons] || iconStyleMap["EmojiStyle"];
  let keys;

  switch (type) {
    case "Style":
      keys = Object.keys(styleOptions);
      break;
    case "Category":
      keys = Object.keys(colors);
      break;
    default:
      break;
  }

  const [selectedStyle, setSelectedStyle] = useState(keys[0]);

  const handleChange = (value) => {
    setSelectedStyle(value);
    console.log("selected:", value);
    // onChange(value);
  };

  return (
    // <div className="mb-4">
    //   <label className="mb-[5px] text-[15px] tracking-[-0.02em]">Style</label>
    //   <select
    //     value={selectedStyle}
    //     onChange={handleChange}
    //     className="p-2 border border-gray-300 rounded w-full"
    //   >
    //     {keys.map((styleKey) => (
    //       <option key={styleKey} value={styleKey}>
    //         {styleKey}
    //       </option>
    //     ))}
    //   </select>
    //   </div>
    <div className="w-64">
      <Listbox value={selectedStyle} onChange={handleChange}>
        <p className="mb-[5px] text-[15px] tracking-[-0.02em]">{type}</p>
        <div className="relative">
          <Listbox.Button className="relative w-[104px] h-[35px] cursor-pointer bg-white border-[1px] border-solid rounded-[8px] border-[#efefef] text-left flex justify-between items-center px-[12px]">
            {selectedStyle}
            <iconsMapped.dropdown className="stroke-black" size={20} />
          </Listbox.Button>
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-[8px] bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none">
            {keys.map((styleKey) => (
              <Listbox.Option
                key={styleKey}
                value={styleKey}
                className={({ active }) =>
                  `cursor-pointer select-none px-4 py-2 ${
                    active ? "bg-[#767676] text-black" : "text-[#767676]"
                  }`
                }
              >
                {styleKey}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}
