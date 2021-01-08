// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import Tchat from './Tchat';
import './tchatbox.scss';

// == Composant
const Tchatbox = ({ messages }) => (
  <div className="container">
    {messages.map((message) => (
      <Tchat key={message.id} {...message} />
    ))}
  </div>
);

Tchatbox.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default Tchatbox;
