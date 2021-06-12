import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function PhotoIcon(props: SvgProps) {
  return (
    <Svg
      width={14}
      height={11}
      viewBox="0 0 14 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.69 0a.75.75 0 01.53.22l1.31 1.31c.141.141.332.22.53.22h2.19a.75.75 0 01.75.75V10a.75.75 0 01-.75.75H.75A.75.75 0 010 10V2.5a.75.75 0 01.75-.75h2.69a.75.75 0 00.53-.22L5.28.22A.75.75 0 015.81 0h2.88zM7 2.75a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zm0 .75a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm4.25-1a.5.5 0 100 1 .5.5 0 000-1zm-8.5-2A.25.25 0 013 .75v.5a.25.25 0 01-.25.25h-1a.25.25 0 01-.25-.25v-.5A.25.25 0 011.75.5h1z"
        fill="#8E8E93"
      />
    </Svg>
  );
}

export default PhotoIcon;
