import * as types from "./types";
import * as api from "../../api";
import { Actions } from "react-native-router-flux";
import { Alert } from "react-native";
import _ from "lodash";

function updateList(list) {
    return {
      type: types.CHARACTERS_UPDATE_LIST,
      list 
    };
  }
  
  function updateFetching(value) {
    return {
      type: types.CHARACTERS_UPDATE_FETCHING,
      value: value
    };
  }
  
  function updateOffset(value) {
    return {
      type: types.CHARACTERS_UPDATE_OFFSET,
      value
    };
  }

  export function initCharactersList() {
    return function(dispatch, getState) {
      dispatch(updateList([], 0));
      dispatch(updateOffset(0));
      dispatch(fetchCharactersList());
    };
  }
  
  export function updateCharactersListOffset() {
    return function(dispatch, getState) {
      const offset = getState().characters.offset + LIMIT;
      dispatch(updateOffset(offset));
      dispatch(fetchCharactersList());
    };
  }

  function fetchCharactersList() {
    return function(dispatch, getState) {
      const manga = getState().mangas.selected;
      if (!manga) {
        return;
      }
  
      dispatch(updateFetching(true));
      const { offset, list } = getState().characters;
      const params = { manga: manga.mal_id, offset };
      api
        .fetchCharactersByManga(params)
        .then(res => {
          const newList = [...list, ...res.data.records];
          dispatch(updateList(newList));
        })
        .catch(err => {
          console.error("fetchCharactersList err: ", err);
        })
        .finally(_ => dispatch(updateFetching(false)));
    };
  }

  export function updateCharacter(characterId, data) {
    return function(dispatch, getState) {
      if (!characterId || !data) {
        return;
      }
  
      dispatch(updateFetching(true));
      api
        .updateCharacter(characterId, data)
        .then(res => {
          dispatch(initCharactersList());
          Actions.pop();
          const character = _.get(res, "data.record", {});
          Actions.refresh({ character });
          Alert.alert("¡Genial!", "Personaje editado con éxito");
        })
        .catch(err => {
          console.log("postCharacter err: ", err);
        })
        .finally(_ => dispatch(updateFetching(false)));
    };
  }
  