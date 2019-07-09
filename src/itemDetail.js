import React from 'react';
import './App.css';

function Item( {match} ) {

  return (
    <div className="shop-title">
        <h3>{match.params.id}</h3>
    </div>
  );
}

export default Item;
