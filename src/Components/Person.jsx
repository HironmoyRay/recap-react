export default function Person(props) {
  const card = {
    textAlign: "center",
    margin: "20px",
    padding: "10px 20px",
    border: "1px solid gray",
    borderRadius: "10px",
  };
  const { person, id } = props;
  console.log(props);
  
  return (
    <div style={card}>
      <p>Id: {id}</p>
      <p>Name:{person.name}</p>
      <p>Age:{person.age}</p>
    </div>
  );
}
