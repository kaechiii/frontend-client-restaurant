import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  padding-bottom: 60px;

  width: 100%;
  justify-content: center;

  @media (max-width: 768px) {
    padding-bottom: 120px;
    padding-top: 80px;
    flex-direction: column;
  }
`

const MidContainer = styled.div`
  display:flex;
  justify-content: center;
`

const TableContainer = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
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
const HeaderTitleContainer = styled.div`
    padding: 1rem 1rem;
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    word-wrap: break-word;
    gap: 5vw;
`

const StyledButton = styled.button`
  background-color: rgb(238,232,170);
  border: none;
  border-radius: 10px;
  color: black;
  padding: .7rem 1rem;
  font-weight: 600;
  font-size: 1rem;

  @media (max-width: 768px) {
        width: 30%;
        padding: .5rem 1rem;
    }
`

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const ReviewContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 1rem 0;
  gap: 10px;
`

const StarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Star = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.5rem;
`

const ReviewDisplayContainer = styled.div`
  width: 50%;
  padding: 10px;
  text-align: center;
  word-break: break-all;
`

const StyledTextArea = styled.textarea`
  border: 1px solid #a9a9a9;
  border-radius: 5px;
  min-height: 100px;
  width: 50%;
  padding: 10px 10px;
`

const StyledSubmitButton = styled.button`
  background-color: rgb(238,232,170);
  border: none;
  border-radius: 10px;
  color: black;
  padding: .7rem 1rem;
  font-weight: 600;
  font-size: 1rem;

  @media (max-width: 768px) {
        width: 30%;
        padding: .5rem 1rem;
    }
`

export {ReviewDisplayContainer, MidContainer, ReviewContainer, StarContainer,Star, StyledTextArea, StyledSubmitButton, ButtonContainer, StyledButton, HeaderTitleContainer,LeftCartProduct, ToppingSizeContainer, ToppingContainer, SizeContainer, CartProductSubTotal, CartProductPrice, CartInfo, CartProductInfo, CartProductTitle, Container, TableContainer, CartItemContainer, DetailsContainer, CartProductTotal}