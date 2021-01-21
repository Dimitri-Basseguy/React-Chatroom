// action types
export const CHANGE_INPUT_PSEUDO = 'CHANGE_INPUT_PSEUDO';
export const SAVE_PSEUDO = 'SAVE_PSEUDO';
export const CHANGE_INPUT_MESSAGE = 'CHANGE_INPUT_MESSAGE';
export const SAVE_MESSAGE = 'SAVE_MESSAGE';

// action creators
export const changeInputPseudo = (newValue) => ({
  type: CHANGE_INPUT_PSEUDO,
  value: newValue,
});

export const savePseudo = () => ({
  type: SAVE_PSEUDO,
});

export const changeInputMessage = (newValue) => ({
  type: CHANGE_INPUT_MESSAGE,
  message: newValue,
});

export const saveMessage = () => ({
  type: SAVE_MESSAGE,
});
