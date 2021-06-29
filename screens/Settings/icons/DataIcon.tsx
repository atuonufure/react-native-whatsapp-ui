import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';

function DataIcon(props: SvgProps) {
  return (
    <Svg
      width={29}
      height={29}
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect width={29} height={29} rx={6} fill="#4BD763" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.464 12.042L10.84 8.419 7.22 12.042l.848.848 2.174-2.174v9.886h1.2v-9.886l2.174 2.174.849-.848zm4.258 6.844V9h-1.2v9.886l-2.173-2.174-.849.849 3.622 3.622 3.623-3.622-.849-.849-2.174 2.174z"
        fill="#fff"
      />
    </Svg>
  );
}

export default DataIcon;
