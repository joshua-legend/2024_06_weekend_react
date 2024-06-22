import Item from "./Musinsa/Item";

function App() {
  return (
    <div className="App">
      <div className="w-6 h-6 rounded-full border border-gray-200 overflow-hidden">
        <img className="w-full h-full object-cover" src="food.png" alt="" />
      </div>
      <Item itemImage={{ imageSrc: "shoe.jpg" }} itemInfo={{ itemName: "무신사 스탠다드" }} itemPrice={{ price: "120000" }} />
      <Item itemImage={{ imageSrc: "shoe1.jpg" }} itemInfo={{ itemName: "탠디" }} itemPrice={{ price: "112000", discount: "33" }} />
    </div>
  );
}

export default App;
