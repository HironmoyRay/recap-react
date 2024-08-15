import "./Bottle.css"
export default function Bottle({ bottle }) {
  const { id, name, image, price } = bottle;
  return (
    <div className='card'>
      <figure>
        <figcaption className='center'>{name}</figcaption>
        <img src={image} alt="" />
      <p>Price:<small>{price}</small></p>
      </figure>
    </div>
  );
}
