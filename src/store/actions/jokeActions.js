import axios from 'axios';
import * as actionTypes from './actionTypes';

// JOKES
export const fetchJokes = () => dispatch => {
  dispatch(fetchJokesRequest());
  return axios
    .get('/random_ten')
    .then(res => {
      dispatch(setJokes(res.data));
    })
    .catch(() => {
      dispatch(fetchJokesFailure());
    });
};

export const fetchJokesRequest = () => {
  return {
    type: actionTypes.FETCH_JOKES_REQUEST,
  };
};

export const fetchJokesFailure = () => {
  return {
    type: actionTypes.FETCH_JOKES_FAILURE,
  };
};

export const setJokes = jokes => {
  return {
    type: actionTypes.FETCH_JOKES_SUCCESS,
    jokes,
  };
};

// JOKE
export const selectJoke = joke => {
  return {
    type: actionTypes.SELECT_JOKE,
    joke,
  };
};

export const favouriteJoke = joke => {
  return {
    type: actionTypes.FAVOURITE_JOKE,
    joke,
  };
};
