import * as React from "react";
const SvgBlBackground = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    viewBox="0 0 595 267"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <mask
      id="blBackground_svg__a"
      width={595}
      height={267}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{ maskType: "alpha" }}
    >
      <path
        fill="#D9D9D9"
        d="M594.75 266.775H0V.5C103.908 138.071 115.955 195.788 239.5 153c123.545-42.787 164.22 93.901 355.25 113.775Z"
      />
    </mask>
    <g filter="url(#blBackground_svg__b)" mask="url(#blBackground_svg__a)">
      <path fill="url(#blBackground_svg__c)" d="M-278-215H903v662H-278z" />
    </g>
    <defs>
      <pattern
        id="blBackground_svg__c"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use
          xlinkHref="#blBackground_svg__d"
          transform="scale(.00085 .00151)"
        />
      </pattern>
      <filter
        id="blBackground_svg__b"
        width={1581}
        height={1062}
        x={-478}
        y={-415}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_47_8"
          stdDeviation={100}
        />
      </filter>
      <image
        id="blBackground_svg__d"
        width={1181}
        height={662}
      />
    </defs>
  </svg>
);
export default SvgBlBackground;