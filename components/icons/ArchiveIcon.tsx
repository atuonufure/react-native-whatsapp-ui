import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function ArchiveIcon(props: SvgProps) {
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
        d='M20.6 6.5v12.3a2 2 0 01-2 2H3.1a2 2 0 01-2-2V6.5h19.5zm-6.3 2.2h-7a.5.5 0 00-.492.41L6.8 9.2v1.5a.5.5 0 00.41.492l.09.008h7a.5.5 0 00.492-.41l.008-.09V9.2a.5.5 0 00-.5-.5zM19.2.5a2 2 0 012 2v3H.5v-3a2 2 0 012-2h16.7z'
        fill='#fff'
      />
    </Svg>
  );
}

export default ArchiveIcon;
