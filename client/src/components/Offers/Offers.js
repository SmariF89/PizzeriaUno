import React from 'react';
import { connect } from 'react-redux';
import Offer from '../Offer/Offer';
import { getAllOffers } from '../../actions/offerActions';

class Offers extends React.Component {
    componentDidMount() {
        const { getAllOffers } = this.props;
        getAllOffers();
    }
    render() {
        const { offer } = this.props;
        return (
            <div className="container">
                {offer.map(p => <Offer key={p.id} offerstr={p} />)}
            </div>
        );
    }
};

const mapStateToProps = ({ offer }) => {
    return { offer }
}

export default connect(mapStateToProps, { getAllOffers })(Offers);
