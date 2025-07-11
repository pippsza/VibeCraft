import { useTheme } from "../../ThemeContext.jsx";
import Container from "../Container/Container.jsx";
import Star from "../Star/Star.jsx";
import Underline from "../UnderLine/UnderLine.jsx";

export default function HeroSection() {
  const { theme, changeTheme } = useTheme();
  const { typography } = theme;

  const avatarStyles =
    "w-[32px] h-[32px] rounded-full border-2 border-white object-cover -ml-2 first:ml-0 lg:w-[45px] lg:h-[45px] lg:-ml-[10px]";

  return (
    <Container style="flex flex-col items-center py-6  lg:py-[68px]">
      <div className="flex mb-4 lg:mb-[27px] lg:flex-row items-center flex-col">
        <div className="flex items-center mr-3 lg:mr-[17px]">
          <img src="/image.png" alt="avatar" className={avatarStyles} />
          <img src="/image-1.png" alt="avatar" className={avatarStyles} />
          <img src="/image-2.png" alt="avatar" className={avatarStyles} />
          <img src="/image-3.png" alt="avatar" className={avatarStyles} />
          <img src="/image-4.png" alt="avatar" className={avatarStyles} />
        </div>

        <div className="w-px h-[32px] bg-[#dbdbdb] mr-2 lg:w-[1px] lg:h-[53px] lg:mr-[12px] rotate-90 lg:rotate-0"></div>
        <div>
          <div className="flex gap-1 lg:gap-[5px]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} lgSize={18} />
            ))}
          </div>
          <p
            style={{ fontFamily: typography }}
            className="text-[#767676] text-xs lg:text-base "
          >
            Trusted by 20+ professionals & founders
          </p>
        </div>
      </div>
      <div className="relative mb-4 lg:mb-[34px]">
        <h1
          style={{ fontFamily: typography }}
          className="text-[32px] text-center text-black tracking-tight font-semibold leading-[1.1] lg:text-[81px]"
        >
          Design the Identity {<br />} Your Brand Deserves.
        </h1>
        <div className="hidden lg:block absolute bottom-[-8px] right-[300px]">
          <Underline />
        </div>
      </div>
      <p
        style={{ fontFamily: typography }}
        className="text-center text-xs tracking-[0.01em] lg:text-base lg:tracking-[0.04em]"
      >
        Bring your brand to life with curated styles, colors, {<br />} fonts,
        and icons — all in one tool.
      </p>
    </Container>
  );
}
