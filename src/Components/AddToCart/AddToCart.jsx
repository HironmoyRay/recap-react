export default function AddToCart({ selected }) {
  return (
    <div className="center">
      <h2>Your Product</h2>
      <h3>{selected.length}</h3>
      <ul>
        {selected.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
