import React from 'react';
import { shallow } from 'enzyme';
import JokeDetails from './JokeDetails';

describe('JokeDetails', () => {
  let wrapper;
  const jokeData = {
    id: 21,
    type: 'general',
    setup: 'A termite walks into a bar and says...',
    punchline: "'Where is the bar tended?'",
  };

  it('renders JokeDetails correctly', () => {
    wrapper = shallow(<JokeDetails joke={jokeData} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.contains(jokeData.setup)).toBe(true);
    expect(wrapper.contains(jokeData.punchline)).toBe(true);
  });
});
