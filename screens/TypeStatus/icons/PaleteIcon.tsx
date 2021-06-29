import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function PaleteIcon(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 .5c6.627 0 12 4.477 12 10 0 10.12-9.607 5.529-10.927 8.103-.813 1.654 3.313 5.507-1.073 5.507-9.02 0-12-8.087-12-13.61S5.373.5 12 .5zM5 8a2 2 0 100 4 2 2 0 000-4zm14 0a2 2 0 100 4 2 2 0 000-4zM9 3a2 2 0 100 4 2 2 0 000-4zm6 0a2 2 0 100 4 2 2 0 000-4z"
        fill="#fff"
      />
    </Svg>
  );
}

export default PaleteIcon;
