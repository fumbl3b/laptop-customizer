import React from 'react';
import FeatureItem from './FeatureItem';
import slugify from 'slugify';

export default function Parts(props) {
  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const options = props.features[feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <FeatureItem
          key={itemHash}
          itemHash={itemHash}
          feature={feature}
          item={item}
          handleUpdate={props.handleUpdate}
          currencyFormat={props.currencyFormat}
          selected={props.selected}
        />
      );
    });

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  });

  return (
    <div>{features}</div>
  );
}
