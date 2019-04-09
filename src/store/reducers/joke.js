import * as actionTypes from '../actions/actionTypes';

const initialState = {
  joke: {},
  jokes: [],
  favouriteJokes: [],
  isLoading: false,
};

const jokeReducer = (state = initialState, action) => {
  let { favouriteJokes } = state;
  switch (action.type) {
    case actionTypes.SELECT_JOKE:
      return { ...state, joke: action.joke };
    case actionTypes.FETCH_JOKES_REQUEST:
      return { ...state, isLoading: true };
    case actionTypes.FETCH_JOKES_SUCCESS:
      return { ...state, jokes: action.jokes, isLoading: false };
    case actionTypes.GET_JOKES:
      return { ...state, jokes: [...state.jokes, ...action.jokes] };
    case actionTypes.FAVOURITE_JOKE:
      if (state.favouriteJokes.find(_joke => _joke.id === action.joke.id)) {
        favouriteJokes = [...state.favouriteJokes.filter(joke => joke.id !== action.joke.id)];
      } else {
        favouriteJokes = [...state.favouriteJokes, action.joke];
      }
      return { ...state, favouriteJokes };
    default:
      return state;
  }
};

export default jokeReducer;
