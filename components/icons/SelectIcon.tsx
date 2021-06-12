import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SelectIcon(props: SvgProps) {
  return (
    <Svg
      width={21}
      height={21}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        opacity={0.422}
        d="M19.75 10.25a9.5 9.5 0 11-19 0 9.5 9.5 0 0119 0z"
        stroke="#3C3C43"
        strokeOpacity={0.6}
        strokeWidth={1.5}
      />
    </Svg>
  );
}

export default SelectIcon;
