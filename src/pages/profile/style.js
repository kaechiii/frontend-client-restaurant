import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  @media (max-width: 1280px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    padding-bottom: 60px;
    padding-top: 80px;
  }
`

const LoginContainer = styled.div`
  padding: 20px 20rem;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 1280px) {
    padding: 20px 20px;
  }
`

const StyledButton = styled.button`
  background-color: palegoldenrod;
  border: none;
  width: 5rem;
  border-radius: 10px;
  color: orange;
  font-weight: 500;
  font-size: 1.2rem;
`

const StyledButtonRed = styled.button`
  background-color: red;
  border: none;
  width: 5rem;
  border-radius: 10px;
  color: white;
  font-weight: 500;
  font-size: 1.2rem;
`

const ProfileContainer = styled.div`
  padding: 4rem 20rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 3vh;
  gap: 12vw;
  @media (max-width: 1280px) {
    padding: 20px 20px;
    flex-direction: column;
    align-items: center;
    padding-top: 3vh;
  }
`

const ProfilePictureContainer = styled.div`
    width: 40%;
    @media (max-width: 1280px) {
        width: 50%;
  }
`
const ProfilePicture = styled.img`
    clip-path: circle(50%);
    width: 100%;
`

const DataContainer = styled.div`
    width: 80%;
`
const FieldContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const StyledText = styled.h3`
    font-weight: 400;
    word-wrap: break-word;
`
const MiniSection = styled.div`
    padding: 10px 0;
`

const StyledInput = styled.input`
  display: block;
  width: 100%;
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
`;

const StyledButtonModal = styled.button`
  display: block;
  background-color: palegoldenrod;
  color: black;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

const ProfileButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem;
  gap: 1rem;
`

const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

const ProfileStyledButton = styled.button`
  background-color: palegoldenrod;
  border: none;
  padding: 1rem 1rem;
  border-radius: 10px;
  color: orange;
  font-weight: 500;
  font-size: 1.2rem;
`

const CouponContainer = styled.div`
  width: 45%;
  background-color: palegoldenrod;
  border:1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 1rem;
  align-items: center;

  @media (max-width: 1280px) {
    width: 100%;
  }
`

const GridContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  gap:1.2rem;
  justify-content: center;
  margin: 1rem 0;

  @media (max-width: 1280px) {
    flex-direction: column;
  }
`

const CouponTextContainer = styled.div`
  width: 55%;
  font-size: 1.5rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: .8rem;
  .amountText{
    font-size: 1.1rem;
  }
`

const IconTextContainer = styled.div`
  font-size: 4rem;
  width: 20%;
`

export { GridContainer, IconTextContainer, CouponContainer, CouponTextContainer, ProfileStyledButton, ProfileButtonContainer, StyledButtonRed, StyledError, StyledButtonModal, ButtonContainer, StyledInput, MiniSection, StyledText, DataContainer, Container, LoginContainer, StyledButton, ProfileContainer, ProfilePictureContainer, ProfilePicture, FieldContainer };