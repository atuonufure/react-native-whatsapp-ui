import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function Write(props: SvgProps) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox='0 0 36 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18z'
        fill='#EDEDFF'
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18 10.5c4.97 0 9 3.246 9 7.25S22.97 25 18 25a11.02 11.02 0 01-2.641-.317c-1.075 1.898-3.496 1.461-3.496 1.461.813-.265 1.264-1.016 1.351-2.253C10.682 22.608 9 20.337 9 17.75c0-4.004 4.03-7.25 9-7.25z'
        fill='#007AFF'
      />
    </Svg>
  );
}

export default Write;
