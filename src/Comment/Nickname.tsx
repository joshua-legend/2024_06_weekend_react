export type NickNameProps = {
  name?: string;
};

const NickName = ({ name = "슬픔이" }: NickNameProps) => {
  return <span className="text-xs font-extrabold text-white">{name}</span>;
};

export default NickName;
