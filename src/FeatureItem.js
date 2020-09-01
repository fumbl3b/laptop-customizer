import React from 'react';
import slugify from 'slugify';

export default function FeatureItem(props) {
    
    
    return (
        <div key={props.itemHash} className="feature__item">
        <input
          type="radio"
          id={props.itemHash}
          className="feature__option"
          name={slugify(props.feature)}
          checked={props.item.name === props.selected[props.feature].name}
          onChange={e => props.handleUpdate(props.feature, props.item)}
          />
          <label htmlFor={props.itemHash} className="feature__label">
            {props.item.name} ({props.currencyFormat.format(props.item.cost)})
          </label>
      </div>
    );
}