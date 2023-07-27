import * as React from "react";
const SvgAboutBl = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    viewBox="0 0 1187 670"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <mask
      id="aboutBl_svg__a"
      width={1187}
      height={670}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{ maskType: "alpha" }}
    >
      <path fill="#D9D9D9" d="M1186.87 0v669.75H0L1186.87 0Z" />
    </mask>
    <g filter="url(#aboutBl_svg__b)" mask="url(#aboutBl_svg__a)">
      <path
        fill="url(#aboutBl_svg__c)"
        d="M0 0h3382.62v2219.12H0z"
        transform="matrix(-.87981 .47533 -.76977 -.63831 3304.49 445.608)"
      />
    </g>
    <defs>
      <pattern
        id="aboutBl_svg__c"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use
          xlinkHref="#aboutBl_svg__d"
          transform="matrix(.001 0 0 .00151 -.085 0)"
        />
      </pattern>
      <filter
        id="aboutBl_svg__b"
        width={5084.29}
        height={3424.35}
        x={-1579.8}
        y={-1170.89}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_68_224"
          stdDeviation={100}
        />
      </filter>
      <image
        id="aboutBl_svg__d"
        width={1181}
        height={662}
      />
    </defs>
  </svg>
);
export default SvgAboutBl;