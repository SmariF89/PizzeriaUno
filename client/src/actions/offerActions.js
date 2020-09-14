import { GET_ALL_OFFERS, GET_OFFER_CHOICE } from '../constants/offerConstants';
import fetch from 'isomorphic-fetch';

export const getAllOffers = () => {
    return dispatch => fetch('http://localhost:3500/api/offers').then(json => json.json()).then(data => dispatch(getAllOfferSuccess(data)));
};

const getAllOfferSuccess = (offers) => {
    return {
        type: GET_ALL_OFFERS,
        payload: offers
    };
};

export const getOfferChoice = (id) => {
    let offerUrl = 'http://localhost:3500/api/offers/' + id;
    console.log('Id:', id);
    console.log('Url:', offerUrl);
    return dispatch => fetch(offerUrl).then(json => json.json()).then(data => dispatch(getOfferChoiceSuccess(data)));
};

const getOfferChoiceSuccess = (offer) => {
    console.log('Action:', offer);
    return {
        type: GET_OFFER_CHOICE,
        payload: offer
    };
};
