import { CSSProperties } from "react";
import { changeToCurrency } from "../util";

export type ItemPriceProps = {
  discount?: string;
  price: string;
};

const ItemPrice = ({ discount, price }: ItemPriceProps) => {
  const discountStyle: CSSProperties = {
    color: "red",
    marginRight: "5px",
  };

  return (
    <div>
      {!!discount && <span style={discountStyle}>{discount}%</span>} <span>{changeToCurrency(price, "korea")}</span>
    </div>
  );
};

export default ItemPrice;
