import { CSSProperties } from "react";

type HardButtonProps = {
  content: string;
};

const HardButton = ({ content }: HardButtonProps) => {
  const ButtonStyle: CSSProperties = {
    fontSize: "32px",
    color: "white",
    backgroundColor: "#205BF3",
    padding: "10px 45px",
    border: "1px solid #205BF3",
  };

  return <button style={ButtonStyle}>{content}</button>;
};

export default HardButton;
