import { CSSProperties } from "react";

const ActionButton = () => {
  const style: CSSProperties = {
    color: "white",
    border: "none",
    backgroundColor: "black",
    fontSize: "20px",
  };
  return <button style={style}>Action</button>;
};
export default ActionButton;
