import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';

function HelpIcon(props: SvgProps) {
  return (
    <Svg
      width={29}
      height={29}
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect width={29} height={29} rx={6} fill="#4BA0FE" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.1 8.375a1.625 1.625 0 11-3.25 0 1.625 1.625 0 013.25 0zM16 20.05V11.5h-4.25v.25h.05a1.2 1.2 0 011.2 1.2v7.1a1.2 1.2 0 01-1.2 1.2h-.05v.25h5.5v-.25h-.05a1.2 1.2 0 01-1.2-1.2z"
        fill="#fff"
      />
    </Svg>
  );
}

export default HelpIcon;
