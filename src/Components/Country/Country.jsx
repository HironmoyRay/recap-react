import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleSelectedCountries }) => {
  //   console.log(country);
  const { name, flags, capital } = country;
  const [visited, setVisited] = useState(false);
  const [selected, setSelected] = useState(false);
  const handleSelected = () => {
    setSelected(!selected);
  };
  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className="box">
      <h1>{name.common}</h1>
      <hr />
      <div className="img-div">
        <img src={flags.png} alt="" />
      </div>
      <h2>{capital}</h2>
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      <button
        onClick={() => {
          handleSelectedCountries(country);
          handleSelected();
        }}
      >
        {selected ? "Selected" : "Select"}
      </button>
    </div>
  );
};

export default Country;
