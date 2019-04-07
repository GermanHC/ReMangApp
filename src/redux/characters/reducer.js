import * as types from "./types";

const initialState = {
  list: [],
  offset: 0,
  isFetching: false
};

export default function(state = initialState, action = {}) {
    switch (action.type) {
      case types.CHARACTERS_UPDATE_LIST:
        return {
          ...state,
          list: action.list 
        };
  
      case types.CHARACTERS_UPDATE_FETCHING:
        return {
          ...state,
          isFetching: action.value
        };
  
      case types.CHARACTERS_UPDATE_OFFSET:
        return {
          ...state,
          offset: action.value
        };
  
      default:
        return state;
    }
  }