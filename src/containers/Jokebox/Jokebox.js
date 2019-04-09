/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from '../../components/UI/Container/Container';
import { fetchJokes, selectJoke, favouriteJoke } from '../../store/actions/jokeActions';
import JokeDetails from '../../components/JokeDetails/JokeDetails';
import Loader from '../../components/UI/Loader/Loader';
import Modal from '../../components/UI/Modal/Modal';
import Joke from '../../components/Joke/Joke';

export class Jokebox extends Component {
  constructor(props) {
    super(props);

    this.handleFilter = this.handleFilter.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
    this.openJokeDetails = this.openJokeDetails.bind(this);
    this.favouriteJoke = this.favouriteJoke.bind(this);

    this.state = {
      filter: '',
      type: 'all',
      isModalOpen: false,
    };
  }

  componentDidMount() {
    this.props.fetchJokes();
  }

  handleRefresh() {
    this.props.fetchJokes();
  }

  handleFilter(event) {
    const { target } = event;
    const { value } = target;

    this.setState({
      filter: value,
    });
  }

  handleTypeChange(event) {
    this.setState({ type: event.target.value });
  }

  handleModalClose() {
    this.setState({ isModalOpen: false });
  }

  openJokeDetails(joke) {
    this.props.selectJoke(joke);
    this.setState({ isModalOpen: true });
  }

  favouriteJoke(event, joke) {
    event.stopPropagation();
    this.props.favouriteJoke(joke);
  }

  render() {
    const { filter, isModalOpen, type } = this.state;
    const { jokes, joke, isLoading, favouriteJokes } = this.props;
    const filteredJokes = jokes.filter(
      _joke =>
        (type === 'all' || _joke.type === type) &&
        (filter === '' || _joke.setup.toUpperCase().includes(filter.toUpperCase())),
    );

    const types = new Set();
    jokes.forEach(_joke => types.add(_joke.type));

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
            <Title>Jokes</Title>
            <Refresh>
              <RefreshButton type="button" onClick={this.handleRefresh}>
                <FAIcon icon="sync" />
                Refresh Jokes
              </RefreshButton>
            </Refresh>
            <FilterWrapper>
              <FilterItem>
                <FilterHeader>Category:</FilterHeader>
                <FilterSelect value={type} onChange={this.handleTypeChange}>
                  <FilterOption value="all">All</FilterOption>
                  {Array.from(types).map(_type => (
                    <FilterOption key={_type} value={_type}>
                      {_type}
                    </FilterOption>
                  ))}
                </FilterSelect>
              </FilterItem>
              <FilterItem>
                <FilterInput
                  name="filterInput"
                  type="text"
                  onChange={this.handleFilter}
                  placeholder="Filter by keyword"
                  value={filter}
                />
              </FilterItem>
            </FilterWrapper>
            {filteredJokes ? (
              <List>
                {filteredJokes.map(_joke => {
                  const isFavourite = !!favouriteJokes.find(_fav => _fav.id === _joke.id);
                  return (
                    <ListItemLink key={_joke.id} onClick={() => this.openJokeDetails(_joke)}>
                      <Joke
                        joke={_joke}
                        isFavourite={isFavourite}
                        favouriteJoke={this.favouriteJoke}
                      />
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

const FilterWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const FilterItem = styled.div`
  margin: 5px 0;
`;

const FilterHeader = styled.div`
  margin-bottom: 5px;
`;

const FilterInput = styled.input`
  display: inline-block;
  width: 100%;
  padding: 12px 0;
  text-indent: 12px;
  border: 1px solid #e5ecf4;
  border-radius: 3px;
`;

const FilterSelect = styled.select`
  width: 100%;
  padding: 12px 0;
  text-indent: 12px;
  border: 1px solid #e5ecf4;
  border-radius: 3px;
  text-transform: capitalize;
`;

const FilterOption = styled.option`
  text-transform: capitalize;
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

const Refresh = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const RefreshButton = styled.button`
  width: 200px;
  height: 40px;
  background-color: #ffffff;
  border-color: #e40412;
  color: #e40412;
`;

const FAIcon = styled(FontAwesomeIcon)`
  margin-right: 15px;
`;

Jokebox.propTypes = {
  selectJoke: PropTypes.func.isRequired,
  favouriteJoke: PropTypes.func.isRequired,
  fetchJokes: PropTypes.func.isRequired,
  jokes: PropTypes.arrayOf(
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
  }),
  isLoading: PropTypes.bool.isRequired,
  favouriteJokes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
      setup: PropTypes.string,
      punchline: PropTypes.string,
    }),
  ).isRequired,
};

Jokebox.defaultProps = {
  joke: {},
};

const mapStateToProps = state => ({
  jokes: state.joke.jokes,
  joke: state.joke.joke,
  isLoading: state.joke.isLoading,
  favouriteJokes: state.joke.favouriteJokes,
});

export default connect(
  mapStateToProps,
  { fetchJokes, selectJoke, favouriteJoke },
)(Jokebox);
