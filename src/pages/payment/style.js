import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  padding-bottom: 60px;
/* 
  @media (max-width: 1280px) {
    flex-direction: column;
  } */
  @media (max-width: 768px) {
    padding-bottom: 120px;
    padding-top: 80px;
    flex-direction: column;
  }
`

const HeaderTitleContainer = styled.div`
    padding: 1rem 1rem;
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    word-wrap: break-word;
    gap: 5vw;
`

const CartItemContainer = styled.div`
    border-bottom: 2px solid #FDE992;
    box-sizing: border-box;
    padding: 1rem 0;
    background-color: rgba(255, 250, 205, 0.8);

`

const DetailsContainer = styled.div`
    width: 100%;
    padding: 1rem 2rem;
`

const CartInfo = styled.div`
    width: 100%;
    display: flex;
    gap: 1.7rem;
    padding-left: 1rem;
    img{
      width: 75px;
      object-fit: scale-down;
    }
`

const CartProductInfo = styled.div`
    display: flex;
`

const CartProductTitle = styled.h6`
    font-size: 1rem;
    font-weight: 600;
`

const CartProductPrice = styled.p`
    font-size: 0.8rem;
    text-align: right;

    span {
    font-size: 0.9rem;
    font-weight: 600;
    color: #df2020;
  }
`

const LeftCartProduct = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const ToppingSizeContainer = styled.div`
    padding-top: 5px;
    display: flex;
    width: 100%;
    justify-content: space-around;
    font-size: 0.8rem;
    gap: 2rem;
`

const ToppingContainer = styled.div`
    display:flex;
    flex-direction: column;
`
const SizeContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const CartProductSubTotal = styled.div`
    padding: 0 10px;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    font-size: .8rem;
    font-weight: 600;
    align-items: center;
    span{
        font-size: .8rem;
        color: #df2020;
    }
`
const CartProductTotal = styled.div`
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    font-weight: 600;
    align-items: center;

    @media (max-width: 768px) {
          font-size: .8rem;
        }
    span{
        font-size: 1.2rem;
        color: #df2020;

        @media (max-width: 768px) {
          font-size: 1rem;
        }
    }
`

const TablePaymentContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const TableContainer = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const PaymentContainer = styled.div`
  padding: 0 1rem;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const PaymentDetail = styled.div`
  width: 100%;
  padding: 0 2rem;
  padding-top: 1rem;
  padding-bottom: .5rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #f5f2ea;
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 0 1rem;
    padding-top: 1rem;
  }
`

const StyledInput = styled.input`
    padding: 0.5rem 2rem;
    width: 50%;
    color: orange;
    border-color: rgba(237,237,237,255);
    background-color: rgb(238,232,170, .8);
    border-radius: 0.3rem;
    font-size: 1rem;
    border-top: thin;
    border-left: thin;
    &:focus {
        outline: none;
    }
    ::placeholder{
        font-weight: 100;
        color: gray;
    }

    @media (max-width: 768px) {
        width: 60%;
        padding: 0 1rem;
    }

    @media (min-width: 1280px) {
        font-size: 1vw;
    }
`

const CouponContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledButton = styled.button`
  background-color: rgb(238,232,170, .8);
  border: none;
  border-radius: 10px;
  color: orange;
  padding: 1rem 1rem;
  font-weight: 600;
  font-size: 1rem;

  @media (max-width: 768px) {
        width: 30%;
        padding: .5rem 1rem;
    }
`

const PromotionDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const PromotionButton = styled.button`
  background-color: rgb(238,232,170, .8);
  border: none;
  border-radius: 10px;
  color: orange;
  padding: 1rem 1rem;
  font-weight: 600;
  font-size: 1rem;
  width: 100%;
  display:flex;
  justify-content: space-between;
`

const PaymentMethod = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(238,232,170);
  padding: 0.5rem 1rem;
  border-radius: 10px;
  color:orange;
  font-weight: 600;
  select{
    padding: .5rem 2rem;
    font-size: 1rem;
    color: orange;
    border-color: #FDE992;
    background-color: white;
    border-radius: 10px;

    @media (max-width: 768px) {
      padding: .5rem .8rem;
    }
  }
`

const BottomTab = styled.div`
  border-top: 2px solid #FDE992;
  font-size: 1.5rem;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
      padding: .5rem .8rem;
      font-size: 1rem;
    }
`

const PriceTab = styled.div`
  display: flex;
  gap: 10px;
  color: black;
  font-weight: 400;
  span{
    color: crimson;
    font-weight: 600;
  }
  @media (max-width: 768px) {
      flex-direction: column;
      gap: 5px;
    }
`

const StyledError = styled.div`
  color: red;
  font-weight: 800;
  text-align: center;
`;

export {StyledError, PriceTab, BottomTab, PaymentMethod, PromotionButton, PromotionDiv, StyledButton, CouponContainer, StyledInput, PaymentDetail, TablePaymentContainer, TableContainer, PaymentContainer, CartProductTotal, CartProductSubTotal, ToppingSizeContainer, ToppingContainer, SizeContainer, LeftCartProduct, CartProductPrice, CartProductTitle, CartProductInfo, Container, HeaderTitleContainer, CartItemContainer, DetailsContainer, CartInfo}