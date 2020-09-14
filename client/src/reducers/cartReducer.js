import { GET_CART_ITEMS, ADD_TO_CART, REMOVE_FROM_CART, GET_ORDER_FROM_SERVER } from '../constants/cartConstants';

const cartReducer = (state = [], action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            var lastSession = JSON.parse(window.localStorage.getItem('cartItems'));
            if(lastSession) {
                state = lastSession;
            }
            return state;
            break;
        case ADD_TO_CART:
            state.push(action.payload);
            window.localStorage.setItem('cartItems', JSON.stringify(state));
            return state;
            break;

        case REMOVE_FROM_CART:
            for(var i = 0; i < state.length; i++) {
                if(state[i].guid === action.payload) {
                    state.splice(i, 1);
                    break;
                }
            }
            window.localStorage.setItem('cartItems', JSON.stringify(state));
            return state;
            break;
        case GET_ORDER_FROM_SERVER:
            return action.payload;
            break;
        default: return state;
    }
}

export default cartReducer;
