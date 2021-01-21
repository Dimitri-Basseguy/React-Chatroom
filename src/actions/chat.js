// action types
export const CHANGE_INPUT_PSEUDO = 'CHANGE_INPUT_PSEUDO';

// action creators
export const changeInputPseudo = (newValue) => ({
  type: CHANGE_INPUT_PSEUDO,
  value: newValue,
});
