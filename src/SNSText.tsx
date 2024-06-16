export type SNSTextProps = {
  sns: "Facebook" | "Google" | "Apple";
};

const SNSText = ({ sns }: SNSTextProps) => {
  return <span>Start With {sns}</span>;
};

export default SNSText;
