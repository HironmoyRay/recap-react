export default function Person(props) {
  const card = {
    textAlign: "center",
    margin: "20px",
    padding: "10px 20px",
    border: "1px solid white",
    borderRadius: "10px",
  };
  const { person, id } = props;
//   console.log(props);

const handleClick = ()=>{
    alert(`${person.name} is Clicked. His id is 0${id}`)
}
  
  return (
    <div style={card} onClick={handleClick}>
      <p>Id: {id}</p>
      <p>Name:{person.name}</p>
      <p>Age:{person.age}</p>
    </div>
  );
}
