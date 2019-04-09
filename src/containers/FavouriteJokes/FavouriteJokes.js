import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Container from '../../components/UI/Container/Container';
import { selectJoke, favouriteJoke } from '../../store/actions/jokeActions';
import JokeDetails from '../../components/JokeDetails/JokeDetails';
import Loader from '../../components/UI/Loader/Loader';
import Modal from '../../components/UI/Modal/Modal';
import Joke from '../../components/Joke/Joke';

export class FavouriteJokes extends Component {
  constructor(props) {
    super(props);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.openJokeDetails = this.openJokeDetails.bind(this);
    this.favouriteJoke = this.favouriteJoke.bind(this);

    this.state = {
      isModalOpen: false,
    };
  }

  handleModalClose() {
    this.setState({ isModalOpen: false });
  }

  openJokeDetails(joke) {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.selectJoke(joke);
    this.setState({ isModalOpen: true });
  }

  favouriteJoke(event, joke) {
    event.stopPropagation();
    // eslint-disable-next-line react/destructuring-assignment
    this.props.favouriteJoke(joke);
  }

  render() {
    const { isModalOpen } = this.state;
    const { favouriteJokes, joke, isLoading } = this.props;

    return (
      <StyledJokes>
        <Container>
          {isLoading && <Loader />}
          {isModalOpen && (
            <Modal closeModal={this.handleModalClose}>
              <JokeDetails joke={joke} />
            </Modal>
          )}
          <Wrapper>
            <Title>Favourite Jokes</Title>
            {favouriteJokes ? (
              <List>
                {favouriteJokes.map(_joke => {
                  return (
                    <ListItemLink key={_joke.id} onClick={() => this.openJokeDetails(_joke)}>
                      <Joke joke={_joke} isFavourite favouriteJoke={this.favouriteJoke} />
                    </ListItemLink>
                  );
                })}
              </List>
            ) : (
              'There is no joke available.'
            )}
          </Wrapper>
        </Container>
      </StyledJokes>
    );
  }
}

const StyledJokes = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 50px;
  background-color: #ffffff;
`;
const Title = styled.div`
  font-size: 20px;
  padding-left: 20px;
  box-shadow: -1px 1px 0 5px #fff, 1px 1px 0 5px #fff, 0 7px 0 0 #e3e3e3;
  margin-bottom: 25px;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 2%;

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    grid-template-columns: 45% 45%;
    grid-column-gap: 10%;
    grid-row-gap: 4%;
  }
  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    grid-template-columns: 30% 30% 30%;
    grid-column-gap: 5%;
    grid-row-gap: 4%;
  }
`;

const ListItemLink = styled.span`
  text-decoration: none;
`;

FavouriteJokes.propTypes = {
  selectJoke: PropTypes.func.isRequired,
  favouriteJoke: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  favouriteJokes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
      setup: PropTypes.string,
      punchline: PropTypes.string,
    }),
  ).isRequired,
  joke: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    setup: PropTypes.string,
    punchline: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  favouriteJokes: state.joke.favouriteJokes,
  joke: state.joke.joke,
  isLoading: state.joke.isLoading,
});

export default connect(
  mapStateToProps,
  { selectJoke, favouriteJoke },
)(FavouriteJokes);
