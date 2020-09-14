import React from 'react';
import CartItem from '../CartItem/CartItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllPizzas } from '../../actions/pizzaActions';
import { getCartItems, removeFromCart } from '../../actions/cartActions';

class Cart extends React.Component {
    /* Fetch stored items from cookies and populate it */
    componentDidMount() {
        /* Get all pizzas from server */
        const { cart, getCartItems } = this.props;
        getCartItems();

        console.log(cart);

        /* Put them into the local state */
        this.setState({items : cart});
    }

    constructor(props) {
        super(props);
        this.removeFromCart = this.removeFromCart.bind(this);
        this.state = {
            items: []
        }
    }

    /* Remove from store */
    /* Remove from localStorage */
    /* Get items and reset state */
    removeFromCart(name) {
        const { removeFromCart } = this.props;
        removeFromCart(name);

        const { cart, getCartItems } = this.props;
        getCartItems();

        /* Put them into the local state */
        this.setState({items : cart});
    }

    total() {
        let { items } = this.state;
        var x = 0;
        for(var i = 0; i < items.length; i++) {
            x += items[i].price
        }
        return x;
    }

    render() {
        let { items } = this.state;
        if(typeof items !== 'undefined' && items.length > 0) {
            let total = this.total();
            return (
                <div className="container">
                    <h1>Cart</h1>
                    <ul>
                        {items.map(i => <CartItem key={i.guid} item={i} rm={this.removeFromCart} />)}
                    </ul>
                    <h3>Total: {total}$</h3>
                    <Link to="/checkout" >Go to checkout</Link>
                </div>
            );
        }else {
            return (
                <div className="container">
                    <h1>You have not added any pizzas to the cart.</h1>
                </div>
            );
        }
    }
};

const mapStateToProps = ({ pizza, cart }) => {
    return { pizza, cart }
}

export default connect(mapStateToProps, { getAllPizzas, getCartItems, removeFromCart })(Cart);
