import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart as fasHeart, faSync } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/fontawesome-free-regular';
import Header from '../Header/Header';
import FavouriteJokes from '../../containers/FavouriteJokes/FavouriteJokes';
import Jokebox from '../../containers/Jokebox/Jokebox';

library.add(fasHeart);
library.add(farHeart);
library.add(faSync);

const App = () => {
  return (
    <StyledApp>
      <Header />
      <Switch>
        <Route path="/favourites" exact component={FavouriteJokes} />
        <Route path="/" exact component={Jokebox} />
      </Switch>
    </StyledApp>
  );
};

const StyledApp = styled.div`
  background-color: #f0f4f8;
  min-height: 100vh;
`;

export default App;
