import React from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../TextInput/TextInput';
import validator from 'validator';


// 4. If he decides to have it delivered, the next step will be to input the following
// information: name, address, city, telephone and postal code
const initialState = {
    fields: {
        inputName: '',
        address: '',
        telephone: '',
        city: '',
        postalCode: ''
    }
};

class CheckOutDelivered extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    };

    onInput(e) {
        let fields = Object.assign({}, this.state.fields);
        fields[e.target.name] = e.target.value;
        this.setState({ fields });
    };

    onFormSubmit(e) {
        e.preventDefault();
        const { inputName , address, telephone, city, postalCode } = this.state.fields;
        if(inputName === '' ||
           address === '' ||
           telephone === '' ||
           city === '' ||
           postalCode === '' ||
           !validator.isNumeric(telephone) ||
           !validator.isLength(telephone, 7)) { return false; }
        console.log(this.state.fields);
        this.setState(initialState);
    };

    render() {
        const { inputName , address, telephone, city, postalCode } = this.state.fields;
        return (
            <div>
                <form action="" method="get" onSubmit={(e) => this.onFormSubmit(e)}>
                    <h3>Name:</h3>
                    <TextInput
                        onChange={e => this.onInput(e)}
                        name="inputName"
                        value={inputName}
                        validate={val => !val ? 'Name is required': ''} />
                    <h3>Address:</h3>
                    <TextInput
                        onChange={e => this.onInput(e)}
                        name="address"
                        value={address}
                        validate={val => !val ? 'Address is required': ''} />
                    <h3>Telephone:</h3>
                    <TextInput
                        onChange={e => this.onInput(e)}
                        name="telephone"
                        value={telephone}
                        validate={val => !(validator.isNumeric(val) && validator.isLength(val, 7))? 'telephone is required': ''} />
                    <h3>City:</h3>
                    <TextInput
                        onChange={e => this.onInput(e)}
                        name="city"
                        value={city}
                        validate={val => !val ? 'city is required': ''} />
                    <h3>postalCode:</h3>
                    <TextInput
                        onChange={e => this.onInput(e)}
                        name="postalCode"
                        value={postalCode}
                        validate={val => !val ? 'postalCode is required': ''} />
                    <Link to="/checkout/Review" ><button type="submit" className="btn">Confirm</button></Link>
                </form>
                <br/>
                <Link to="/checkout" >Back</Link>
            </div>
        );
    };
};

export default CheckOutDelivered;
