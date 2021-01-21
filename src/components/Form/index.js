// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Send } from 'react-feather';

// == Import
import './form.scss';

// == Composant
const Form = ({ message, setMessage /* saveMessage */ }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // saveMessage();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Saisissez votre message..."
        className="form__input"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button
        type="submit"
        className="form__btn"
      ><Send />
      </button>
    </form>
  );
};

Form.propTypes = {
  message: PropTypes.string.isRequired,
  /** paramètre : la nouvelle valeur */
  setMessage: PropTypes.func.isRequired,
  /** pas de paramètre */
  // saveMessage: PropTypes.func.isRequired,
};

// == Export
export default Form;
