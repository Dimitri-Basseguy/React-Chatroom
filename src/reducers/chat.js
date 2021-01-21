import { CHANGE_INPUT_PSEUDO } from 'src/actions/chat';

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
  inputPseudo: '',
};

const chatReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_PSEUDO:
      return {
        ...state,
        inputPseudo: action.value,
      };

    default: return state;
  }
};

export default chatReducer;
