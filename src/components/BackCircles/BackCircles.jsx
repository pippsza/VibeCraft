import { useTheme } from "../../ThemeContext.jsx";
import Container from "../Container/Container.jsx";
import GlowSvg from "../GlowSvg/GlowSvg.jsx";

export default function BackCircles() {
  const { theme } = useTheme();
  const { palette } = theme;
  const color = palette[0];
  const secondColor = palette[1];
  const thirdColor = palette[2];
  const fourthColor = palette[3];
  return (
    <Container className="absolute -z-10 h-full w-full m-auto left-[12%] transform   overflow-hidden">
      <div className="relative m-auto">
        <svg
          width="1713"
          height="1552"
          viewBox="0 0 1713 1552"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0"
        >
          <g opacity="0.2" filter="url(#filter0_f_top)">
            <circle cx="1290" cy="19" r="223" fill={color} />
          </g>
          <g opacity="0.2" filter="url(#filter1_f_top)">
            <ellipse cx="391" cy="-14" rx="232" ry="231" fill={color} />
          </g>
          <g opacity="0.2" filter="url(#filter2_f_top)">
            <circle cx="833.5" cy="-41.5" r="233.5" fill={thirdColor} />
          </g>

          <g
            opacity="0.2"
            filter="url(#filter0_f_center)"
            transform="translate(0, 442)"
          >
            <ellipse
              cx="868.339"
              cy="608.713"
              rx="368.661"
              ry="340.594"
              fill={fourthColor}
            />
          </g>
          <g
            opacity="0.2"
            filter="url(#filter1_f_center)"
            transform="translate(0, 442)"
          >
            <ellipse
              cx="583.362"
              cy="553.694"
              rx="383.362"
              ry="353.694"
              fill={thirdColor}
            />
          </g>

          <defs>
            <filter
              id="filter0_f_top"
              x="867"
              y="-404"
              width="846"
              height="846"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="100"
                result="effect1_foregroundBlur_top"
              />
            </filter>
            <filter
              id="filter1_f_top"
              x="-41"
              y="-445"
              width="864"
              height="862"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="100"
                result="effect1_foregroundBlur_top"
              />
            </filter>
            <filter
              id="filter2_f_top"
              x="350"
              y="-525"
              width="967"
              height="967"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="125"
                result="effect1_foregroundBlur_top"
              />
            </filter>

            <filter
              id="filter0_f_center"
              x="340"
              y="108"
              width="1057"
              height="1001"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="80"
                result="effect1_foregroundBlur_center"
              />
            </filter>
            <filter
              id="filter1_f_center"
              x="0"
              y="0"
              width="1166"
              height="1107"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="100"
                result="effect1_foregroundBlur_center"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </Container>
  );
}
