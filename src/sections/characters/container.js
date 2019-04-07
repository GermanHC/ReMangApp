import { connect } from "react-redux";
import * as CharactersActions from "../../redux/characters/actions";
import View from "./view";

function mapStateToProps(state) {
  return {
    manga: state.mangas.selected,
    charactersList: state.characters.list,
    isFetching: state.characters.isFetching
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    initCharactersList: () => {
      dispatch(CharactersActions.initCharactersList());
    },
    updateCharactersListOffset: () => {
      dispatch(CharactersActions.updateCharactersListOffset());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
