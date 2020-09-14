import React from 'react';
import { connect } from 'react-redux';
import { getOfferChoice } from '../../actions/offerActions';
import { getAllPizzas } from '../../actions/pizzaActions';
import { addToCart } from '../../actions/cartActions';
import { Link } from 'react-router-dom';

class OfferChoice extends React.Component {
    componentDidMount() {
        this.setState({offerID: this.props.match.params.offerId})
        const { getOfferChoice, getAllPizzas } = this.props;
        getOfferChoice(this.props.match.params.offerId);
        getAllPizzas();
    }

    constructor(props) {
        super(props);
        this.state = {
            offerID: 0,
            firstSelect: 1,
            secSelect: 1
        };
    }

    addToCart() {
        const { pizza, addToCart } = this.props;
        const { offerID, firstSelect, secSelect } = this.state;

        console.log('Adding offer', offerID, 'to cart');

        if(offerID == 1) {
            console.log('Case 1');
            addToCart({
                guid: (Math.floor((Math.random() * 10000) + 1)),
                name: 'Offer#1 - Two for the prize of one',
                price: Math.max(pizza[firstSelect - 1].price, pizza[secSelect - 1].price),
                delivery: false,
                pizzaOne: pizza[firstSelect - 1],
                pizzaTwo: pizza[secSelect - 1]
            });
        } else if (offerID == 2) {
            console.log('Case 2');
            addToCart({
                guid: (Math.floor((Math.random() * 10000) + 1)),
                name: 'Offer#2 - Two pizzas and a coke',
                price: 3000,
                delivery: true,
                pizzaOne: pizza[firstSelect - 1],
                pizzaTwo: pizza[secSelect - 1]
            });
        } else {
            console.log('Case 3');
            addToCart({
                guid: (Math.floor((Math.random() * 10000) + 1)),
                name: 'Offer#3 - One pizza and a coke',
                price: 1600,
                delivery: false,
                pizzaOne: pizza[firstSelect - 1],
            });
        }
    }

    render() {
        const { offerChoice, pizza } = this.props;
        const { offerID } = this.state;

        if(offerID == 1 || offerID == 2) {
            return(
                <div>
                    <div>{offerChoice.offer}</div>
                    <p>Select first pizza!</p>
                    <select onChange={event => this.setState({firstSelect: event.target.value })} value={this.state.value}>
                        { pizza.map(p => <option key={p.id} value={p.id}> {p.name} - {p.price}kr.</option>) }
                    </select>
                    <p>Select second pizza!</p>
                    <select onChange={event => this.setState({secSelect: event.target.value })} value={this.state.value}>
                        { pizza.map(p => <option key={p.id} value={p.id}> {p.name} - {p.price}kr.</option>) }
                    </select>
                    <button onClick={() => this.addToCart()}>Add to cart</button>
                    <Link to="/Offers">Go back</Link>
                </div>
            );
        }else if(offerID == 3) {
            return(
                <div>
                    <div>{offerChoice.offer}</div>
                    <p>Select a pizza!</p>
                    <select onChange={event => this.setState({firstSelect: event.target.value })} value={this.state.value}>
                        {pizza.map(p => <option key={p.id} value={p.id}> {p.name} - {p.price}kr.</option>)}
                    </select>
                    <button onClick={() => this.addToCart()}>Add to cart</button>
                    <Link to="/Offers">Go back</Link>
                </div>
            );
        }else {
            return(
                <div>
                    <div>Illegal!</div>
                </div>
            );
        }
    };
}

const mapStateToProps = ({ offerChoice, pizza }) => {
    return { offerChoice, pizza }
}

export default connect(mapStateToProps, { getOfferChoice , getAllPizzas, addToCart })(OfferChoice);