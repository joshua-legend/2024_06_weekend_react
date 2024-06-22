import { CSSProperties } from "react";

type CircleProps = {
  backgroundColor: string;
};

const Circle = ({ backgroundColor }: CircleProps) => {
  const style: CSSProperties = {
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    backgroundColor: backgroundColor,
  };

  return <div style={style}></div>;
};
export default Circle;
