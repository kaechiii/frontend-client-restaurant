import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { ContentContainer, IconContainer, ModalContainer, StyledMessage } from './style'

const InputModal = ({handleClose, show, text, children}) => {
  return (
    <ModalContainer block={show ? "block" : "none"}>
        <ContentContainer>
            <IconContainer>
                <FontAwesomeIcon icon={faXmark} onClick={handleClose}></FontAwesomeIcon>
            </IconContainer>
            {text && (
              <StyledMessage>
                <p>{text}</p>
              </StyledMessage>
            )}
            {children}
        </ContentContainer>
    </ModalContainer>
  )
}

export default InputModal;