import { faClose, faMinus, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { ButtonContainer, ButtonRed, CartClose, CartContainer, CartContent, CartFooter, CartInfo, CartItem, CartItemContainer, CartProductInfo, CartProductPrice, CartProductSubTotal, CartProductTitle, DeleteButton, ImageContainer, LeftCartProduct, SizeContainer, ToppingContainer, ToppingSizeContainer } from './style'
import { cartUiActions } from "../../store/slices/cartUISlice";
import { useDispatch } from 'react-redux';
import { useGetItemsQuery, useEditItemMutation, useDeleteItemMutation, useDeleteAllMutation} from '../../store/api/cartApi';
import { formatIDR } from '../../helpers/formatter'
import { useNavigate } from 'react-router-dom';

function Cart() {
  const {
    data: cart,
    error: getCartError,
    isLoading: isLoadingCart,
  } = useGetItemsQuery();

  const [itemCart] = useEditItemMutation();
  const [deleteCart] = useDeleteItemMutation();
  const [deleteAll] = useDeleteAllMutation();

  const navigate = useNavigate();

  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    if (!isLoadingCart) {
      let total = 0;
      for (let i = 0; i < cart.data.length; i++) {
        total += cart.data[i].price * cart.data[i].quantity
      }
      setSubtotal(total);
    }
  }, [cart])

  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

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

  const EditQuantity = (id, quantity) => {
    itemCart({ id, model: { quantity: quantity } }, false)
    .unwrap()
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
}

const DeleteItemCart = (id) => {
  deleteCart({id}, false)
  .unwrap()
  .then((response) =>{
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
}

const DeleteItems = () => {
  deleteAll({}, false)
  .unwrap()
  .then((response) =>{
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
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
      <CartItemContainer key={index}>
        <CartInfo>
          <img src={data.Menu.photo} alt="product-img" />
          <CartProductInfo>
            <LeftCartProduct>
              <CartProductTitle>{data.Menu.name}</CartProductTitle>
              <CartProductPrice>
                {data.quantity}x <span>{formatIDR(data.price)}</span>
              </CartProductPrice>
              <ButtonContainer>
                <span className="decrease__btn" onClick={() => { EditQuantity(data.id, data.quantity - 1) }}>
                  <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                </span>
                <span className="quantity">{data.quantity}</span>
                <span className="increase__btn" onClick={() => { EditQuantity(data.id, data.quantity + 1) }}>
                  <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                </span>
              </ButtonContainer>
            </LeftCartProduct>
            <DeleteButton onClick={() => {DeleteItemCart(data.id)}}>
              <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
            </DeleteButton>
          </CartProductInfo>
        </CartInfo>
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
        <CartProductSubTotal>
          <p>Subtotal:</p>
          <span>{formatIDR(data.price * data.quantity)}</span>
        </CartProductSubTotal>
      </CartItemContainer>
    ));
  }
}

const CountSubTotal = () => {
  if (getCartError) {
    return 0;
  } if (cart) {
    if (cart.data.length === 0) {
      return (
        <>
          <h6>
            Subtotal : <span>{formatIDR(0)}</span>
          </h6>
          <button disabled>
            <div>
              Checkout
            </div>
          </button>
        </>
      )
    }
    return (
      <>
        <h6>
          Subtotal : <span>{formatIDR(subtotal)}</span>
        </h6>
        <button onClick={() => {navigate('/payment', { replace: true }); toggleCart()}}>
          <div>
            Checkout
          </div>
        </button>
      </>
    )
  }
}

return (
  <CartContainer>
    <CartContent>
      <CartClose>
        <span onClick={toggleCart}>
          <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
        </span>
        <ButtonRed onClick={DeleteItems}>Delete all</ButtonRed>
      </CartClose>
      <CartItem>
        {renderCart()}
      </CartItem>
      <CartFooter>
        {CountSubTotal()}
      </CartFooter>
    </CartContent>
  </CartContainer>
)
}

export default Cart