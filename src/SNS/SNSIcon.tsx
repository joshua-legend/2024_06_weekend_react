import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";

type IconTypeLimited = typeof FaFacebook | typeof FaGoogle | typeof FaApple;

export type SNSIconProps = {
  Icon: IconTypeLimited;
};

const SNSIcon = ({ Icon }: SNSIconProps) => {
  return (
    <span>
      <Icon />
    </span>
  );
};

export default SNSIcon;
