# Installation
`yarn add redux react-redux redux-devtools-extension`

# Mise en place du store
- créer un réducer
``` javascript
const initialState = {
  // ici l'état initial
};

const nameForTheReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default: return state;
  }
};

export default nameForTheReducer;
```



- créer un fichier `src/store/index.js`

``` javascript
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import reducer from 'src/reducers/nameForTheReducer';

const store = createStore(
  // reducer
  reducer,
  // enhancer
  devToolsEnhancer(),
);

export default store;
```


- utilisation du composant provider pour que nos composants puissent accéder au _store_. Par exemple dans src/index.js

``` javascript
import { Provider } form 'react-redux';
import store from 'src/store';

const rootReactElement = (
  <Provider store={store}>
    <App />;
  </Provider>
);
```
on peut alors visualiser le _state_ avec redux dev tools

