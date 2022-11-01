import styled from 'styled-components'

const CartContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.639);
    z-index: 99999;
`

const CartContent = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 400px;
    height: 100%;
    background: #fff;
    z-index: 999999;

    @media only screen and (max-width: 576px) {
        width: 300px;
    }
`

const CartClose = styled.div`
    width: 100%;
    height: 60px;
    font-size: 2rem;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;

    span{
        cursor: pointer;
    }
`

const CartFooter = styled.div`
    display:flex;
    position: absolute;
    justify-content: space-between;
    align-items: center;
    bottom: 0;
    left: 0;
    padding: 5px 20px;
    width: 100%;
    height: 80px;
    background: #e7c27d;

    h6{
        font-size: 1rem;
        color: #fff;
    }

    h6 span{
        font-size: 1.3rem;
        font-weight: 600;
    }

    button {
        border: none;
        padding: .5rem 1rem;
        border-radius: 5px;
        background-color: palegoldenrod;
    }
`

const CartItem = styled.div `
    height: calc(100vh - 140px);
    overflow-y: scroll;
    h6{
        text-align: center;
        margin-top: 1rem;
    }
`

const CartInfo = styled.div`
    height: 100px;
    object-fit: scale-down;
    display: flex;
    gap: 1rem;
    justify-content: center;
    padding-left: .3rem;
`

const CartProductInfo = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 1rem;
`

const LeftCartProduct = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const CartProductTitle = styled.h6`
    font-size: 1rem;
    font-weight: 600;
`

const CartProductPrice = styled.p`
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
    font-size: 0.9rem;
    font-weight: 600;
    color: #df2020;
  }
`

const CartItemContainer = styled.div`
    border-bottom: 2px solid #969696;
    box-sizing: border-box;
    padding-top: 1rem;
    background-color: rgba(180, 180, 180, 0.1);
`

const CartProductSubTotal = styled.div`
    padding: 20px 20px;
    display: flex;
    justify-content: space-between;
    font-size: .8rem;
    font-weight: 600;
    align-items: center;
    span{
        font-size: 1rem;
        color: #df2020;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fde4e4;
    padding: 5px 7px;
    border-radius: 5px;

    .increase__btn, .decrease__btn {
    cursor: pointer;
  }
`

const DeleteButton = styled.div`
    font-size: 1.1rem;
    font-weight: 600;
`

const ToppingSizeContainer = styled.div`
    padding-top: 10px;
    display: flex;
    width: 80%;
    justify-content: space-around;
    font-size: 0.8rem;
`

const ToppingContainer = styled.div`
    display:flex;
    flex-direction: column;
`
const SizeContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const ButtonRed = styled.button`
    border: none;
    padding: .5rem 1rem;
    border-radius: 5px;
    background-color: crimson;
    color: white;
    font-weight: 500;
    font-size: 1rem;
`

export {ButtonRed, ToppingSizeContainer, ToppingContainer, SizeContainer, CartItemContainer, LeftCartProduct, DeleteButton, ButtonContainer, CartProductSubTotal, CartProductPrice, CartProductTitle, CartProductInfo, CartInfo, CartItem, CartFooter, CartContainer, CartContent, CartClose}