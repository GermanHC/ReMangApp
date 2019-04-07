import { AsyncStorage } from "react-native";
import _ from "lodash";

import * as types from "./types";
import * as api from "../../api";

function updateMangasList(list, total) {
  return {
    type: types.MANGA_UPDATE_LIST,
    list: list,
    total
  };
}

export function updateMangaSelected(manga) {
  const action = {
    type: types.MANGA_UPDATE_SELECTED,
    value: manga
  };
  return action;
}

function updateFetching(value) {
  return {
    type: types.MANGA_UPDATE_FETCHING,
    value
  };
}

export function fetchMangasList() {
  return function(dispatch, getState) {
    dispatch(updateFetching(true));
    AsyncStorage.getItem("MANGAS_LIST", (err, result) => {
      let asyncStorageList = [];
      if (result) {
        asyncStorageList = JSON.parse(result);
        dispatch(updateMangasList(asyncStorageList, 0));
        dispatch(updateFetching(false));
      }
      api
        .fetchMangas()
        .then(res => {
          const list = res.data.top;
          const total = res.data.total;
          if (!_.isEqual(list, asyncStorageList)) {
            dispatch(updateMangasList(list, total));
            AsyncStorage.setItem("MANGAS_LIST", JSON.stringify(list));
          }
        })
        .catch(err => {
          console.error("fetchMangas err: ", err);
        })
        .finally(() => dispatch(updateFetching(false)));
    });
  };
}