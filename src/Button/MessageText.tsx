import { CSSProperties } from "react";

export type MessageTextProps = {
  message: string;
};

const MessageText = ({ message }: MessageTextProps) => {
  const style: CSSProperties = {
    color: "white",
    fontSize: "20px",
  };

  return <div style={style}>{message}</div>;
};

export default MessageText;
