import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/fontawesome-free-regular';

const Joke = props => {
  const { joke, favouriteJoke, isFavourite } = props;
  const likeIcon = <FAIcon onClick={e => favouriteJoke(e, joke)} color="#e91d62" icon={farHeart} />;
  const likedIcon = <FAIcon onClick={e => favouriteJoke(e, joke)} color="#e91d62" icon="heart" />;

  return (
    <StyledJoke>
      <JokeInfo>
        <Description>
          <Type>{joke.type}</Type>
          {isFavourite ? likedIcon : likeIcon}
        </Description>
        <Name>{joke.setup}</Name>
      </JokeInfo>
    </StyledJoke>
  );
};

const StyledJoke = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e3e3e3;
`;

const JokeInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Type = styled.span`
  font-size: 13px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #4a4a4a;
  text-transform: capitalize;
`;

const Name = styled.div`
  font-size: 15px;
  color: #000000;
`;

const FAIcon = styled(FontAwesomeIcon)`
  margin: 10px;
`;

Joke.propTypes = {
  joke: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    setup: PropTypes.string,
    punchline: PropTypes.string,
  }).isRequired,
  isFavourite: PropTypes.bool,
  favouriteJoke: PropTypes.func.isRequired,
};

Joke.defaultProps = {
  isFavourite: false,
};

export default Joke;
