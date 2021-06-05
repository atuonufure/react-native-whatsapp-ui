import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function RightArrow(props: SvgProps) {
  return (
    <Svg
      width={9}
      height={14}
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.94 7.355L.794 12.503l1.414 1.414L8.77 7.355 2.207.793.793 2.207 5.94 7.355z"
        fill="#3C3C43"
        fillOpacity={0.3}
      />
    </Svg>
  );
}

export default RightArrow;
