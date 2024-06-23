import { CSSProperties } from "react";
import { IconType } from "react-icons";

type Status = {
  info: "#27437C";
  check: "#284D30";
  warning: "#7A2A32";
};

export type StatusIconProps = {
  color: keyof Status;
  Icon: IconType;
};

const StatusIcon = ({ color, Icon }: StatusIconProps) => {
  const statusObj: Status = {
    check: "#284D30",
    info: "#27437C",
    warning: "#7A2A32",
  };

  const style: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: statusObj[color],
    border: "50%",
    fontSize: "20px",
  };

  return (
    <span style={style}>
      <Icon />
    </span>
  );
};
export default StatusIcon;
