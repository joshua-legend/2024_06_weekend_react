import { useState } from "react";

const Mybutton = () => {
  const [num, setNum] = useState(0);
  const [isTen, setIsTen] = useState(false);

  const minus = () => {
    setNum((v) => (v === 0 ? 0 : v - 1));
    setIsTen((v) => false);
  };
  const plus = () => {
    setNum((v) => {
      if (v === 10) {
        return 10;
      } else {
        v === 9 ? setIsTen((v1) => true) : setIsTen((v1) => false);
        return v + 1;
      }
    });
  };

  return (
    <div>
      <button onClick={minus}>-</button>
      <span className={isTen ? "text-red-500" : "text-sky-500"}>{num}</span>
      <button onClick={plus}>+</button>
    </div>
  );
};
export default Mybutton;
