import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function EditButtonIcon(props: SvgProps) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18z"
        fill="#EDEDFF"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.06 22.12l3.128 3.13c-.208.15-3.36 1.758-4.126.992-.766-.765.848-3.914.998-4.121zm9.69-9.741l3.182 3.182-8.656 8.654-3.182-3.182 8.656-8.654zm3.282-1.866l1.767 1.768a1 1 0 01.084 1.32l-.084.094-.806.806-3.182-3.182.806-.806a1 1 0 011.415 0z"
        fill="#007AFF"
      />
    </Svg>
  );
}

export default EditButtonIcon;
