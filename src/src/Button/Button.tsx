import { CSSProperties } from "react";
import { BorderRadius, Colors, bgColorObj, borderRadiusObj } from "../styles";

type ButtonProps = {
  content: string;
  backgroundColor: keyof Colors;
  borderRadius: keyof BorderRadius;
};

const Button = ({ content, backgroundColor, borderRadius }: ButtonProps) => {
  const ButtonStyle: CSSProperties = {
    fontSize: "32px",
    color: "white",
    backgroundColor: bgColorObj[backgroundColor],
    padding: "10px 45px",
    border: `1px solid ${bgColorObj[backgroundColor]}`,
    borderRadius: borderRadiusObj[borderRadius],
  };

  return <button style={ButtonStyle}>{content}</button>;
};

export default Button;
