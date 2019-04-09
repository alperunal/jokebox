import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'axios';
import * as actions from '../jokeActions';
import * as types from '../actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions', () => {
  it('fetchJokes', () => {
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

    mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: { jokes } }));

    const expectedActions = [
      { type: types.FETCH_JOKES_REQUEST },
      {
        type: types.FETCH_JOKES_SUCCESS,
        jokes: { jokes },
      },
    ];

    const store = mockStore({ jokes: [] });
    return store.dispatch(actions.fetchJokes()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('fetchJokesRequest', () => {
    const expectedAction = {
      type: types.FETCH_JOKES_REQUEST,
    };
    expect(actions.fetchJokesRequest()).toEqual(expectedAction);
  });

  it('fetchJokesFailure', () => {
    const expectedAction = {
      type: types.FETCH_JOKES_FAILURE,
    };
    expect(actions.fetchJokesFailure()).toEqual(expectedAction);
  });

  it('setJokes', () => {
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

    const expectedAction = {
      type: types.FETCH_JOKES_SUCCESS,
      jokes,
    };
    expect(actions.setJokes(jokes)).toEqual(expectedAction);
  });
});
