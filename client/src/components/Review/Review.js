import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartItems, sendOrderToServer } from '../../actions/cartActions';

const Review = ({ cart, sendOrderToServer }) => {
    console.log(cart);

    const confirm = () => {
        let telephone = window.localStorage.getItem('telephone');
        sendOrderToServer(telephone, cart);
    };

    return (
        <div className='container'>
            <h2>Review your order</h2>
            <ul>
                {cart.map(i => <li key={i.guid}><strong>{i.name}</strong>: {i.price}</li>)}
            </ul>
            <Link to="/checkout/Confirmation" ><button onClick={() => confirm()} type="submit" className="btn">Confirm</button></Link>
        </div>
    )
};

const mapStateToProps = ({ cart }) => {
    return { cart }
}

export default connect(mapStateToProps, { getCartItems, sendOrderToServer })(Review);
