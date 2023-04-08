import React from 'react';

const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>please add sum products</p>
    }
    else{
        message = <div>
            <h3>bororollss</h3>
        </div>
    }
    return (
        <div>
            <h3>Order Summary {cart.length}</h3>
            {message}
            {
                cart.map(tshirt => <p
                key={tshirt._id}
                >{tshirt.name} <button onClick={()=> handleRemoveFromCart(tshirt._id)}>delete</button></p>)
            }
        </div>
    );
};

export default Cart;