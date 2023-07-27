import * as React from "react";
const SvgProjectTl = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    viewBox="0 0 697 332"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <mask
      id="projectTl_svg__a"
      width={697}
      height={332}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{ maskType: "alpha" }}
    >
      <path
        fill="#D9D9D9"
        d="M0 0h594.75c97.555 49.364 109.994 71.65 97.75 107-253.825 70.372-433.489 39.504-541.5 208C56.636 366.765 30.356 295.742 0 107V0Z"
      />
    </mask>
    <g filter="url(#projectTl_svg__b)" mask="url(#projectTl_svg__a)">
      <path fill="url(#projectTl_svg__c)" d="M-278-482H903v662H-278z" />
    </g>
    <defs>
      <pattern
        id="projectTl_svg__c"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#projectTl_svg__d" transform="scale(.00085 .00151)" />
      </pattern>
      <filter
        id="projectTl_svg__b"
        width={1581}
        height={1062}
        x={-478}
        y={-682}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_60_57"
          stdDeviation={100}
        />
      </filter>
      <image
        id="projectTl_svg__d"
        width={1181}
        height={662}
      />
    </defs>
  </svg>
);
export default SvgProjectTl;