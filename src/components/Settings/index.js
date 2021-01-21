// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './settings.scss';

// == Composant
const Settings = ({ value, setValue }) => (
  <form className="settings">
    <input
      className="settings__input"
      type="text"
      placeholder="Votre pseudo"
      value={value}
      onChange={(e) => {
        console.log(`nouvelle valeur: ${e.target.value}`);
        setValue(e.target.value);
      }}
    />
  </form>
);

Settings.propTypes = {
  value: PropTypes.string.isRequired,
  /* paramètre : la nouvelle valeur */
  setValue: PropTypes.func.isRequired,
};

// == Export
export default Settings;
