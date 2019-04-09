import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from '../UI/Container/Container';
import LogoImg from '../../assets/images/logo.png';

const Header = () => {
  return (
    <React.Fragment>
      <StyledHeader>
        <Container>
          <HeaderBar>
            <Logo src={LogoImg} alt="JokeBox" />
          </HeaderBar>
        </Container>
      </StyledHeader>
      <StyledNavigation>
        <Container>
          <NavBar>
            <NavItems>
              <NavItem>
                <NavLink to="/">Jokes</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/favourites">Favourites</NavLink>
              </NavItem>
            </NavItems>
          </NavBar>
        </Container>
      </StyledNavigation>
    </React.Fragment>
  );
};

const StyledHeader = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
`;

const HeaderBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 40, 100, 0.12);
`;

const StyledNavigation = styled.div`
  width: 100%;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e40512;
  margin-bottom: 20px;
`;

const NavBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 40, 100, 0.12);
`;

const NavItems = styled.ul`
  list-style-type: none;
  display: flex;
  padding-left: 10px;
`;
const NavItem = styled.li`
  margin-right: 20px;
`;

const NavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  &:hover {
    color: #f0f4f8;
  }
`;

const Logo = styled.img`
  height: 20px;
  margin-left: 20px;
`;

export default Header;
