import { GET_ALL_PIZZAS, GET_PIZZA_DETAIL } from '../constants/pizzaConstants';
import fetch from 'isomorphic-fetch';

export const getAllPizzas = () => {
    return dispatch => fetch('http://localhost:3500/api/pizzas').then(json => json.json()).then(data => dispatch(getAllPizzaSuccess(data)));
};

const getAllPizzaSuccess = (pizzas) => {
    return {
        type: GET_ALL_PIZZAS,
        payload: pizzas
    };
};

export const getPizzaDetail = (id) => {
    let pizzaUrl = 'http://localhost:3500/api/pizzas/' + id;
    return dispatch => fetch(pizzaUrl).then(json => json.json()).then(data => dispatch(getPizzaDetailSuccess(data)));
};

const getPizzaDetailSuccess = (pizza) => {
    return {
        type: GET_PIZZA_DETAIL,
        payload: pizza
    };
};
