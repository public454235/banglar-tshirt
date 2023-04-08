import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt, handleAddToCart}) => {
    const {picture, index, price,name} = tshirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>Name:{name}</h4>
            <p>Price: {price}</p>
            <button onClick={()=>handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;