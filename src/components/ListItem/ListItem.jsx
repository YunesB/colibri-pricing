function ListItem(props) {

  const cardData = props.card;

  return (
    <li className="price-item">
      <p className="price-item__name">{cardData.name}</p>
      <p className="price-item__sum">{cardData.price}</p>
    </li>
  );
}

export default ListItem;