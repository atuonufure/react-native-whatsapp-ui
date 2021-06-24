import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function RecordAudioIcon(props: SvgProps) {
  return (
    <Svg
      width={17}
      height={24}
      viewBox='0 0 17 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8 0a4.5 4.5 0 014.5 4.5v7a4.5 4.5 0 11-9 0v-7A4.5 4.5 0 018 0zM.75 10.328a.6.6 0 01.592.503l.008.097v.132c0 3.74 2.98 6.768 6.65 6.768 3.592 0 6.523-2.9 6.646-6.53l.004-.238v-.121a.6.6 0 011.192-.098l.008.098-.004.37c-.123 4.08-3.27 7.392-7.246 7.697V22.5a.6.6 0 01-1.192.097L7.4 22.5v-3.494C3.426 18.7.28 15.393.154 11.316l-.004-.388a.6.6 0 01.6-.6zM4.7 4.5a3.3 3.3 0 116.6 0v7a3.3 3.3 0 01-6.6 0v-7z'
        fill='#007AFF'
      />
    </Svg>
  );
}

export default RecordAudioIcon;
