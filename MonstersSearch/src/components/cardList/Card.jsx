export default function Card({ email, id, name }) {
  return (
    <div className="card">
      <img src={`https://robohash.org/${id}?set=set2`} alt="monster" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}
