import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';

function NotificationsIcon(props: SvgProps) {
  return (
    <Svg
      width={29}
      height={29}
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect width={29} height={29} rx={6} fill="#FF3B2F" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.75 8a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0zM16 6.75h-5.75l-.2.005a4 4 0 00-3.8 3.995v8l.005.2a4 4 0 003.995 3.8h8l.2-.005a4 4 0 003.8-3.995V13h-1v5.75l-.005.176a3 3 0 01-2.995 2.824h-8l-.176-.005A3 3 0 017.25 18.75v-8l.005-.176A3 3 0 0110.25 7.75H16v-1z"
        fill="#fff"
      />
    </Svg>
  );
}

export default NotificationsIcon;
