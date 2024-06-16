import SNSIcon, { SNSIconProps } from "./SNSIcon";
import SNSText, { SNSTextProps } from "./SNSText";
import { CSSProperties } from "react";

type SNSLoginProps = {
  backgroundColor: "#1877F2" | "white" | "black";
  snsIcon: SNSIconProps;
  snsText: SNSTextProps;
};

const SNSLogin = ({ backgroundColor, snsIcon, snsText }: SNSLoginProps) => {
  const style: CSSProperties = {
    padding: "15px",
    display: "flex",
    gap: "15px",
    backgroundColor,
    border: `1px solid ${backgroundColor}`,
    borderRadius: "10px",
    width: "fit-content",
    color: "white",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  };
  return (
    <div style={style}>
      <SNSIcon {...snsIcon} />
      <SNSText {...snsText} />
    </div>
  );
};

export default SNSLogin;
