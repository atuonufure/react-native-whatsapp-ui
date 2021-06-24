import * as React from 'react';
import Svg, { SvgProps, Mask, Path } from 'react-native-svg';

function TakePhoto(props: SvgProps) {
  return (
    <Svg
      width={71}
      height={71}
      viewBox='0 0 71 71'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <Mask
        id='prefix__a'
        maskUnits='userSpaceOnUse'
        x={0}
        y={0}
        width={71}
        height={71}
        fill='#000'>
        <Path fill='#fff' d='M0 0h71v71H0z' />
        <Path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M70 35.5C70 16.446 54.554 1 35.5 1 16.446 1 1 16.446 1 35.5 1 54.554 16.446 70 35.5 70 54.554 70 70 54.554 70 35.5zm-64 0C6 19.208 19.208 6 35.5 6S65 19.208 65 35.5 51.792 65 35.5 65 6 51.792 6 35.5z'
        />
      </Mask>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M70 35.5C70 16.446 54.554 1 35.5 1 16.446 1 1 16.446 1 35.5 1 54.554 16.446 70 35.5 70 54.554 70 70 54.554 70 35.5zm-64 0C6 19.208 19.208 6 35.5 6S65 19.208 65 35.5 51.792 65 35.5 65 6 51.792 6 35.5z'
        fill='#fff'
      />
      <Path
        d='M35.5 2C54.002 2 69 16.998 69 35.5h2C71 15.894 55.106 0 35.5 0v2zM2 35.5C2 16.998 16.998 2 35.5 2V0C15.894 0 0 15.894 0 35.5h2zM35.5 69C16.998 69 2 54.002 2 35.5H0C0 55.106 15.894 71 35.5 71v-2zM69 35.5C69 54.002 54.002 69 35.5 69v2C55.106 71 71 55.106 71 35.5h-2zM35.5 5C18.655 5 5 18.655 5 35.5h2C7 19.76 19.76 7 35.5 7V5zM66 35.5C66 18.655 52.345 5 35.5 5v2C51.24 7 64 19.76 64 35.5h2zM35.5 66C52.345 66 66 52.345 66 35.5h-2C64 51.24 51.24 64 35.5 64v2zM5 35.5C5 52.345 18.655 66 35.5 66v-2C19.76 64 7 51.24 7 35.5H5z'
        fill='#000'
        fillOpacity={0.2}
        mask='url(#prefix__a)'
      />
    </Svg>
  );
}

export default TakePhoto;
