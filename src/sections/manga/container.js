import { connect } from "react-redux";
import View from "./view";
import * as MangasActions from "../../redux/mangas/actions";

const mapStateToProps = state => {
  return {
    mangasList: state.mangas.list,
    isFetching: state.mangas.isFetching
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    getMangasList: () => {
      dispatch(MangasActions.fetchMangasList());
    },
    updateMangaSelected: manga => {
      dispatch(MangasActions.updateMangaSelected(manga));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);