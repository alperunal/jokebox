import React from 'react';
import { shallow } from 'enzyme';
import { FavouriteJokes } from './FavouriteJokes';

describe('FavouriteJokes', () => {
  let wrapper;
  let jokes;
  let joke;

  beforeEach(() => {
    jokes = [
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

    joke = {
      id: 21,
      type: 'general',
      setup: 'A termite walks into a bar and says...',
      punchline: "'Where is the bar tended?'",
    };

    wrapper = shallow(
      <FavouriteJokes
        isLoading={false}
        selectJoke={() => {}}
        favouriteJoke={() => {}}
        joke={joke}
        favouriteJokes={jokes}
        fetchJokes={() => {}}
      />,
    );
  });

  test('renders FavouriteJokes correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('renders Loading correctly', () => {
    wrapper = shallow(
      <FavouriteJokes
        isLoading
        selectJoke={() => {}}
        favouriteJoke={() => {}}
        joke={joke}
        favouriteJokes={jokes}
        fetchJokes={() => {}}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
