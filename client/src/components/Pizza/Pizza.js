import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const Pizza = ({ pizza }) => {
    const { id, name, image } = pizza;
    return (
        <div className='pizza-wrapper'>
            <div className='pizza-image'>
                <Link className='pizza-name' to={`/pizzas/${id}`}>
                    <img src={image} alt="" />
                </Link>
            </div>
            <Link className='pizza-name' to={`/pizzas/${id}`}>{name}</Link>
        </div>
    );
};

Pizza.propTypes = {
    pizza: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string
    })
};

export default Pizza;
