import React from 'react';
import { shallow } from 'enzyme';
import { Jokebox } from './Jokebox';

describe('Jokebox', () => {
  let wrapper;
  let jokes;

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

    wrapper = shallow(
      <Jokebox
        isLoading={false}
        selectJoke={() => {}}
        favouriteJoke={() => {}}
        jokes={jokes}
        favouriteJokes={[]}
        fetchJokes={() => {}}
      />,
    );
  });

  test('renders Jokebox correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('renders Loading correctly', () => {
    wrapper = shallow(
      <Jokebox
        isLoading
        selectJoke={() => {}}
        favouriteJoke={() => {}}
        jokes={jokes}
        favouriteJokes={[]}
        fetchJokes={() => {}}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
