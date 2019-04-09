import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = props => {
  const { children } = props;

  return <ContainerDiv>{children}</ContainerDiv>;
};

const ContainerDiv = styled.div`
  max-width: 1100px;
  width: 100%;
`;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
