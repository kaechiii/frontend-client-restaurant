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

const Banner = styled.div`
    img{
        width: 100%;
    }
`

const ContentContainer = styled.div`
  padding: 20px 20rem;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  gap: 1rem;
  @media (max-width: 1280px) {
    padding: 15px 10rem;
  }

  @media (min-width: 768px) and (max-width: 1280px){
    padding: 15px 5rem;
  }

  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`

const StyledInput = styled.input`
    padding: 0.8rem 2rem;
    width: 80%;
    color: orange;
    border-color: rgba(237,237,237,255);
    background-color: rgb(238,232,170, .3);
    border-radius: 0.3rem;
    font-size: 0.9rem;
    border-top: thin;
    border-left: thin;
    &:focus {
        outline: none;
    }
    ::placeholder{
        font-weight: bold;
        color: orange;
    }

    @media (max-width: 768px) {
        width: 75%;
    }

    @media (min-width: 1280px) {
        font-size: 1vw;
    }
`

const StyledButton = styled.button`
    color: orange;
    width: 10%;
    border-color: transparent;
    background-color: rgb(238,232,170);
    border-radius: 0.3rem;
    font-size: 0.9rem;
    border-width: thin;
    &:focus {
        outline: none;
    }

    @media (max-width: 1280px) {
        width: 10%;
    }

    @media (max-width: 768px) {
        width: 25%;
    }

    @media (min-width: 1280px) {
        font-size: 1vw;
    }
`

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 20rem;
  justify-content: center;
  gap: 1.5vw;
  @media (max-width: 1280px) {
    padding: 0 20px;
  }
`

const CategoryButton = styled.div`
  display: flex;
  flex-direction: column;
  background-color: palegoldenrod;
  color: orange;
  padding: 5vh 9vw;
  border-radius: 5px;
  font-size: 1.2rem;
  gap: 10px;
  justify-content: space-around;

  @media (max-width: 768px) {
    padding: 4vh 9vw;
  }

  @media (min-width: 768px) {
    padding: 3vh 5.5vw;
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    padding: 2vh 6vw;
  }

  @media (min-width: 1280px) {
    font-size: 2vw;
    padding: 5vh 7.5vw;
  }
`

const CartItemContainer = styled.div`
    border-bottom: 2px solid #FDE992;
    box-sizing: border-box;
    padding: 1rem 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

`

const DetailsContainer = styled.div`
    width: 100%;
    padding: 1rem 2rem;
`

const OrderIndividualContainer = styled.div`
    background-color: rgba(255, 250, 205, 0.8);
`

const StyledDate = styled.p`
    border-top: 4px solid #FDE992;
    font-size: 1.2rem;
    padding-left: 1rem;
    padding-bottom: .5rem;
`

const OrderDetailContainer = styled.div`
    display: flex;
    flex-direction:column;
    padding: 2px 0;

`

const CartProductTotal = styled.div`
    padding: 10px 10px;
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    font-weight: 600;
    align-items: center;
    border-bottom: 4px solid #FDE992;

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
    padding-top: 10px;
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
    padding: 10px 10px;
    display: flex;
    justify-content: space-between;
    font-size: .8rem;
    font-weight: 600;
    align-items: center;
    border-bottom: 1px solid #FDE992;
    span{
        font-size: .8rem;
        color: #df2020;
    }
`

const OrderContainer = styled.div`
    width: 100%;
    padding: 20px 20rem;

    @media (max-width: 1280px) {
    padding: 15px 10rem;
  }

  @media (min-width: 768px) and (max-width: 1280px){
    padding: 15px 5rem;
  }

  @media (max-width: 768px) {
    padding: 15px 20px;
  }

`

const TextContainer = styled.div`
    text-align: center;
    border-bottom: 1px solid #FDE992;
    padding: 5px 10px;
    p{
        font-size: 0.8rem;
    }

`



export {OrderDetailContainer, TextContainer, OrderIndividualContainer, StyledDate, OrderContainer, CartItemContainer, DetailsContainer, CartProductTotal, CartInfo, CartProductInfo, CartProductTitle, CartProductPrice, LeftCartProduct, ToppingSizeContainer, ToppingContainer, SizeContainer, CartProductSubTotal, Container, Banner, ContentContainer, StyledInput, StyledButton, CategoryButton, CategoryContainer}