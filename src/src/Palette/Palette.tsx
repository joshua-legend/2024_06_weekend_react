import { CSSProperties } from "react";

type PaletteProps = {
  backgroundColor: string;
  text: string;
};

const Palette = ({ backgroundColor, text }: PaletteProps) => {
  const style: CSSProperties = {
    width: "160px",
    height: "70px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: backgroundColor,
  };

  return <div style={style}>{text}</div>;
};

export default Palette;
