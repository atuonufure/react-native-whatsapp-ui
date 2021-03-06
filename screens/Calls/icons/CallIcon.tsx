import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function CallIcon(props: SvgProps) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.098 9.184l2.353 1.46c.366.29.11 1.005-.195 1.406l-.066.081-.115.122a2.174 2.174 0 01-1.952.578l-.162-.04-.372-.112c-1.592-.513-3.09-1.395-4.492-2.647l-.011.013c-.14-.13-.276-.263-.41-.397l-.125-.129-.13-.125-.2-.203-.196-.207.012-.012C4.785 7.57 3.903 6.072 3.39 4.48l-.112-.372a2.174 2.174 0 01.539-2.115l.121-.115c.378-.33 1.177-.653 1.488-.26l1.46 2.352a1 1 0 01.1.835l-.046.116-.474.566a1 1 0 00.06.96l.075.103c.424.628.565.898 1.294 1.626.729.729 1.623 1.292 1.623 1.292l.104.075a1 1 0 00.841.107l.119-.047.565-.474.117-.047a1 1 0 01.724.041l.11.06 2.353 1.46-2.353-1.46z'
        fill='#8E8E93'
      />
    </Svg>
  );
}

export default CallIcon;
