// == Import npm
import React from 'react';

// == Import
import './settings.scss';

// == Composant
const Settings = () => (
  <form className="settings">
    <p className="settings__pseudo">Pseudo :</p>
    <input className="settings__input" placeholder="Votre pseudo" type="text" />
  </form>
);

// == Export
export default Settings;
