// == Import npm
import React from 'react';

// == Import
import './app.scss';
import Tchatbox from 'src/containers/Tchatbox';
import Form from 'src/components/Form';
import Settings from 'src/components/Settings';

// Temp Data
const message = [
  {
    id: 1,
    author: 'Chow Yunfat',
    content: 'lorem ispum',
  },
  {
    id: 2,
    author: 'Chow Yunfat',
    content: 'lorem dolor',
  },
  {
    id: 3,
    author: 'Chow Yunfat',
    content: 'lorem amet',
  },
];

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
