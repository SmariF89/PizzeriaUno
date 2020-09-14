import { combineReducers } from 'redux';
import pizza from './pizzaReducer';
import order from './orderReducer';
import offer from './offerReducer';
import pizzaDetail from './pizzaDetailReducer';
import offerChoice from './offerChoiceReducer';
import cart from './cartReducer';

export default combineReducers({
    pizza, order, offer, pizzaDetail, offerChoice, cart
});
