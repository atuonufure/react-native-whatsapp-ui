import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function ChatsIcon(props: SvgProps) {
  return (
    <Svg
      width={31}
      height={21}
      viewBox='0 0 31 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 0c1.48 0 2.898.212 4.207.6l.4.125A14.44 14.44 0 0119.5.436C25.851.436 31 3.926 31 9.51c0 3.016-1.383 5.22-4.148 6.611l-.36.175-.076.043c-1.134.704-1.183 1.686-.65 2.606l.077.125.057.106a.793.793 0 01-.763 1.115l-.107-.012-.281-.06c-1.307-.305-2.536-1.045-3.685-2.217a16.458 16.458 0 01-4.55-.33l.035-.012a16.85 16.85 0 01-6.18.728c-1.2 1.226-2.48 2-3.842 2.32l-.293.063a.831.831 0 01-.912-1.154l.06-.111c.638-1 .638-2.088-.599-2.859l-.08-.044-.081-.041C1.54 15.115 0 12.76 0 9.499 0 3.654 5.373 0 12 0zm0 1.2C5.7 1.2 1.2 4.608 1.2 9.499c0 2.79 1.266 4.725 3.958 5.99l.133.067.126.073c1.433.891 1.875 2.259 1.438 3.58l-.062.173.28-.107c.835-.346 1.647-.917 2.437-1.726l.386-.394.55.036c6.67.436 12.354-3.263 12.354-7.692C22.8 4.985 18.018 1.2 12 1.2zm6.771.455c.24-.012.484-.019.729-.019 6.012 0 10.3 3.236 10.3 7.874 0 2.644-1.2 4.473-3.764 5.673l-.13.066-.122.07-.185.121c-1.19.826-1.584 2.02-1.247 3.228l.054.173-.288-.122-.286-.137a7.374 7.374 0 01-1.911-1.42l-.386-.393-.55.036-.465.023c-.618.022-1.227.007-1.82-.043l.3-.157c3.018-1.623 5-4.2 5-7.13 0-3.257-2.072-6.131-5.229-7.843zm0 0l-.031-.016.031.016z'
        fill={props.color}
      />
    </Svg>
  );
}

export default ChatsIcon;
