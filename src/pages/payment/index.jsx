import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BottomTab, CartInfo, CartItemContainer, CartProductInfo, CartProductPrice, CartProductSubTotal, CartProductTitle, CartProductTotal, Container, CouponContainer, DetailsContainer, HeaderTitleContainer, LeftCartProduct, PaymentContainer, PaymentDetail, PaymentMethod, PriceTab, PromotionButton, PromotionDiv, SizeContainer, StyledButton, StyledError, StyledInput, TableContainer, TablePaymentContainer, ToppingContainer, ToppingSizeContainer } from './style'
import { useGetItemsQuery} from '../../store/api/cartApi';
import { formatIDR } from '../../helpers/formatter';
import {usePostOrderMutation} from '../../store/api/orderApi';
import {useGetCouponMutation} from '../../store/api/couponApi';
import NavbarTop from '../../components/NavBarTop'
import NavbarBottom from '../../components/NavBarBottom'

function Payment() {
  const navigate = useNavigate();

  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState(1);

  const [couponID, setCouponID] = useState(0);
  const [couponText, setCouponText] = useState('');
  const [couponError, setCouponError] = useState('');
  const [couponAmount, setCouponAmount] = useState(0);
  


  const [promotion, setPromotion] = useState(0);

  const {
    data: cart,
    error: getCartError,
    isLoading: isLoadingCart,
  } = useGetItemsQuery();

  const [coupon] = useGetCouponMutation();

  const [makeNewOrder] = usePostOrderMutation();

  useEffect(() => {
    if(couponID === 0){
      const totalNow = total + couponAmount;
      setTotal(totalNow);
      setCouponAmount(0)
    }else if(couponID > 0){
      const totalNow = subtotal - couponAmount;
      setTotal(totalNow);
    }
  }, [couponID])

  useEffect(() => {
    if (!isLoadingCart) {
      let totalAmount = 0;
      for (let i = 0; i < cart.data.length; i++) {
        totalAmount += cart.data[i].price * cart.data[i].quantity
      }
      setTotal(totalAmount);
      setSubtotal(totalAmount);
    }
  }, [cart])

  const renderTopping = (array) => {
    if (array.length === 0) {
      return (
        <li>No topping</li>
      )
    }
    return array.map((data) => (
      <li>{data}</li>
    )
    )
  }

  const renderCart = () => {
    if (getCartError) {
      return 0;
    } if (cart) {
      if (cart.length === 0 || cart.data === null) {
        return (
          <h6>No item added to the cart</h6>
        )
      }
      let arrayCopy = cart.data.map((data) => data);
      return arrayCopy.map((data, index) => (
        <div>
          <CartItemContainer key={index}>
            <CartInfo>
              <img src={data.Menu.photo} alt="product-img" />
              <CartProductInfo>
                  <LeftCartProduct>
                  <CartProductTitle>{data.Menu.name}</CartProductTitle>
                  <ToppingSizeContainer>
                    <ToppingContainer>
                      <p>Topping:</p>
                      <ul>
                        {renderTopping(data.topping)}
                      </ul>
                    </ToppingContainer>
                    <SizeContainer>
                      <p>Size: </p>
                      <ul>
                        <li>{data.size}</li>
                      </ul>
                    </SizeContainer>
                  </ToppingSizeContainer>
                  </LeftCartProduct>
              </CartProductInfo>
            </CartInfo>
            <CartProductSubTotal>
            <p>Subtotal:</p>
            <CartProductPrice>
              {data.quantity}x <span>{formatIDR(data.price)}</span>
            </CartProductPrice>
            <span>{formatIDR(data.price * data.quantity)}</span>
            </CartProductSubTotal>
        </CartItemContainer>
        </div>
        
      ));
    }
  }

  const tableOption = [
    { value: 1, text: 'Bank transfer' },
    { value: 2, text: 'Debit card' },
    { value: 3, text: 'Credit card' },
    { value: 4, text: 'Paylater' },
  ];

  const handleChangeTable = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleOrder = () => {
    makeNewOrder({total_price: total, coupon_id: couponID, payment_type_id: parseInt(paymentMethod)})
        .unwrap()
        .then((response) => {
            // setStatusMessage('Add to cart success');
            // setShowModal(true);
            console.log(response);
            navigate(`/order/${response.data.id}`, { replace: true })
          })
        .catch((error) => {
            // setStatusMessage(error);
            console.log(error);
        });
  }

  const handleCheckCode = () => {
    coupon({code: couponText}, false)
      .unwrap()
      .then((response) => {
       console.log(response);
        setCouponID(response.data.CouponType.id);
        setCouponAmount(response.data.CouponType.amount)
        setCouponError('')
      })
      .catch((error) => {
        // setShowModal(true);
        console.log(error)
        setCouponError('Coupon code invalid')
        setCouponID(0)
        // setLoginMessage('Login unsuccessful, fail to fetch user details');
      });
  } 

  return (
    <>
    <NavbarTop></NavbarTop>
    <Container>
        <HeaderTitleContainer>
            <FontAwesomeIcon icon={faArrowLeft} onClick={() => {navigate('/home', { replace: true })}}></FontAwesomeIcon>
            <p>Order details</p>
            <div></div>
        </HeaderTitleContainer>
        <TablePaymentContainer>
          <TableContainer>
            <DetailsContainer>
              {renderCart()}
              <CartItemContainer>
                <CartProductTotal>
                  <p>Subtotal order: </p>
                  <span>{formatIDR(subtotal)}</span>
                </CartProductTotal>
                {couponAmount > 0 ? (<CartProductTotal>
                  <p>Coupon discount: </p>
                  <span>- {formatIDR(couponAmount)}</span>
                </CartProductTotal>) : (<div />)}
                <CartProductTotal>
                  <p>Total order: </p>
                  <span>{formatIDR(total)}</span>
                </CartProductTotal>
              </CartItemContainer>
            </DetailsContainer>
          </TableContainer>
          <PaymentContainer>
            <PaymentDetail>
              <CouponContainer>
                <StyledInput type="text" placeholder="Enter coupon code" onChange={(event) => { setCouponText(event.target.value); }}/>
                <StyledButton onClick={handleCheckCode}>Check coupon</StyledButton>
              </CouponContainer>
              {couponError ? (<StyledError>
              <p>Invalid coupon code!</p>
              </StyledError>): (<div/>)}
              <PromotionDiv>
                <PromotionButton>
                  <p>Select available promotion</p>
                  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </PromotionButton>
              </PromotionDiv>
              <PaymentMethod>
                <p>Payment method:</p>
                <select value={paymentMethod} onChange={handleChangeTable}>
                {tableOption.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
              </PaymentMethod>
              <BottomTab>
                <PriceTab>
                <p>Total:</p>
                <span>{formatIDR(total)}</span>
                </PriceTab>
                <StyledButton onClick={() => {handleOrder(); }}>Order</StyledButton>
              </BottomTab>
            </PaymentDetail>
          </PaymentContainer>
        </TablePaymentContainer>
    </Container>
    <NavbarBottom></NavbarBottom>
    </>
  )
}

export default Payment