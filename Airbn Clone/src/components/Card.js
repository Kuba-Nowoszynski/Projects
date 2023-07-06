import star from "../images/star.svg";

export default function (props) {
  let status =
    props.openSpots > 0
      ? props.openSpots == 1
        ? "last spot"
        : "online"
      : "sold out";

  return (
    <div className="card">
      <img className="photo" src={require(`../images/${props.image}`)} />
      <div className="rating">
        <img src={star} />
        <span className="rate">{props.rate}</span>
        <span>
          ({props.reviews})•{props.country}
        </span>
      </div>
      <p>{props.description}</p>
      <p className="price">
        From ${props.price}
        <span> / person</span>
      </p>
      <div className="status">{status}</div>
    </div>
  );
}
