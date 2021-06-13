import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function VideoCallIcon(props: SvgProps) {
  return (
    <Svg
      width={25}
      height={17}
      viewBox="0 0 25 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 4.5a4 4 0 00-4-4H4a4 4 0 00-4 4V12a4 4 0 004 4h9a4 4 0 004-4V4.5zM4 1.7h9a2.8 2.8 0 012.8 2.8V12a2.8 2.8 0 01-2.8 2.8H4A2.8 2.8 0 011.2 12V4.5A2.8 2.8 0 014 1.7zm20.293.721a1 1 0 01.207.61v10.18a1 1 0 01-1.524.851l-4.024-2.476A2 2 0 0118 9.882V6.985a2 2 0 01.78-1.585l4.11-3.162a1 1 0 011.403.183zm-4.78 3.93L23.3 3.437v9.415l-3.72-2.288a.8.8 0 01-.38-.682V6.985a.8.8 0 01.312-.634z"
        fill="#007AFF"
      />
    </Svg>
  );
}

export default VideoCallIcon;
