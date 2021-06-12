import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function VoiceRecordIcon(props: SvgProps) {
  return (
    <Svg
      width={9}
      height={15}
      viewBox="0 0 9 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.014 5.2v1.743A3.486 3.486 0 004.5 10.429a3.485 3.485 0 003.465-3.093l.015-.188.006-.205V5.2H9v1.757l-.007.232a4.5 4.5 0 01-3.992 4.226L5 13.3h2.3v1H1.7v-1H4v-1.885a4.5 4.5 0 01-3.995-4.26L0 6.943V5.2h1.014zM4.5 0A2.5 2.5 0 017 2.5V7a2.5 2.5 0 01-5 0V2.5A2.5 2.5 0 014.5 0z"
        fill="#60BB58"
      />
    </Svg>
  );
}

export default VoiceRecordIcon;
