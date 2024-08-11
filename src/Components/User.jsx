export default function User({user}) {
//   console.log(user)
const {name, email} = user;
  return (
    <div className="box">
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}
