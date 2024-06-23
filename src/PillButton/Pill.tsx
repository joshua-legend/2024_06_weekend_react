import { CSSProperties } from "react";
import Circle from "./Circle";
import CircleWithX from "./CircleWithX";

type Pillprops = {
  text: string;
  backgroundColor: string;
};

const Pill = ({ text, backgroundColor }: Pillprops) => {
  const style: CSSProperties = {
    display: "flex",
    alignItems: "center",
    border: "1px solid #dbdbdb",
    borderRadius: "30px",
    gap: "6px",
    padding: "5px",
    width: "fit-content",
  };
  return (
    <div style={style}>
      <Circle backgroundColor={backgroundColor} />
      <span style={{ lineHeight: "2px" }}>{text}</span>
      <CircleWithX />
    </div>
  );
};

export default Pill;
