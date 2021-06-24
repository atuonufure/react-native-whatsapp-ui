import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function StatusIcon(props: SvgProps) {
  return (
    <Svg
      width={27}
      height={26}
      viewBox='0 0 27 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M22.268 4.45a12.562 12.562 0 00-9.02-3.8c-3.44 0-6.662 1.386-9.017 3.8a.6.6 0 10.858.838 11.362 11.362 0 018.16-3.438l.346.005a11.36 11.36 0 017.814 3.433.6.6 0 00.86-.838zm-.018 8.8a9 9 0 10-18 0 9 9 0 0018 0zM1.134 9.782a.6.6 0 011.153.33 11.408 11.408 0 00-.437 3.138c0 5.211 3.527 9.721 8.495 11.026a.6.6 0 01-.305 1.161A12.605 12.605 0 01.65 13.25c0-1.185.164-2.35.484-3.468zm23.505-.37a.6.6 0 01.74.415 12.605 12.605 0 01-9.028 15.638.6.6 0 01-.294-1.163A11.405 11.405 0 0024.65 13.25c0-1.06-.144-2.098-.426-3.097a.6.6 0 01.415-.74zM13.25 5.45a7.8 7.8 0 100 15.6 7.8 7.8 0 000-15.6z'
        fill={props.color}
      />
    </Svg>
  );
}

export default StatusIcon;
