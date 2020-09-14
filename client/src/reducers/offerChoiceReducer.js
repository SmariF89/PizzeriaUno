import { GET_OFFER_CHOICE } from '../constants/offerConstants';

const offerChoiceReducer = (state = {}, action) => {
    switch(action.type) {
        case GET_OFFER_CHOICE: return action.payload;
        default: return state;
    }
};

export default offerChoiceReducer;
