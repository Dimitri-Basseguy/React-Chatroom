// == Import npm
import React from 'react';

// == Import
import Tchat from './Tchat';
import './tchatbox.scss';

// == Composant
const Tchatbox = () => (
  <div className="container">
    <Tchat />
    <Tchat />
  </div>
);

// == Export
export default Tchatbox;
