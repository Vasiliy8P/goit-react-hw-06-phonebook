// import { useState } from "react";
// import PropTypes from 'prop-types';
import './ContactForm.css';
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "redux/selectors";
import { addContact } from 'redux/contactsSlice';

const ContactForm = () => {
    // const [name, setName] = useState('');
    // const [number, setNumber] = useState('')
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const handleSubmitForm = (evt) => {
        evt.preventDefault();
        // onSubmit(name, number);
        const form = evt.target;
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        console.log("handleSubmitForm  form:", number)

        if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
            alert(`${name} is already in contacts`)
        } else {
            dispatch(addContact(name, number))
        }

        form.reset();

        // reset();
    }

    // const handleChange = (evt) => {
    //     const { name, value } = evt.target;
        
    //     switch (name) {
    //         case 'name':
    //             setName(value)
    //             break;
            
    //         case 'number':
    //             setNumber(value)
    //             break;
            
    //         default:
    //             return;
    //     }
    // }

    // const reset = () => {
    //     setName('');
    //     setNumber('');
    // }

    return (
        <form className="ContactForm" onSubmit={handleSubmitForm}>
            <label>
                Name
                <br />
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    // value={name}
                    // onChange={handleChange}
                />
            </label>
            <label>
                Number
                <br />
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    // value={number}
                    // onChange={handleChange}
                />
            </label>
            <button type="submit" className="ContactForm__btn">Add contact</button>
        </form>
    )
}


// class ContactForm extends Component {
//     state = {
//         name: '',
//         number: ''
//     }

//     handleSubmitForm = (evt) => {
//         evt.preventDefault();
//         this.props.onSubmit(this.state);
//         this.reset();
//     }

//     handleChange = (evt) => {
//         this.setState(prevState => ({
//             [evt.target.name]: evt.target.value
//         }))
//     }

//     reset = () => {
//         this.setState({name: '', number: ''})
//     }

//     render() {
//         const { name, number } = this.state;
//         return (
//             <form className="ContactForm" onSubmit={this.handleSubmitForm}>
//                 <label>
//                     Name
//                     <br />
//                     <input
//                         type="text"
//                         name="name"
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                         required
//                         value={name}
//                         onChange={this.handleChange}
//                     />
//                 </label>
//                 <label>
//                     Number
//                     <br />
//                     <input
//                         type="tel"
//                         name="number"
//                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                         required
//                         value={number}
//                         onChange={this.handleChange}
//                     />
//                 </label>
//                 <button type="submit" className="ContactForm__btn">Add contact</button>
//             </form>
//         )
//     }
// }

// ContactForm.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
// }

export default ContactForm;