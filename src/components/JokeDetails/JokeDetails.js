import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const JokeDetails = props => {
  const { joke } = props;
  return (
    <JokeContainer>
      <Info>
        <Setup>{joke.setup}</Setup>
        <Punchline>{joke.punchline}</Punchline>
      </Info>
    </JokeContainer>
  );
};

export const JokeContainer = styled.div`
  display: flex;
  flex-direction: 'row';
  background-color: #ffffff;
`;

export const Info = styled.div`
  width: 100%;
  padding: '50px';
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Setup = styled.div`
  margin-top: 100px;
  color: #111111;
  font-size: 24px;
`;

const Punchline = styled.div`
  margin-top: 100px;
  font-size: 20px;
  max-height: 150px;
  overflow: auto;
  font-style: italic;
`;

JokeDetails.propTypes = {
  joke: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    setup: PropTypes.string,
    punchline: PropTypes.string,
  }).isRequired,
};

export default JokeDetails;
