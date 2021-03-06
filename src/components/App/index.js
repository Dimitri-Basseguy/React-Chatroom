// == Import npm
import React from 'react';

// == Import
import './app.scss';
import Tchatbox from 'src/components/Tchatbox';
import Form from 'src/components/Form';
import Settings from 'src/components/Settings';

// == Composant
const App = () => (
  <div className="app">
    <header className="header">
      <h1>React Chatroom</h1>
    </header>
    <Tchatbox />
    <Form />
    <Settings />
  </div>
);

// == Export
export default App;
