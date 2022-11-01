import styled from 'styled-components';

const StyledButton = styled.button`
    color: orange;
    width: 10%;
    border-color: transparent;
    background-color: rgb(238,232,170);
    border-radius: 10px;
    font-size: 0.9rem;
    border-width: thin;
    padding: .5rem 1rem;
    &:focus {
        outline: none;
    }

    @media (max-width: 1280px) {
        width: 10%;
    }

    @media (max-width: 768px) {
        width: 50%;
    }

    @media (min-width: 1280px) {
        font-size: 1vw;
    }
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

export {StyledButton, CouponContainer, CouponTextContainer, IconTextContainer}