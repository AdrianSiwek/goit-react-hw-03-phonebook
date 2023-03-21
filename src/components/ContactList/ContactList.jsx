import React from 'react';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';


const ContactList = ({contacts, onDeleteContact}) => {
    return ( 
        <div></div>
     );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf
    (PropTypes.exact({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    })),
  onDeleteContact: PropTypes.func.isRequired,
};
 
export default ContactList;