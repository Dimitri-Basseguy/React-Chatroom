// == Import npm
import React from 'react';

// == Import
import './form.scss';

// == Composant
const Form = () => (
  <form className="form">
    <input
      type="text"
      placeholder="Saisissez votre message..."
      className="form__input"
    />
    <button
      type="submit"
      className="form__btn"
    >Ok
    </button>
  </form>
);

// == Export
export default Form;
