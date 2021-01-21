// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './settings.scss';

// == Composant
const Settings = ({ value, setValue, saveValue }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    saveValue();
  };

  return (
    <form className="settings" onSubmit={handleSubmit}>
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
};

Settings.propTypes = {
  value: PropTypes.string.isRequired,
  /* paramètre : la nouvelle valeur */
  setValue: PropTypes.func.isRequired,
  /*  pas de paramètre */
  saveValue: PropTypes.func.isRequired,
};

// == Export
export default Settings;
