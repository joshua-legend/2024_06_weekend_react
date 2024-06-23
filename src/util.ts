const nationsCurreny = {
  korea: "원",
  japan: "엔",
  china: "위안",
};
export const changeToCurrency = (str: string, nation: "korea" | "japan" | "china") => Number(str).toLocaleString() + nationsCurreny[nation];

export const commentTimeStamp = () => {
  const date = new Date().toLocaleDateString();
  const [_, time] = new Date().toLocaleTimeString().split(" ");
  return date + time;
};
