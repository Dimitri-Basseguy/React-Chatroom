# Installation
`yarn add redux react-redux redux-devtools-extension`

## Mise en place du store
- Créer un réducer
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



- Créer un fichier `src/store/index.js`

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


- Utilisation du composant provider pour que nos composants puissent accéder au _store_. Par exemple dans src/index.js

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

# Connexion d'un composant au store
- Créer un dossier dans src/containers (garder le même chemin que src/components pour le composant) : assistant pour le composant, qui va faire le lien avec le _store_

``` javascript
import { connect } from 'react-redux';

import LeComposant from 'src/components/...../LeComposant';

const mapStateToProps = (state) => (
  {
    // nom de la prop à remplir: donnée à récupérer dans le state
  };
);

const mapDispatchToProps = (dispatch) => {
  return {
    // nom de la prop à remplir: callback qui contient un appel à dispatch
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  )(LeComposant);
 
```


- Utiliser le nouveau composant à la place du comp de présentation (remplacer _components_ dans l'import par _containers_), et supprimer le cas échéant les props qui sont lièes au state.

## mapStateToProps : les props qui lisent une valeur du state
- indiquer le nom de la prop à remplir et la propriété du state qui correspond. Par exemple :

``` javascript
const mapStateToProps = (state) => {
  return {
    // nom de la prop à remplir: donnée à récupérer dans le state
    messages: state.listMessages,
  };
};
```

=> on va injecter _state.listMessages_ la prop _messages_ du composant _LeComposant_

## mapDispatchToProps : les props qui doivent envoyer une action au store

