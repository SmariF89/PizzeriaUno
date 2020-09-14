import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducers';
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart';
import Offers from './components/Offers/Offers';
import About from './components/About/About';
import PizzaDetail from './components/PizzaDetail/PizzaDetail';
import CheckOut from './components/CheckOut/CheckOut';
import OfferChoice from './components/OfferChoice/OfferChoice';
import NavigationBar from './components/NavigationBar/NavigationBar';
import CheckOutDelivered from './components/CheckOutDelivered/CheckOutDelivered';
import CheckOutPickUp from './components/CheckOutPickUp/CheckOutPickUp';
import Review from './components/Review/Review';
import Confirmation from './components/Confirmation/Confirmation';


const App = () => {
    return (
        <div>
            <NavigationBar />
            <Switch>
                <Route exact path="/pizzas" render={() => {
                    return <Redirect to="/" />;
                }} />
                <Route exact path="/" component={Menu} />
                <Route path="/cart" component={Cart} />
                <Route exact path="/offers" component={Offers} />
                <Route path="/About" component={About} />
                <Route path="/pizzas/:pizzaId" component={PizzaDetail} />
                <Route path="/offers/:offerId" component={OfferChoice} />
                <Route exact path="/checkout" component={CheckOut} />
                <Route path="/checkout/pickup" component={CheckOutPickUp} />
                <Route path="/checkout/delivered" component={CheckOutDelivered} />
                <Route path="/checkout/Confirmation" component={Confirmation} />
                <Route path="/checkout/Review" component={Review} />
            </Switch>
        </div>
    );
};

ReactDOM.render(
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
        <Router><App /></Router>
    </Provider>, document.getElementById('app')
);
