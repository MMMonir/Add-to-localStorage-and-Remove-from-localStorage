import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakedb';
const Cosmetic = (props) => {
    const { name, price, gender, _id } = props.cosmetic;
    const handlePurchase = id => {
        addToDb(id);
    }

    const handleRemove = id => {
        removeFromDb(id);
    }

    return (
        <div>
            <h2>name: {name}</h2>
            <p>_id: {_id} Price: ${price}</p>
            <p><small>gender: {gender}</small></p>
            <button onClick={() => handlePurchase(_id)}>Purchase</button><br/>
            <button onClick={() => handleRemove(_id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;