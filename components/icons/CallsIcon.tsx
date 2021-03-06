import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function CallsIcon(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M22.38 21.75a3.1 3.1 0 00-.514-4.955l-3.308-1.958-.165-.09a2.6 2.6 0 00-2.465.08l-1.031.599-.12.062a1.4 1.4 0 01-1.574-.283l-4.079-4.079-.09-.1a1.4 1.4 0 01-.13-1.593l.599-1.03a2.6 2.6 0 00-.01-2.631L7.534 2.463a3.1 3.1 0 00-4.956-.513C1.11 3.558.451 5.088.667 6.54c.444 2.975 2.535 6.373 6.25 10.23l.323.319.32.323.006-.005c3.851 3.72 7.249 5.812 10.224 6.256 1.451.216 2.982-.442 4.59-1.913zm-.81-.885c-1.38 1.263-2.575 1.764-3.603 1.61-2.585-.385-5.66-2.23-9.21-5.59l-.586-.561-.41-.408c-3.553-3.69-5.51-6.884-5.907-9.553-.153-1.028.348-2.223 1.61-3.603a1.9 1.9 0 013.038.314L8.46 6.383a1.4 1.4 0 01.005 1.416L7.866 8.83a2.6 2.6 0 00.242 2.96l.128.143 4.119 4.12a2.6 2.6 0 002.923.526l.171-.088 1.082-.627a1.4 1.4 0 011.327-.042l.126.07 3.271 1.936a1.9 1.9 0 01.315 3.037z'
        fill={props.color}
        fillOpacity={0.65}
      />
    </Svg>
  );
}

export default CallsIcon;
