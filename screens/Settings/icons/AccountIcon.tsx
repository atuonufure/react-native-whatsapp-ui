import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';

function AccountIcon(props: SvgProps) {
  return (
    <Svg
      width={29}
      height={29}
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect width={29} height={29} rx={6} fill="#397AFE" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.35 5.5a5 5 0 012.18 9.501h.111v8.135a.5.5 0 01-.095.293l-.051.06-1.143 1.142a1 1 0 01-1.319.084l-.094-.083-1.23-1.226a.5.5 0 01-.051-.639l.058-.068.61-.597a.5.5 0 00.065-.637l-.057-.07-.97-.993a.5.5 0 01-.01-.64l.062-.066.887-.766a.5.5 0 00.058-.638l-.058-.07-.802-.801a.5.5 0 01-.14-.275l-.007-.079v-1.981A5.001 5.001 0 0114.35 5.5zm.025 2a1.375 1.375 0 100 2.75 1.375 1.375 0 000-2.75z"
        fill="#fff"
      />
    </Svg>
  );
}

export default AccountIcon;
