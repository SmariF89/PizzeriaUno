import { GET_CART_ITEMS, ADD_TO_CART, REMOVE_FROM_CART, GET_ORDER_FROM_SERVER } from '../constants/cartConstants';
import fetch from 'isomorphic-fetch';

export const addToCart = (item) => {
    console.log(item);
    return {
        type: ADD_TO_CART,
        payload: item
    };
};

export const getCartItems = () => {
    return {
        type: GET_CART_ITEMS,
        payload: ''
    }
}

export const removeFromCart = (item) => {
    return {
        type: REMOVE_FROM_CART,
        payload: item
    }
}

export const sendOrderToServer = (telephone, cart) => {
    console.log('From action:', cart);
    return dispatch => fetch('http://localhost:3500/api/orders/' + telephone, {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(cart)
    }).then(resp => {
        console.log(resp);
        console.log(dispatch);
    });
};

export const getOrderFromServer = (telephone) => {
    let orderUrl = 'http://localhost:3500/api/orders/' + telephone;
    return dispatch => fetch(orderUrl).then(json => json.json()).then(data => dispatch(getOrderFromServerSuccess(data)));
};

const getOrderFromServerSuccess = (order) => {
    return {
        type: GET_ORDER_FROM_SERVER,
        payload: order
    };
};
