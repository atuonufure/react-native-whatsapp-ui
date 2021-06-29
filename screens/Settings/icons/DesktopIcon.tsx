import * as React from "react"
import Svg, { SvgProps, Rect, Path } from "react-native-svg"

function DesktopIcon(props: SvgProps) {
  return (
    <Svg
      width={29}
      height={29}
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={29} height={29} rx={6} fill="#07AD9F" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.5 7.5a1 1 0 011 1V19h-16V8.5a1 1 0 011-1h14zM25.25 20v.5a1 1 0 01-1 1H4.75a1 1 0 01-1-1V20h21.5zM8 9h13v8.5H8V9z"
        fill="#fff"
      />
    </Svg>
  )
}

export default DesktopIcon
