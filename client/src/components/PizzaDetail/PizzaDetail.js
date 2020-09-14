import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPizzaDetail } from '../../actions/pizzaActions';
import { addToCart } from '../../actions/cartActions';

class PizzaDetail extends React.Component {
    componentDidMount() {
        const { getPizzaDetail } = this.props;
        getPizzaDetail(this.props.match.params.pizzaId);
        //cursor:url(this.props.pizzaDetail.image);

    }

    addToCart() {
        const { addToCart, pizzaDetail } = this.props;
        pizzaDetail.guid = (Math.floor((Math.random() * 10000) + 1));
        addToCart(pizzaDetail);
    }

    render() {
        const { pizzaDetail } = this.props;
        return(
            <div className='pizza-wrapper'>
                <div className='pizza-image'>
                    <img src={pizzaDetail.image} alt="" />
                </div>
                <div className='pizza-name'>{pizzaDetail.name}</div>
                <div className='pizza-description'>{pizzaDetail.description}</div>
                <div className='pizza-price'><strong>${pizzaDetail.price}</strong></div>
                <button className='button' onClick={() => this.addToCart()}>Add to cart</button>
                <Link to="/" >Go back</Link>
            </div>
        );
    };
}

PizzaDetail.propTypes = {
    pizzaDetail: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string
    })
};

const mapStateToProps = ({ pizzaDetail, cart }) => {
    return { pizzaDetail, cart }
}

export default connect(mapStateToProps, { getPizzaDetail, addToCart })(PizzaDetail);
