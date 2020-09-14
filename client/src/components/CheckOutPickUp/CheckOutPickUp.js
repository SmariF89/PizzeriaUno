import React from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../TextInput/TextInput';
import validator from 'validator';

const initialState = {
    fields: {
        inputName: '',
        telephone: ''
    }
};

class CheckOutPickUp extends React.Component {
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
        const { inputName , telephone } = this.state.fields;
        if(inputName === '' || telephone === '' || !validator.isNumeric(telephone) || !validator.isLength(telephone, 7)) { return false; }
        console.log('From Pickup', telephone);
        this.setState(initialState);

        window.localStorage.setItem('telephone', telephone);
        document.getElementById('contBtn').classList.remove('checkoutCont');
    };

    render() {
        const { inputName , telephone } = this.state.fields;
        return (
            <div>
                <form action='' method="get" onSubmit={(e) => this.onFormSubmit(e)}>
                    <h3>Name:</h3>
                    <TextInput
                        placeholder="Name"
                        onChange={e => this.onInput(e)}
                        name="inputName"
                        value={inputName}
                        validate={val => !val ? 'Name is required': ''} />
                    <h3>Telephone:</h3>
                    <TextInput
                        onChange={e => this.onInput(e)}
                        name="telephone"
                        value={telephone}
                        validate={val => !(validator.isNumeric(val) && validator.isLength(val, 7))? 'telephone is required': ''} />
                    <button type="submit" className="btn">Confirm</button>
                    <Link id='contBtn' className='checkoutCont' to="/checkout/Review">Continue</Link>
                </form>
                <br/>
                <Link to="/checkout" >Back</Link>
            </div>
        );
    };
};

export default CheckOutPickUp;

// 5. If he decides to pickup, the next step will be to input only the name and
// telephone
