import {
  CHANGE_INPUT_PSEUDO,
  SAVE_PSEUDO,
  CHANGE_INPUT_MESSAGE,
  SAVE_MESSAGE,
} from 'src/actions/chat';
/*
- Pouvoir saisir un message et l'ajouter aux autres
  | - champ contrôler... on s'inspir de Settings
  | - on ne modifie pas un tableau dans le state, on en crée une copie
*/
const initialState = {
  // données temporaires
  messages: [
    /*
    {
      id: 1,
      author: 'Chow Yunfat',
      content: 'lorem ispum',
      owner: true,
    },
    */
  ],
  // pseudo actuel de l'user
  pseudo: '',
  // contenu de l'input permettant de changer le pseudo
  inputPseudo: '',
  // contenu de l'input permettant de changer le message
  inputMessage: '',
};

const chatReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_PSEUDO:
      return {
        ...state,
        inputPseudo: action.value,
      };

    case SAVE_PSEUDO:
      return {
        // on déverse lme infos du state actuel
        ...state,
        // on ecrase certaines propriétés du state
        pseudo: state.inputPseudo,
        // on vide le champ input
        inputPseudo: '',
      };

    case CHANGE_INPUT_MESSAGE:
      return {
        ...state,
        inputMessage: action.message,
      };

    default: return state;
  }
};

export default chatReducer;
