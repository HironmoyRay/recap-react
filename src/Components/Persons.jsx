import Person from "./Person";
export default function Persons() {
  const Persons = [
    { name: "HP", age: 26, id: 1 },
    { name: "Tom", age: 27, id: 2 },
    { name: "Rahi", age: 28, id: 3 },
  ];
  return (
    <div>
      <h1>Display the Persons Here:</h1>
      {/* <Person></Person> */}
      {Persons.map((perPerson) => (
        <Person key={perPerson.id} id={perPerson.id} person={perPerson}></Person>
      ))}
    </div>
  );
}
