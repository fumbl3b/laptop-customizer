import React from 'react';
import Cart from './Cart';

export default function MainSummary(props) {
    const total = Object.keys(props.selected).reduce(
        (acc, curr) => acc + props.selected[curr].cost,
        0
      );
   
    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <Cart
                features={props.features}
                selected={props.selected}
                currencyFormat={props.currencyFormat}
            />
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {props.currencyFormat.format(total)}
                </div>
            </div>
        </section>
    );
}