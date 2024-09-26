import * as React from "react";
const SvgTrBackground = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    viewBox="0 0 1190 460"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <mask
      id="trBackground_svg__a"
      width={1190}
      height={460}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{ maskType: "alpha" }}
    >
      <path
        fill="#D9D9D9"
        d="M.5 0H1190v402.5c-159.05 29.36-165.4 187.051-566-195.5C514.998 86.276 382.559 39.75.5 0Z"
      />
    </mask>
    <g filter="url(#trBackground_svg__b)" mask="url(#trBackground_svg__a)">
      <path fill="url(#trBackground_svg__c)" d="M-61-361h1440V663H-61z" />
    </g>
    <defs>
      <pattern
        id="trBackground_svg__c"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use
          xlinkHref="#trBackground_svg__d"
          transform="matrix(.00107 0 0 .00151 -.134 0)"
        />
      </pattern>
      <filter
        id="trBackground_svg__b"
        width={1840}
        height={1424}
        x={-261}
        y={-561}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_47_5"
          stdDeviation={100}
        />
      </filter>
      <image
        id="trBackground_svg__d"
        width={1181}
        height={662}
      />
    </defs>
  </svg>
);
export default SvgTrBackground;