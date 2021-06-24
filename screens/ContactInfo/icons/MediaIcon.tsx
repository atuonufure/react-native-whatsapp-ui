import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';

function MediaIcon(props: SvgProps) {
  return (
    <Svg
      width={29}
      height={30}
      viewBox='0 0 29 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <Rect y={0.5} width={29} height={29} rx={6} fill='#3396FD' />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19 7a3.5 3.5 0 013.5 3.5v9A3.5 3.5 0 0119 23h-9a3.5 3.5 0 01-3.5-3.5v-9A3.5 3.5 0 0110 7h9zm0 1h-9a2.5 2.5 0 00-2.5 2.5v9c0 .085.004.169.012.251l3.83-3.828a1 1 0 011.414 0l1.222 1.223 3.498-3.498a1 1 0 011.414 0l2.61 2.61V10.5A2.5 2.5 0 0019 8zm-4.5 4a2 2 0 10-4 0 2 2 0 004 0z'
        fill='#fff'
      />
    </Svg>
  );
}

export default MediaIcon;
