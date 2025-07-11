export default function GlowSvg({
  shape = "circle",
  width = 846,
  height = 442,
  cx = 423,
  cy = 19,
  r,
  rx,
  ry,
  stdDeviation = 100,
  fill = "#FC4FF6",
  opacity = 0.2,
  gradientId,
  transform,
  mixBlendMode,
  className = "",
}) {
  const filterId = `glowFilter-${Math.random().toString(36).substring(2, 9)}`;
  const gradientFill = gradientId ? `url(#${gradientId})` : fill;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g
        opacity={opacity}
        filter={`url(#${filterId})`}
        style={mixBlendMode ? { mixBlendMode } : {}}
      >
        {shape === "circle" ? (
          <circle cx={cx} cy={cy} r={r} fill={gradientFill} />
        ) : (
          <ellipse
            cx={cx}
            cy={cy}
            rx={rx}
            ry={ry}
            transform={transform}
            fill={gradientFill}
          />
        )}
      </g>
      <defs>
        <filter
          id={filterId}
          x="0"
          y="0"
          width="200%"
          height="200%"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={stdDeviation}
            result="effect1_foregroundBlur"
          />
        </filter>
        {gradientId === "grayGradient" && (
          <radialGradient
            id="grayGradient"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(331.653 288.488) rotate(90) scale(90.6809 305.377)"
          >
            <stop stopColor="#A5A6A6" />
            <stop offset="1" stopColor="#565656" />
          </radialGradient>
        )}
      </defs>
    </svg>
  );
}
