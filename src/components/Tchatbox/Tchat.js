// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './tchatbox.scss';

// == Composant
const Tchat = ({ author, content }) => (
  <div className="tchat">
    <p className="tchat__author">{author}</p>
    <div className="tchat__arrow" />
    <p className="tchat__text">{content}</p>
  </div>
);

Tchat.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

// == Export
export default Tchat;
