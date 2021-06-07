import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function EditChatsIcon(props: SvgProps) {
  return (
    <Svg
      width={23}
      height={24}
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.02 1.351l-.091-.082a1.2 1.2 0 00-1.606.082l-1.131 1.131 2.475 2.475 1.13-1.13.083-.092a1.2 1.2 0 00-.082-1.606l-.778-.778zm-3.264 1.566l.707.707s-8.046 8-8.44 8.441c-.173.194-.223.449-.225.673a.595.595 0 00.6.596c.235.001.5-.043.686-.208.412-.366 8.44-8.441 8.44-8.441l.706.707-9.114 9.116c-.378.378-1.172.605-2.382.68l-.266.014h-.042a.5.5 0 01-.475-.43l-.004-.09.014-.267c.07-1.123.27-1.888.601-2.294l.079-.088 9.115-9.116zm-2.999 1.235l-1.501 1.5H2a.5.5 0 00-.5.5v15a.5.5 0 00.5.5h15a.5.5 0 00.5-.5V9.894L19 8.395v12.757a2 2 0 01-2 2H2a2 2 0 01-2-2v-15a2 2 0 012-2h12.757z"
        fill="#007AFF"
      />
    </Svg>
  );
}

export default EditChatsIcon;
