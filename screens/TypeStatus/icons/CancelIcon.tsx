import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function CancelIcon(props: SvgProps) {
  return (
    <Svg
      width={19}
      height={19}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M7.229 9.351l-6.54-6.54A1.508 1.508 0 01.477.957l.108-.15.104-.118A1.5 1.5 0 012.67.565l.142.124 6.54 6.54 6.541-6.54a1.507 1.507 0 012.005-.104l.117.104c.536.537.586 1.387.104 2.005l-.105.117-6.54 6.54 6.54 6.541c.537.537.587 1.387.105 2.005l-.104.116a1.507 1.507 0 01-2.005.105l-.117-.105-6.541-6.54-6.54 6.54a1.507 1.507 0 01-2.005.105l-.117-.105a1.507 1.507 0 01-.104-2.004l.104-.117 6.54-6.541z"
        fill="#fff"
      />
    </Svg>
  );
}

export default CancelIcon;
