import React, { useState } from 'react'
import { ButtonContainer, StyledButton, StyledError, StyledForm, StyledFormWrapper, StyledInput} from './style';
import {useRegisterMutation} from '../../store/api/registerApi';
import StyledModal from '../MiniModal';
import './style.css';

const initalState = {
    name: '',
    email: '',
    username: '',
    password: '',
    phone_number:'',
    confirm_password:''
};

function FormRegister() {
    const [register] = useRegisterMutation();

    const [state, setState] = useState(initalState);
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorUsername, setErrorUsername] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');
    const [errorPhoneNumber, setErrorPhoneNumber] = useState('');

    const [showModal, setShowModal] = useState(false);
    const [registerMessage, setRegisterMessage] = useState('');
  
    const validateName = () => {
        if(state.name === ''){
            setErrorName('Name field cannot be empty');
            return false;
        }
        return true;
    }

    const validateEmail = () => {
        if(state.email === ''){
            setErrorEmail('Email field cannot be empty');
            return false;
        }
        const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        const isEmail = regex.test(state.email);
        if(isEmail){
            return true;
        }
        setErrorEmail('Please enter valid email');
        return false;
    }

    const validateUsername = () => {
        if(state.username === ''){
            setErrorUsername('Username field cannot be empty');
            return false;
        }
        if(state.username.length < 5){
            setErrorUsername('Username should not be shorter than 5 characters')
            return false;
        }
        if(state.username.length > 15){
            setErrorUsername('Username should not be longer than 15 characters')
            return false;
        }
        return true;
    }

    const validatePhoneNumber = () => {
        if(state.phone_number === ''){
            setErrorPhoneNumber('Phone number field cannot be empty');
            return false;
        }
        if(state.phone_number.length < 4){
            setErrorPhoneNumber('Phone number should not be shorter than 4 numbers')
            return false;
        }
        if(state.phone_number.length > 15){
            setErrorPhoneNumber('Phone number should not be longer than 15 numbers')
            return false;
        }
        return true;
    }

    const validatePassword = () => {
        if(state.password === ''){
            setErrorPassword('Password field cannot be empty');
            return false;
        }
        if(state.password.length < 8){
            setErrorPassword('Password should not be shorter than 8 characters')
            return false;
        }
        return true;
    }

    const validateConfirmPassword = () => {
        if(state.confirm_password === ''){
            setErrorConfirmPassword('Confirm password field cannot be empty');
            return false;
        }
        if(state.confirm_password !== state.password){
            setErrorConfirmPassword('Confirm password should match password field')
            return false;
        }
        return true;
    }

    const resetValue = () => {
      setErrorName('');
      setErrorEmail('');
      setErrorUsername('');
      setErrorPassword();
      setErrorConfirmPassword();
      setErrorPhoneNumber();
    }

    const handleSubmit = e => {
      e.preventDefault();
      resetValue();

      let isFormValid = false;
  
      isFormValid = validateName();
      isFormValid = validateEmail();
      isFormValid = validateUsername();
      isFormValid = validatePhoneNumber();
      isFormValid = validatePassword();
      isFormValid = validateConfirmPassword();

      if(isFormValid){
        register({ name: state.name, email: state.email, password: state.password, username: state.username, phone_number: state.phone_number }, false)
          .unwrap()
          .then((response) => {
            setRegisterMessage('Register success');
            setShowModal(true);
          })
          .catch((error) => {
            setRegisterMessage(error);
            setShowModal(true);
          });
      }
    };
  
    const handleInput = e => {
      const key = e.currentTarget.name;
      const value = e.currentTarget.value;
  
      setState(prev => ({ ...prev, [key]: value }));
    };
  
    return (
      <>
        <fieldset>
        <legend>Register:</legend>
        <StyledFormWrapper>
          <StyledForm onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <StyledInput
              type="text"
              name="name"
              value={state.name}
              onChange={handleInput}
            />
            {errorName && (
              <StyledError>
                <p>{errorName}</p>
              </StyledError>
            )}
            <label htmlFor="email">Email</label>
            <StyledInput
              type="email"
              name="email"
              value={state.email}
              onChange={handleInput}
            />
            {errorEmail && (
              <StyledError>
                <p>{errorEmail}</p>
              </StyledError>
            )}
            <label htmlFor="username">Username</label>
            <StyledInput
              type="text"
              name="username"
              value={state.username}
              onChange={handleInput}
            />
            {errorUsername && (
              <StyledError>
                <p>{errorUsername}</p>
              </StyledError>
            )}
            <label htmlFor="phone_number">Phone number</label>
            <StyledInput
              type="number"
              name="phone_number"
              value={state.phone_number}
              onChange={handleInput}
            />
            {errorPhoneNumber && (
              <StyledError>
                <p>{errorPhoneNumber}</p>
              </StyledError>
            )}
            <label htmlFor="password">Password</label>
            <StyledInput
              type="password"
              name="password"
              value={state.password}
              onChange={handleInput}
            />
            {errorPassword && (
              <StyledError>
                <p>{errorPassword}</p>
              </StyledError>
            )}
            <label htmlFor="confirm_password">Confirm password</label>
            <StyledInput
              type="password"
              name="confirm_password"
              value={state.confirm_password}
              onChange={handleInput}
            />
            {errorConfirmPassword && (
              <StyledError>
                <p>{errorConfirmPassword}</p>
              </StyledError>
            )}
            <ButtonContainer>
                <StyledButton type="submit">Submit</StyledButton>
            </ButtonContainer>
          </StyledForm>
        </StyledFormWrapper>
        <StyledModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        text={registerMessage}>
        </StyledModal>
        </fieldset>
      </>
    );
}

export default FormRegister