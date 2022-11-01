import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NavbarBottom from '../../components/NavBarBottom';
import NavbarTop from '../../components/NavBarTop';
import Rating from '../../components/Rating';
import { formatIDR } from '../../helpers/formatter';
import {useGetOrderByIdQuery, usePostReviewMutation} from '../../store/api/orderApi'
import { ButtonContainer, CartInfo, CartItemContainer, CartProductInfo, CartProductPrice, CartProductSubTotal, CartProductTitle, CartProductTotal, Container, DetailsContainer, HeaderTitleContainer, LeftCartProduct, MidContainer, ReviewContainer, ReviewDisplayContainer, SizeContainer, Star, StarContainer, StyledButton, StyledSubmitButton, StyledTextArea, TableContainer, ToppingContainer, ToppingSizeContainer } from './style';

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
  
};

function OrderDetails() {
  const {id} = useParams();
  const navigate = useNavigate();

  const {
    data: order,
    error: getOrderError,
    isLoading: isLoadingOrder,
  } = useGetOrderByIdQuery({id});

  const [subtotal, setSubtotal] = useState(0);
  useEffect(() => {
    if (!isLoadingOrder) {
      const subtotalCount = order.data.price + order.data.CouponType.amount
      setSubtotal(subtotalCount)
    }
  }, [order])

  const [postReview] = usePostReviewMutation();

  const stars = Array(5).fill(0)

  const handleSubmitReview = (orderDetailID, menuID, description, rating) => {
    postReview({order_detail_id: orderDetailID, menu_id: menuID, description: description, rating: rating})
        .unwrap()
        .then((response) => {
            // setStatusMessage('Add to cart success');
            // setShowModal(true);
            console.log(response);
          })
        .catch((error) => {
            // setStatusMessage(error);
            console.log(error);
        });
  }

  const renderPage = () => {
    if (getOrderError) {
        return ;
    } 
    if (order) {
      return(
        <TableContainer>
            <DetailsContainer>
              {renderCart(order.data.OrderDetail)}
              <CartItemContainer>
                <CartProductTotal>
                  <p>Subtotal order: </p>
                  <span>{formatIDR(subtotal)}</span>
                </CartProductTotal>
                {order.data.CouponTypeID ? (<CartProductTotal>
                  <p>Coupon discount code used: </p>
                  <span>{order.data.CouponType.coupon_code}</span>
                </CartProductTotal>) : (<div />)}
                {order.data.CouponTypeID ? (<CartProductTotal>
                  <p>Coupon discount: </p>
                  <span>- {formatIDR(order.data.CouponType.amount)}</span>
                </CartProductTotal>) : (<div />)}
                <CartProductTotal>
                  <p>Total order: </p>
                  <span>{formatIDR(order.data.price)}</span>
                </CartProductTotal>
                <CartProductTotal>
                  <p>Payment method: </p>
                  <span>{formatIDR(order.data.PaymentType.payment_type_name)}</span>
                </CartProductTotal>
              </CartItemContainer>
            </DetailsContainer>
          </TableContainer>
      )
      
    } 
  }

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

  const renderCart = (array) => {

      return array.map((data, index) => (
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
            {data.review_id == null ? (
              <Rating
              handleSubmitFunc = {handleSubmitReview}
              orderDetailID = {data.id}
              menuID = {data.menu_id}
              >
              </Rating>
            ) : (
              <ReviewContainer>
                <StarContainer>
                  <StarContainer>
                      <Star>
                          {stars.map((_, index) => {
                      return (
                          <FontAwesomeIcon icon={faStar}
                          key={index}
                          color={ data.Review.rating > index ? colors.orange : colors.grey}
                          />
                      )
                      })}
                      </Star>
                  </StarContainer>
                  <ReviewDisplayContainer>
                  <p>{data.Review.description}</p>
                  </ReviewDisplayContainer>
                  
                </StarContainer>
              </ReviewContainer>
            )}    
        </CartItemContainer>
        </div>
      ));
  }

  return (
    <>
    <NavbarTop></NavbarTop>
    <Container>
      <HeaderTitleContainer>
            <FontAwesomeIcon icon={faArrowLeft} onClick={() => {navigate('/order', { replace: true })}}></FontAwesomeIcon>
            <p>Order details</p>
            <div></div>
      </HeaderTitleContainer>
      <MidContainer>
        {renderPage()}
      </MidContainer>
      <ButtonContainer>
        <StyledButton onClick={() => {navigate('/home', { replace: true })}}>Back to home</StyledButton>
      </ButtonContainer>
    </Container>
    <NavbarBottom></NavbarBottom>
    </>
    
  )
}

export default OrderDetails