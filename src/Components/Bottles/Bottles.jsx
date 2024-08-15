import { useEffect, useState } from "react";
import AddToCart from "../AddToCart/AddToCart";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
function Bottles() {
  const [bottles, setBottles] = useState([]);
  useEffect(() => {
    fetch("../../../public/json data/bottle.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  console.log(bottles);

  const [selected,setSelected] = useState([]);

  const handleSelected = (bottle)=>{
    console.log("Hello");
    const newSelected = [...selected, bottle];
    setSelected(newSelected);
  }

  console.log(selected);

  return (
    <>
      <h1>Hello Bottles</h1>
      <div className="bottle-section">
        <div className="card-container">
          {bottles.map((bottle) => (
            <Bottle key={bottle.id} bottle={bottle} handleSelected={handleSelected}></Bottle>
          ))}
        </div>
        <AddToCart selected={selected}></AddToCart>
      </div>
    </>
  );
}

export default Bottles;
