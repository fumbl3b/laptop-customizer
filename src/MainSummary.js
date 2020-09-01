import React from 'react';
import Cart from './Cart';
import SummaryTotal from './SummaryTotal';

export default function MainSummary(props) {
    const total = Object.keys(props.selected).reduce((acc, curr) => acc + props.selected[curr].cost, 0);
   
    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <Cart
                features={props.features}
                selected={props.selected}
                currencyFormat={props.currencyFormat}
            />
            <SummaryTotal 
                currencyFormat={props.currencyFormat}
                total={total}
            />
        </section>
    );
}