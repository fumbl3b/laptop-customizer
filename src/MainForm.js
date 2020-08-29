import React from 'react';
import Parts from './Parts';

export default function MainForm (props) {
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            <Parts 
              features={props.features}
              selected={props.selected}
              handleUpdate={props.handleUpdate}
              currencyFormat={props.currencyFormat}
            />
          </form>
    );
}