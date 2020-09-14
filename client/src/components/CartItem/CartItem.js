import React from 'react';

const CartItem = ({ item, rm }) => {
    const { guid, name, image, price, pizzaOne, pizzaTwo,  } = item;

    const removeFromCart = () => {
        rm(guid);
    };

    switch(name) {
        case 'Offer#1 - Two for the prize of one':
            return(
                <li className='cartItem'>
                    <div className='cartItemWrapper'>
                        <img src={pizzaOne.image} className='cartItemImage' />
                        <img src={pizzaTwo.image} className='cartItemImage' />
                        <h2 className='cartItemName'>{name}</h2>
                        <p>{pizzaOne.name} and {pizzaTwo.name}</p>
                        <h3 className='cartItemPrice'>Price: {price}$</h3>
                        <button onClick={() => removeFromCart()} className='rmBtn'>Remove from cart</button>
                    </div>
                </li>
            );
        case 'Offer#2 - Two pizzas and a coke':
            return(
                <li className='cartItem'>
                    <div className='cartItemWrapper'>
                        <img src={pizzaOne.image} className='cartItemImage' />
                        <img src={pizzaTwo.image} className='cartItemImage' />
                        <img src='https://vignette.wikia.nocookie.net/phobia/images/c/c7/PDP_Coca-Cola_HFCS_2L.png/revision/latest?cb=20170818110347' className='cartCokeItemImage' />
                        <h2 className='cartItemName'>{name}</h2>
                        <p>{pizzaOne.name} and {pizzaTwo.name}</p>
                        <h3 className='cartItemPrice'>Price: {price}$</h3>
                        <button onClick={() => removeFromCart()} className='rmBtn'>Remove from cart</button>
                    </div>
                </li>
            );
        case 'Offer#3 - One pizza and a coke':
            return(
                <li className='cartItem'>
                    <div className='cartItemWrapper'>
                        <img src={pizzaOne.image} className='cartItemImage' />
                        <img src='https://vignette.wikia.nocookie.net/phobia/images/c/c7/PDP_Coca-Cola_HFCS_2L.png/revision/latest?cb=20170818110347' className='cartCokeItemImage' />
                        <h2 className='cartItemName'>{name}</h2>
                        <p>{pizzaOne.name}</p>
                        <h3 className='cartItemPrice'>Price: {price}$</h3>
                        <button onClick={() => removeFromCart()} className='rmBtn'>Remove from cart</button>
                    </div>
                </li>
            );
        default:
            return (
                <li className='cartItem'>
                    <div className='cartItemWrapper'>
                        <img src={image} className='cartItemImage' />
                        <h2 className='cartItemName'>{name}</h2>
                        <h3 className='cartItemPrice'>Price: {price}$</h3>
                        <button onClick={() => removeFromCart()} className='rmBtn'>Remove from cart</button>
                    </div>
                </li>
            );
    }
};

export default CartItem;
