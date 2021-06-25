import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function InfoIcon(props: SvgProps) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M22 11c0-6.075-4.925-11-11-11S0 4.925 0 11s4.925 11 11 11 11-4.925 11-11zM1 11C1 5.477 5.477 1 11 1s10 4.477 10 10-4.477 10-10 10S1 16.523 1 11zm11-2.5v8h1v.5H9v-.5h1V9H9v-.5h3zm.2-2.65a1.35 1.35 0 10-2.7 0 1.35 1.35 0 002.7 0z'
        fill='#007AFF'
      />
    </Svg>
  );
}

export default InfoIcon;
