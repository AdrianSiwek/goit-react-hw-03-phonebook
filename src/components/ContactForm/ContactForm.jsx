import { Component } from 'react';
import PropTypes from 'prop-types';
import style from './ContactForm.module.css';


class ContactForm extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <form className={style.submit}>
                    <label className={style.label}>
                        Name
                        <input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                    </label>
                    <label className={style.label}>
                    Number
                        <input
                            className={style.input}
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            value={this.state.number}
                            onChange={this.handleChange}
                            required
                        />
                    </label>
                    <button
                        className={style.btn}
                        type="submit"
                        disabled={!this.state.name && !this.state.number}
                    >
                        <span>Add contact</span> 
                    </button>
                </form>
            </div>
        );
    }
}
 
export default ContactForm;