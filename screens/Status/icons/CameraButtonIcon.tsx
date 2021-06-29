import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function CameraButtonIcon(props: SvgProps) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18z"
        fill="#EDEDFF"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.313 10.25a2 2 0 011.468.642L22.5 12.75h1.75a2.5 2.5 0 012.5 2.5v7.5a2.5 2.5 0 01-2.5 2.5h-12.5a2.5 2.5 0 01-2.5-2.5v-7.5a2.5 2.5 0 012.5-2.5h1.75l1.719-1.858a2 2 0 011.468-.642h2.626zm-1.313 4a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zm0 1a3.25 3.25 0 110 6.5 3.25 3.25 0 010-6.5z"
        fill="#007AFF"
      />
    </Svg>
  );
}

export default CameraButtonIcon;
