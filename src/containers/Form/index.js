import { connect } from 'react-redux';
import { changeInputMessage, saveMessage } from 'src/actions/chat';

import Form from 'src/components/Form';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  message: state.inputMessage,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  setMessage: (newValue) => {
    dispatch(changeInputMessage(newValue));
  },
  saveMessage: () => {
    // dire au store qu'il faut enregistrer la value de l'input pour le pseudo
    dispatch(saveMessage());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
