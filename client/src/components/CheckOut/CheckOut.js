import React from 'react';
import { Link } from 'react-router-dom';

class CheckOut extends React.Component {
    render() {
        return (
            <div>
                <h1>Checkout</h1>
                <h2>Choose</h2>
                <Link to="/checkout/pickup" >Pick up</Link>
                <br/>
                <Link to="/checkout/delivered" >Have delivered</Link>
            </div>
        );
    }
};

export default CheckOut;
