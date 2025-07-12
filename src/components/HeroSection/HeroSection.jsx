import { useTheme } from "../../ThemeContext.jsx";
import Container from "../Container/Container.jsx";
import Star from "../Star/Star.jsx";
import Underline from "../UnderLine/UnderLine.jsx";

export default function HeroSection() {
  const { theme } = useTheme();
  const { typography } = theme;

  const avatarStyles =
    "w-8 h-8 rounded-full border-2 border-white object-cover -ml-2 first:ml-0 lg:w-11 lg:h-11 lg:-ml-3";

  return (
    <div className="container px-2 lg:px-4 mx-auto py-14 flex flex-col gap-4 lg:gap-10 ">
      <div className="flex  lg:gap-5 lg:flex-row items-center justify-center flex-col">
        <div className="flex items-center ">
          <img src="/image.png" alt="avatar" className={avatarStyles} />
          <img src="/image-1.png" alt="avatar" className={avatarStyles} />
          <img src="/image-2.png" alt="avatar" className={avatarStyles} />
          <img src="/image-3.png" alt="avatar" className={avatarStyles} />
          <img src="/image-4.png" alt="avatar" className={avatarStyles} />
        </div>

        <div className="w-px h-8 bg-[#dbdbdb]  lg:h-14  rotate-90 lg:rotate-0"></div>
        <div>
          <div className="flex gap-1 justify-center lg:justify-start">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} lgSize={18} />
            ))}
          </div>
          <p
            style={{ fontFamily: typography }}
            className="text-[#767676] text-xs sm:text-sm lg:text-base "
          >
            Trusted by 20+ professionals & founders
          </p>
        </div>
      </div>
      <div className="relative ">
        <h1
          style={{ fontFamily: typography }}
          className="text-3xl sm:text-3xl md:text-4xl text-center text-black tracking-tight font-semibold lg:text-7xl"
        >
          Design the Identity {<br />} Your Brand Deserves.
        </h1>
        <div className="hidden lg:block absolute -bottom-6 right-[500px]">
          <Underline />
        </div>
      </div>
      <p
        style={{ fontFamily: typography }}
        className="text-center text-xs  lg:text-xl "
      >
        Bring your brand to life with curated styles, colors, {<br />} fonts,
        and icons — all in one tool.
      </p>
    </div>
  );
}
