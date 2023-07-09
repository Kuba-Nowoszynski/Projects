import Card from "./Card";

export default function CardList({ monsters }) {
  return (
    <div className="cardList">
      {monsters.map((monster) => (
        <Card key={monster.id} {...monster} />
      ))}
    </div>
  );
}
