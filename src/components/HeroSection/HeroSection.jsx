import { useTheme } from "../../ThemeContext.jsx";
import Container from "../Container/Container.jsx";
import Star from "../Star/Star.jsx";
import Underline from "../UnderLine/UnderLine.jsx";

export default function HeroSection() {
  const { theme, changeTheme } = useTheme();
  const { typography } = theme;

  const avatarStyles =
    "w-[45px] h-[45px] rounded-full border-2 border-white object-cover -ml-[10px] first:ml-0";

  return (
    <Container style="flex flex-col py-[68px] items-center">
      <div className="flex mb-[27px]">
        <div className="flex items-center mr-[17px]">
          <img src="/image.png" alt="avatar" className={avatarStyles} />
          <img src="/image-1.png" alt="avatar" className={avatarStyles} />
          <img src="/image-2.png" alt="avatar" className={avatarStyles} />
          <img src="/image-3.png" alt="avatar" className={avatarStyles} />
          <img src="/image-4.png" alt="avatar" className={avatarStyles} />
        </div>

        <div className="w-[1px] h-[53px] bg-[#dbdbdb] mr-[12px]"></div>
        <div>
          <div className="flex gap-[5px]">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <p style={{ fontFamily: typography }} className="text-[#767676]">
            Trusted by 20+ professionals & founders
          </p>
        </div>
      </div>
      <div className="relative mb-[34px]">
        <h1
          style={{ fontFamily: typography }}
          className="text-[81px] text-center text-black tracking-tight font-semibold"
        >
          Design the Identity {<br />} Your Brand Deserves.
        </h1>
        <div className="absolute bottom-[-8px] right-[300px]">
          <Underline />
        </div>
      </div>
      <p
        style={{ fontFamily: typography }}
        className="text-center tracking-[0.04em]"
      >
        Bring your brand to life with curated styles, colors, {<br />} fonts,
        and icons — all in one tool.
      </p>
    </Container>
  );
}
