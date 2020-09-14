import React from 'react';
import { Link } from 'react-router-dom';

const Confirmation = () => {
    return (
        <div className='container'>
            <h2>Thanks for your purchase</h2>
            <h3>The pizza is in the oven</h3>
            <Link to="/" ><button className="btn">Back to homepage</button></Link>
        </div>
    )
};

export default Confirmation;
