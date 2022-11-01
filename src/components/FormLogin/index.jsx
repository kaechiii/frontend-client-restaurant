import React, { useState } from 'react'
import { ButtonContainer, StyledButton, StyledError, StyledForm, StyledFormWrapper, StyledInput} from './style';
import { useLoginMutation } from '../../store/api/loginApi';
import { useGetUserMutation } from '../../store/api/userApi';
import StyledModal from '../MiniModal';
import Cookies from 'js-cookie'
import {isLogin} from "../../store/slices/loginStatusSlice"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const initalState = {
    name: '',
    email: '',
    username: '',
    password: '',
    phone_number:'',
    confirm_password:''
  };

function FormLogin() {
    const [login] = useLoginMutation();
    const [user] = useGetUserMutation();

    const [state, setState] = useState(initalState);
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const [loginMessage, setLoginMessage] = useState('');
    const [showModal, setShowModal] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validateUsername = () => {
        if(state.username === ''){
            setErrorEmail('Username field cannot be empty');
            return false;
        }
        return false;
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

    const resetValue = () => {
      setErrorEmail('');
      setErrorPassword();
    }

    const setUserData =  (id, username, name, email, phone_number, register_date, profile_picture) => {
      localStorage.setItem("idRestaurant", id);
      localStorage.setItem("usernameRestaurant", username);
      localStorage.setItem("nameRestaurant", name);
      localStorage.setItem("emailRestaurant", email);
      localStorage.setItem("phone_numberRestaurant", phone_number);
      localStorage.setItem("register_dateRestaurant", register_date);
      localStorage.setItem("profile_pictureRestaurant", profile_picture)
    }

    const getUserData = () =>{
      user({}, false)
      .unwrap()
      .then((response) => {
        setUserData(response.data.id, response.data.username, response.data.name, response.data.email, response.data.phone_number, response.data.register_date, response.data.profile_picture)
      })
      .catch((error) => {
        setShowModal(true);
        console.log(error)
        setLoginMessage('Login unsuccessful, fail to fetch user details');
      });
    }

    const handleSubmit = e => {
      e.preventDefault();
      resetValue();

      let isFormValid = false;
  
      isFormValid = validateUsername();
      isFormValid = validatePassword();

      if(isFormValid){
        login({ username: state.username, password: state.password}, false)
          .unwrap()
          .then((response) => {
            console.log(response.data)
            setShowModal(true);
            setLoginMessage('Login successful');
            setState(initalState);
            Cookies.set('token', response.data.idToken);
            getUserData();
            dispatch(isLogin());
            navigate('/', { replace: true });
          })
          .catch((error) => {
            setShowModal(true);
            setLoginMessage(error.data.message);
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
        <legend>Login:</legend>
        <StyledFormWrapper>
          <StyledForm onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <StyledInput
              type="text"
              name="username"
              value={state.username}
              onChange={handleInput}
            />
            {errorEmail && (
              <StyledError>
                <p>{errorEmail}</p>
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
            <ButtonContainer>
                <StyledButton type="submit">Submit</StyledButton>
            </ButtonContainer>
          </StyledForm>
        </StyledFormWrapper>
        <StyledModal
          show={showModal}
          handleClose={() => {setShowModal(false); setState(initalState)}}
          text={loginMessage}
        >
        </StyledModal>
        </fieldset>
      </>
    );
}

export default FormLogin
