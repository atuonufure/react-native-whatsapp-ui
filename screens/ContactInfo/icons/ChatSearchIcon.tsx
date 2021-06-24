import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';

function ChatSearchIcon(props: SvgProps) {
  return (
    <Svg
      width={29}
      height={30}
      viewBox='0 0 29 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <Rect y={0.5} width={29} height={29} rx={6} fill='#FE8D35' />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.5 13.25a6.75 6.75 0 10-2.942 5.574l4.154 4.156.102.091a1.25 1.25 0 001.666-1.859l-4.156-4.154A6.718 6.718 0 0019.5 13.25zm-11.5 0a4.75 4.75 0 119.5 0 4.75 4.75 0 01-9.5 0z'
        fill='#fff'
      />
    </Svg>
  );
}

export default ChatSearchIcon;
