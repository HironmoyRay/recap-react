import { useEffect, useState } from "react";
import "./Bottles.css"
import Bottle from "../Bottle/Bottle";
function Bottles() {
  const [bottles, setBottles] = useState([]);
  useEffect(() => {
    fetch("../../../public/json data/bottle.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  console.log(bottles);

  return (
    <div>
      <h1>Hello Bottles</h1>
      <div className="card-container">
        {
            bottles.map(bottle=> <Bottle key={bottle.id} bottle={bottle}></Bottle>)
        }
      </div>
    </div>
  );
}

export default Bottles;
