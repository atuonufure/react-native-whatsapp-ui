import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function BackArrowIcon(props: SvgProps) {
  return (
    <Svg
      width={12}
      height={21}
      viewBox='0 0 12 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <Path
        d='M3.602 10.5l7.804-7.95a1.5 1.5 0 00-2.14-2.1l-8.836 9a1.5 1.5 0 000 2.1l8.835 9a1.5 1.5 0 002.141-2.1L3.602 10.5z'
        fill='#007AFF'
      />
    </Svg>
  );
}

export default BackArrowIcon;
