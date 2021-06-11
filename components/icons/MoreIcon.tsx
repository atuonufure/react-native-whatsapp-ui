import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function MoreIcon(props: SvgProps) {
  return (
    <Svg
      width={26}
      height={6}
      viewBox="0 0 26 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.25 0a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5zM13 0a2.75 2.75 0 110 5.5A2.75 2.75 0 0113 0zm9.75 0a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5z"
        fill="#fff"
      />
    </Svg>
  );
}

export default MoreIcon;
