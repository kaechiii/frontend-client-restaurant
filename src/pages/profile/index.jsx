import React, { useEffect } from "react";
import { Container, DataContainer, LoginContainer, FieldContainer, ProfileContainer, ProfilePicture, ProfilePictureContainer, StyledButton, StyledText, MiniSection, StyledInput, ButtonContainer, StyledButtonModal, StyledError, StyledButtonRed, ProfileButtonContainer, ProfileStyledButton, CouponContainer, CouponTextContainer, IconTextContainer, GridContainer} from "./style";
import emptyProfile from "../../assets/empty-profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTags } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import FormModal from "../../components/FormModal";
import InputModal from "../../components/InputModal";
import {useEditEmailMutation, useEditNameMutation, useEditPhoneNumberMutation, useEditProfilePictureMutation} from "../../store/api/editApi";
import StyledModal from "../../components/MiniModal";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import {isLogin, isLogout} from "../../store/slices/loginStatusSlice"
import {useGetCouponsQuery} from '../../store/api/couponApi'
import NavbarTop from "../../components/NavBarTop";
import NavbarBottom from "../../components/NavBarBottom";
import { useNavigate } from "react-router-dom";

const initalState = {
    name: '',
    email: '',
    phone_number:'',
    profile_picture:''
};

const Profile = () => {
  const {
    data: coupon,
    error: getCouponError,
  } = useGetCouponsQuery();

  const [editName] = useEditNameMutation();
  const [editEmail] = useEditEmailMutation();
  const [editPhoneNumber] = useEditPhoneNumberMutation();
  const [editProfilePicture] = useEditProfilePictureMutation();

  const [isPopOpen, setIsPosOpen] = useState(false);
  const [isEditNameModalOpen, setEditNameModalOpen] = useState(false);
  const [isEditEmailModalOpen, setEditEmailModalOpen] = useState(false);
  const [isEditPhoneNumberModalOpen, setEditPhoneNumberModalOpen] = useState(false);
  const [state, setState] = useState(initalState);
  const [isEditProfilePictureModalOpen, setEditProfilePictureModalOpen] = useState(false);
  const [isEnterProfilePictureModalOpen, setEnterProfilePictureModalOpen] = useState(false);
  const [isCouponModalOpen, setCouponModalOpen] = useState(false);

  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPhoneNumber, setErrorPhoneNumber] = useState('');
  const [errorProfilePicture, setErrorProfilePicture] = useState('');
  const [showModal, setShowModal] = useState('');
  const [editMessage, setEditMessage] = useState('');

  const isStatusLogin = useSelector((state) => state.loginState.loginStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    if(!Cookies.get('token')){
      dispatch(isLogout());
      logOut();
    }else{
      dispatch(isLogin());
    }
  });

  const validateName = () => {
    if(state.name === ''){
        setErrorName('Name field cannot be empty');
        return false;
    }
    return true;
    }

    const validateProfilePicture = () => {
      if(state.profile_picture === ''){
          setErrorProfilePicture('Profile picture field cannot be empty');
          return false;
      }
      const regex = /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i;
      const isImage = regex.test(state.profile_picture);
      if(isImage){
        return true;
      }
      setErrorProfilePicture('Please enter valid image url');
      return false;
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

    const changeName = () => {
        setErrorName('');
        const isNameValid = validateName();

        if(isNameValid){
            editName({ name: state.name}, false)
            .unwrap()
            .then((response) => {
              setShowModal(true);
              setEditMessage('Edit name successful!');
              setState(initalState);
              localStorage.setItem('nameRestaurant', response.data.name);
            })
            .catch((error) => {
              setShowModal(true);
              setEditMessage(error.data.message);
            });
        }
    }

    const changeEmail = () => {
        setErrorEmail('');
        const isEmailValid = validateEmail();

        if(isEmailValid){
            editEmail({ email: state.email}, false)
            .unwrap()
            .then((response) => {
              setShowModal(true);
              setEditMessage('Edit email successful!');
              setState(initalState);
              localStorage.setItem('emailRestaurant', response.data.email);
            })
            .catch((error) => {
              setShowModal(true);
              setEditMessage(error.data.message);
            });
        }
    }

    const changePhoneNumber = () => {
        setErrorPhoneNumber('');
        const isPhoneNumberValid = validatePhoneNumber();

        if(isPhoneNumberValid){
            editPhoneNumber({ phone_number: state.phone_number}, false)
            .unwrap()
            .then((response) => {
              setShowModal(true);
              setEditMessage('Edit phone number successful!');
              setState(initalState);
              localStorage.setItem('phone_numberRestaurant', response.data.phone_number);
            })
            .catch((error) => {
              setShowModal(true);
              setEditMessage(error.data.message);
            });
        }
    }

  const removeProfilePicture = () => {
    editProfilePicture({ profile_picture: ""}, false)
      .unwrap()
      .then((response) => {
        setShowModal(true);
        setEditMessage('Remove profile picture successful!');
        localStorage.removeItem('profile_pictureRestaurant');
      })
      .catch((error) => {
        setShowModal(true);
        setEditMessage(error.data.message);
      });
  }

  const changeProfilePicture = () => {
    setErrorProfilePicture('');
    const isProfilePictureValid = validateProfilePicture();

    if(isProfilePictureValid){
      editProfilePicture({ profile_picture: state.profile_picture}, false)
      .unwrap()
      .then((response) => {
        setShowModal(true);
        setEditMessage('Change profile picture successful!');
        setState(initalState);
        localStorage.setItem('profile_pictureRestaurant', response.data.profile_picture);
      })
      .catch((error) => {
        setShowModal(true);
        setEditMessage(error.data.message);
      });
    }
  }

  const logOut = () => {
    window.localStorage.clear();
    Cookies.remove('token');
    dispatch(isLogout());
  }

  const handleInput = e => {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState(prev => ({ ...prev, [key]: value }));
  };

  const renderCoupon = () => {
    if (getCouponError) {
      return (
        <p>Login to see coupon</p>
      )
    } if (coupon) {
      if (coupon.length === 0 || coupon.data === null){ 
        return (
          <p>You don't own any coupon</p>
        )
      }
      return coupon.data !== null && coupon.data.map((data, index) => (
        <CouponContainer key={index}>
          <IconTextContainer>
          <FontAwesomeIcon icon={faTags}></FontAwesomeIcon>
          </IconTextContainer>
          
          <CouponTextContainer>
            <p className="nameText">{data.CouponType.coupon_code_name}</p>
            <p className="amountText">{data.CouponType.amount} off from your order</p>
          </CouponTextContainer>
          
        </CouponContainer>
      )); 
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <NavbarTop></NavbarTop>
        <Container>
            <LoginContainer>
                {isStatusLogin ? (<>
                  <h1>Hello, {localStorage.getItem('nameRestaurant')}!</h1>
                  <StyledButtonRed onClick={() => logOut()}>Log out</StyledButtonRed>
                </> ) : (<>
                  <h1>Hello, guest!</h1>
                  <StyledButton onClick={() => {navigate('/login', { replace: true })}}>Login</StyledButton>
                </> )}    
            </LoginContainer>
            <ProfileContainer>
                <ProfilePictureContainer onClick={() => setEditProfilePictureModalOpen(!isEditProfilePictureModalOpen)} >
                    <ProfilePicture src={localStorage.getItem('profile_pictureRestaurant') === '' || localStorage.getItem('profile_pictureRestaurant') === null ? emptyProfile : localStorage.getItem('profile_pictureRestaurant')} alt='profile.png' onError={({ currentTarget }) => { currentTarget.onerror = null; 
                      currentTarget.src='https://imgur.com/hKyHLdd.png';}}></ProfilePicture>
                </ProfilePictureContainer>
                <DataContainer>
                    <MiniSection>
                        <FieldContainer>
                            <h2>Id</h2>
                        </FieldContainer>
                        <StyledText>{localStorage.getItem('idRestaurant')}</StyledText>
                    </MiniSection>
                    <MiniSection>
                        <FieldContainer>
                            <h2>Username</h2>
                        </FieldContainer>
                        <StyledText>{localStorage.getItem('usernameRestaurant')}</StyledText>
                    </MiniSection>
                    <MiniSection>
                        <FieldContainer>
                            <h2>Name</h2>
                            <FontAwesomeIcon icon={faPencil} className="icon" onClick={() => setEditNameModalOpen(!isEditNameModalOpen)}></FontAwesomeIcon>
                        </FieldContainer>
                        <StyledText>{localStorage.getItem('nameRestaurant')}</StyledText>
                    </MiniSection>
                    <MiniSection>
                        <FieldContainer>
                            <h2>Email</h2>
                            <FontAwesomeIcon icon={faPencil} className="icon" onClick={() => setEditEmailModalOpen(!isEditEmailModalOpen)}></FontAwesomeIcon>
                        </FieldContainer>
                        <StyledText>{localStorage.getItem('emailRestaurant')}</StyledText>
                    </MiniSection>
                    <MiniSection>
                        <FieldContainer>
                            <h2>Phone number</h2>
                            <FontAwesomeIcon icon={faPencil} className="icon" onClick={() => setEditPhoneNumberModalOpen(!isEditPhoneNumberModalOpen)}></FontAwesomeIcon>
                        </FieldContainer>
                        <StyledText>{localStorage.getItem('phone_numberRestaurant')}</StyledText>
                    </MiniSection>
                    <MiniSection>
                        <FieldContainer>
                            <h2>Register date</h2>
                        </FieldContainer>
                        <StyledText>{localStorage.getItem('register_dateRestaurant')}</StyledText>
                    </MiniSection>
                    <ProfileButtonContainer>
                      <ProfileStyledButton onClick={() => setCouponModalOpen(true)}>Coupons</ProfileStyledButton>
                    </ProfileButtonContainer>
                </DataContainer>
            </ProfileContainer>
        </Container>
        <FormModal
          show={isPopOpen}
          handleClose={() => setIsPosOpen(false)}
        >
        </FormModal>
        <InputModal
            show={isEditNameModalOpen}
            handleClose={() => {setEditNameModalOpen(false); setErrorName('')}}
            text='Enter new name:'
        >
            <StyledInput
              type="text"
              name="name"
              value={state.name}
              onChange={handleInput}
            ></StyledInput>
            {errorName && (
              <StyledError>
                <p>{errorName}</p>
              </StyledError>
            )}
            <ButtonContainer onClick={() => changeName()}>
                <StyledButtonModal>Save</StyledButtonModal>
            </ButtonContainer>
        </InputModal>
        <InputModal
            show={isEditEmailModalOpen}
            handleClose={() => {setEditEmailModalOpen(false); setErrorEmail('')}}
            text='Enter new email:'
        >
            <StyledInput
              type="email"
              name="email"
              value={state.email}
              onChange={handleInput}
            ></StyledInput>
            {errorEmail && (
              <StyledError>
                <p>{errorEmail}</p>
              </StyledError>
            )}
            <ButtonContainer onClick={() => changeEmail()}>
                <StyledButtonModal>Save</StyledButtonModal>
            </ButtonContainer>
        </InputModal>
        <InputModal
            show={isEditPhoneNumberModalOpen}
            handleClose={() => {setEditPhoneNumberModalOpen(false); setErrorPhoneNumber('')}}
            text='Enter new phone number:'
        >
            <StyledInput
              type="number"
              name="phone_number"
              value={state.phone_number}
              onChange={handleInput}
            ></StyledInput>
            {errorPhoneNumber && (
              <StyledError>
                <p>{errorPhoneNumber}</p>
              </StyledError>
            )}
            <ButtonContainer onClick={() => changePhoneNumber()}>
                <StyledButtonModal>Save</StyledButtonModal>
            </ButtonContainer>
        </InputModal>
        <InputModal
            show={isEditProfilePictureModalOpen}
            handleClose={() => {setEditProfilePictureModalOpen(false); setErrorPhoneNumber('')}}
            text='Choose what you want to do:'
        >
            <ProfileButtonContainer>
              <ProfileStyledButton onClick={() => setEnterProfilePictureModalOpen(true)}>Change profile picture</ProfileStyledButton>
              <ProfileStyledButton onClick={() => {removeProfilePicture(); setEditProfilePictureModalOpen(false)} }>Remove profile picture</ProfileStyledButton>
            </ProfileButtonContainer>
        </InputModal>
        <InputModal
            show={isEnterProfilePictureModalOpen}
            handleClose={() => {setEnterProfilePictureModalOpen(false); setErrorProfilePicture('')}}
            text='Enter new profile picture:'
        >
            <StyledInput
              type="text"
              name="profile_picture"
              value={state.profile_picture}
              onChange={handleInput}
            ></StyledInput>
            {errorProfilePicture && (
              <StyledError>
                <p>{errorProfilePicture}</p>
              </StyledError>
            )}
            <ButtonContainer onClick={() => changeProfilePicture()}>
                <StyledButtonModal>Save</StyledButtonModal>
            </ButtonContainer>
        </InputModal>
        <InputModal
            show={isCouponModalOpen}
            handleClose={() => {setCouponModalOpen(false)}}
            text='Coupons owned:'
        >
          <GridContainer>
          {renderCoupon()}
          </GridContainer>
         
        </InputModal>
        <StyledModal
          show={showModal}
          handleClose={() => setShowModal(false)}
          text={editMessage}>
        </StyledModal>
        <NavbarBottom></NavbarBottom>
    </>
  );
};

export default Profile;