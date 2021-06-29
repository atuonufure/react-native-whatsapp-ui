import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';

function HeartIcon(props: SvgProps) {
  return (
    <Svg
      width={29}
      height={29}
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect width={29} height={29} rx={6} fill="#FF2C55" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.05 15.218c1.301-2.073 1.006-4.09-.63-5.463a4 4 0 00-5.635.493l-.293.348-.293-.348a4 4 0 00-5.635-.493c-1.692 1.42-1.67 3.26-.493 5.635.784 1.583 2.925 3.793 6.422 6.627 3.504-3.15 5.69-5.417 6.557-6.799zm-6.595 5.215l-.626-.529c-2.53-2.165-4.1-3.87-4.683-5.047-1.016-2.052-.942-3.234.19-4.183a2.8 2.8 0 013.944.345l1.212 1.44 1.211-1.439a2.8 2.8 0 013.946-.346c1.189.997 1.357 2.357.384 3.906-.676 1.078-2.34 2.857-4.957 5.282l-.621.57z"
        fill="#fff"
      />
    </Svg>
  );
}

export default HeartIcon;
