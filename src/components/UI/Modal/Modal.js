import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Close from '../../../assets/icons/close.png';

const Modal = props => {
  const { children, closeModal } = props;
  return (
    <StyledModal>
      <Window>
        <Actions>
          <CloseIcon onClick={closeModal} src={Close} />
        </Actions>
        <Content>{children}</Content>
      </Window>
    </StyledModal>
  );
};

const StyledModal = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Window = styled.div`
  width: 900px;
  height: 400px;
  background-color: #ffffff;
  padding: 20px;
`;

const Actions = styled.span`
  display: flex;
  flex-direction: row-reverse;
`;

const CloseIcon = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const Content = styled.div``;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
