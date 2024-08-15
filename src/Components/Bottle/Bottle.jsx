import "./Bottle.css";
export default function Bottle({ bottle, handleSelected }) {
  const { id, name, image, price } = bottle;
  return (
    <div className="card">
      <figure>
        <figcaption className="center">{name}</figcaption>
        <img src={image} alt="" />
        <p>
          Price:<small>{price}</small>
        </p>
      </figure>
      <button onClick={() => handleSelected(bottle)} type="button">
        Add to Cart
      </button>
    </div>
  );
}
