// == Import npm
import React from 'react';

// == Import
import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <header className="header">
      <h1>React Chatroom</h1>
    </header>
    <div className="container">
      <div className="tchat">
        <p className="tchat__name">Jhon Doe</p>
        <p className="tchat__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facere reprehenderit libero nisi. Iure possimus culpa quae dolore ab veritatis, cum animi ipsam quasi labore minus tenetur esse magnam impedit.</p>
      </div>
    </div>
    <form className="form">
      <input
        type="text"
        placeholder="Saisissez votre message..."
        className="form__input"
      />
    </form>
  </div>
);

// == Export
export default App;
