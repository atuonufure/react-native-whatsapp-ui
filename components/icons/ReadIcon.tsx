import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function ReadIcon(props: SvgProps) {
  return (
    <Svg
      width={18}
      height={12}
      viewBox='0 0 18 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.35 1l.622.622-6.734 9.466-2.73-2.764 1.156-1.626 1.574.941L16.349 1zM10.884.86l.622.623-6.734 9.466L.135 6.272l1.036-1.036L4.773 7.5 10.885.86z'
        fill='#3497F9'
      />
    </Svg>
  );
}

export default ReadIcon;
