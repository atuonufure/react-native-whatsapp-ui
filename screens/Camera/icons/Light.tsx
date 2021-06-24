import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function Light(props: SvgProps) {
  return (
    <Svg
      width={25}
      height={27}
      viewBox='0 0 25 27'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19 16a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm.883 2.5a.2.2 0 00-.19-.137h-1.466a.2.2 0 00-.19.137l-1.756 5.236a.2.2 0 00.19.264h.994a.2.2 0 00.191-.144l.28-.95a.2.2 0 01.191-.144h1.54a.2.2 0 01.192.145l.269.948a.2.2 0 00.192.145h1.133a.2.2 0 00.19-.264l-1.76-5.236zM12.006.454a1 1 0 01.58 1.196l-.04.11L9.339 9.5H14.6a1 1 0 01.531.152l.114.083a1 1 0 01.195 1.309l-.075.1L5.41 22.956a1 1 0 01-1.726-.917l.038-.11 3.333-8.046H1.926a1 1 0 01-.53-.152l-.114-.083a1 1 0 01-.195-1.308l.075-.1L10.858.732a1 1 0 011.148-.279zm6.936 19.179l.532 1.842a.2.2 0 01-.192.255h-.764a.2.2 0 01-.192-.256l.542-1.841h.074z'
        fill='#fff'
      />
    </Svg>
  );
}

export default Light;
