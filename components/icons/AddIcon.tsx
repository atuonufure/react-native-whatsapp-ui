import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function AddIcon(props: SvgProps) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <Path
        d='M10.1.706L10.2.7a.8.8 0 01.794.7l.006.1v7.7h7.7a.8.8 0 01.794.7l.006.1a.8.8 0 01-.7.794l-.1.006H11v7.7a.8.8 0 01-.7.794l-.1.006a.8.8 0 01-.794-.7l-.006-.1v-7.7H1.7a.8.8 0 01-.794-.7L.9 10a.8.8 0 01.7-.794l.1-.006h7.7V1.5a.8.8 0 01.7-.794L10.2.7l-.1.006z'
        fill='#007AFF'
      />
    </Svg>
  );
}

export default AddIcon;
