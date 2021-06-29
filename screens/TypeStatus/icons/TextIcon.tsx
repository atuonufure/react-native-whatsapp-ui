import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function TextIcon(props: SvgProps) {
  return (
    <Svg
      width={20}
      height={23}
      viewBox="0 0 20 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.5 3.5V0H19v3.5h-7.5V23H8V3.5H.5z"
        fill="#fff"
      />
    </Svg>
  );
}

export default TextIcon;
