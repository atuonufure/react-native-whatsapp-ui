import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function Cancel(props: SvgProps) {
  return (
    <Svg
      width={19}
      height={19}
      viewBox='0 0 19 19'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <Path
        d='M.71.887L.793.793A1 1 0 012.113.71l.094.083 6.894 6.893L15.996.793a1 1 0 011.32-.083l.094.083a1 1 0 01.083 1.32l-.083.094-6.895 6.894 6.895 6.895a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.32.083l-.094-.083L9.1 10.515 2.207 17.41a1 1 0 01-1.32.083l-.094-.083a1 1 0 01-.083-1.32l.083-.094L7.686 9.1.793 2.207A1 1 0 01.71.887L.793.793.71.887z'
        fill='#fff'
      />
    </Svg>
  );
}

export default Cancel;
