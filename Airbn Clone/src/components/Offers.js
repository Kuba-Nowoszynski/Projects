import Card from "./Card";
import data from "./../data/data";
const cards = data.map((item) => {
  return <Card key={item.id} {...item} />;
});
export default function () {
  return <div className="offers">{cards}</div>;
}
