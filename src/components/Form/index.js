// == Import npm
import React from 'react';
import { Send } from 'react-feather';

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
    ><Send />
    </button>
  </form>
);

// == Export
export default Form;
