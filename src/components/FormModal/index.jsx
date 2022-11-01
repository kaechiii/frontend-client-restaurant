import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react'
import { ButtonContainer, ContentContainer, IconContainer, ModalContainer, StyledButton } from './style'
import FormRegister from '../FormRegister';
import FormLogin from '../FormLogin';

const FormModal = ({handleClose, show}) => {
  const [showLogin, setShowLogin] = useState('login');

  return (
    <ModalContainer block={show ? "block" : "none"}>
        <ContentContainer>
            <IconContainer>
                <FontAwesomeIcon icon={faXmark} onClick={handleClose}></FontAwesomeIcon>
            </IconContainer>
            <h1>Login to your account or register if you are new!</h1>
            <ButtonContainer>
              <StyledButton type="button" onClick={() => setShowLogin('register')}>Register</StyledButton>
              <StyledButton type="button" onClick={() => setShowLogin('login')}>Login</StyledButton>
            </ButtonContainer>
            {showLogin === 'login' ? (<FormLogin></FormLogin>) : (<FormRegister></FormRegister>)}
        </ContentContainer>
    </ModalContainer>
  )
}

export default FormModal;