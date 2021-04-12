import React from 'react';
import ListItem from '../ListItem/ListItem';

function PriceList(props) {

  return (
    <ul className="prices">
      <li className="price-item price-item_heading">
        <p className="price-item__name">Наименование услуги</p>
        <p className="price-item__sum">Цена (тенге)</p>
      </li> 
      {props.data
          .map((item) => (
            <ListItem
              card={item}
              key={item.name}
            />
        ))}
    </ul>
  );
}

export default PriceList;
