import React from 'react';
import { shallow } from 'enzyme';
import Joke from './Joke';

describe('Joke', () => {
  let wrapper;
  const jokeData = {
    id: 21,
    type: 'general',
    setup: 'A termite walks into a bar and says...',
    punchline: "'Where is the bar tended?'",
  };

  it('renders Joke correctly', () => {
    wrapper = shallow(<Joke joke={jokeData} favouriteJoke={() => {}} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.contains(jokeData.setup)).toBe(true);
    expect(wrapper.contains(jokeData.type)).toBe(true);
  });
});
