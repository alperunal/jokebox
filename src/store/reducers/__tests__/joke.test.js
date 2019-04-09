import reducer from '../joke';
import * as types from '../../actions/actionTypes';

describe('joke reducer', () => {
  const jokes = [
    {
      id: 21,
      type: 'general',
      setup: 'A termite walks into a bar and says...',
      punchline: "'Where is the bar tended?'",
    },
    {
      id: 51,
      type: 'general',
      setup: "When a dad drives past a graveyard: Did you know that's a popular cemetery?",
      punchline: 'Yep, people are just dying to get in there',
    },
  ];

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      joke: {},
      jokes: [],
      favouriteJokes: [],
      isLoading: false,
    });
  });

  it('should handle FETCH_JOKES_REQUEST', () => {
    expect(
      reducer(undefined, {
        type: types.FETCH_JOKES_REQUEST,
      }),
    ).toEqual({
      joke: {},
      jokes: [],
      favouriteJokes: [],
      isLoading: true,
    });
  });

  it('should handle FETCH_JOKES_FAILURE', () => {
    expect(
      reducer(undefined, {
        type: types.FETCH_JOKES_FAILURE,
      }),
    ).toEqual({
      joke: {},
      jokes: [],
      favouriteJokes: [],
      isLoading: false,
    });
  });

  it('should handle FETCH_JOKES_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: types.FETCH_JOKES_SUCCESS,
        jokes,
      }),
    ).toEqual({
      joke: {},
      jokes,
      favouriteJokes: [],
      isLoading: false,
    });
  });
});
