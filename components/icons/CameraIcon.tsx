import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function CameraIcon(props: SvgProps) {
  return (
    <Svg
      width={27}
      height={23}
      viewBox="0 0 27 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.356 1.522A3 3 0 0015.347.75h-4.064a3 3 0 00-2.01.772l-.797.719A2.951 2.951 0 016.5 3a6 6 0 00-6 6v7.5a6 6 0 006 6H20a6 6 0 006-6V9a6 6 0 00-6-6l-.215-.009a2.615 2.615 0 01-1.536-.664l-.893-.805zm-6.074.428h4.065a1.8 1.8 0 011.206.463l.892.805c.622.56 1.41.9 2.242.97l.264.011C22.65 4.2 24.8 6.349 24.8 9v7.5a4.8 4.8 0 01-4.8 4.8H6.5a4.8 4.8 0 01-4.8-4.8V9a4.8 4.8 0 014.586-4.795l.45-.012a4.152 4.152 0 002.544-1.06l.797-.72a1.8 1.8 0 011.206-.463zM13.25 6a5.75 5.75 0 110 11.5 5.75 5.75 0 010-11.5zM8.7 11.75a4.55 4.55 0 119.1 0 4.55 4.55 0 01-9.1 0z"
        fill={props.color}
        fillOpacity={0.65}
      />
    </Svg>
  );
}

export default CameraIcon;
