import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const Offer = ({ offerstr }) => {
    const {id, offer, price, validFor } = offerstr;
    console.log('HUNDUR3');
    return (
        <div className='pizza-wrapper'>
            <div className='pizza-name'>Offer#{id} - {offer}</div>
            <div className='pizza-description'>Valid for: {validFor}</div>
            <div className='pizza-price'>Price: {price}</div>
            <Link to={`/offers/${id}`}>Choose offer</Link>
        </div>
    );
};

Offer.propTypes = {
    offer: PropTypes.shape({
        offer: PropTypes.string,
        price: PropTypes.number,
        validFor: PropTypes.string
    })
};

export default Offer;
