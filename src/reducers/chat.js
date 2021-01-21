import { CHANGE_INPUT_PSEUDO, SAVE_PSEUDO } from 'src/actions/chat';

const initialState = {
  // données temporaires
  messages: [
    {
      id: 1,
      author: 'Chow Yunfat',
      content: 'lorem ispum',
    },
    {
      id: 2,
      author: 'Chow Yunfat',
      content: 'state lorem dolor',
    },
    {
      id: 3,
      author: 'Chow Yunfat',
      content: 'lorem amet',
    },
  ],
  // pseudo actuel de l'user
  pseudo: '',
  // contenu de l'input permettant de changer le pseudo
  inputPseudo: '',
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

    default: return state;
  }
};

export default chatReducer;
