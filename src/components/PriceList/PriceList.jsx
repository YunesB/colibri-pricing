import React from 'react';
import ListItem from '../ListItem/ListItem';

function PriceList(props) {

  return (
    <section className="price-list">
      <h1 className="price-list__heading">{props.heading}</h1>
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
    </section>
  );
}

export default PriceList;
