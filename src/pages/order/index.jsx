import React from 'react'
import { Banner, CartInfo, CartItemContainer, CartProductInfo, CartProductPrice, CartProductSubTotal, CartProductTitle, CartProductTotal, CategoryButton, CategoryContainer, Container, ContentContainer, LeftCartProduct, OrderContainer, OrderDetailContainer, OrderIndividualContainer, SizeContainer, StyledButton, StyledDate, StyledInput, TextContainer, ToppingContainer, ToppingSizeContainer } from './style'
import bannerOrder from '../../assets/banner-order.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsV, faGlassWater, faPizzaSlice, faUtensils } from '@fortawesome/free-solid-svg-icons';
import {useGetOrderByUserIdQuery} from '../../store/api/orderApi';
import { formatDate, formatIDR } from '../../helpers/formatter'
import { useState } from 'react';
import moment from 'moment';
import NavbarTop from '../../components/NavBarTop';
import NavbarBottom from '../../components/NavBarBottom';
import { useNavigate } from 'react-router-dom';

function Order() {
    const {
        data: item,
        error: getItemError,
        isLoading: isLoadingItem,
      } = useGetOrderByUserIdQuery();

      const [category, setCategory] = useState(0);
      const [dateSort, setDateSort] = useState('');
      const [query, setQuery] = useState('');

      const navigate = useNavigate();

      const renderItem = () => {
        if (getItemError) {
          return 0;
        } if (item) {
          if (item.length === 0 || item.data === null) {
            return (
              <h6>No previous transaction!</h6>
            )
          }
          let arrayCopy = item.data.map((data) => data);
          let sortedMenu = arrayCopy;
          if(dateSort === 'asc'){
            sortedMenu = arrayCopy.sort((a, b) => moment(a.OrderDate).diff(moment(b.OrderDate)));
          }
          else if(dateSort === 'desc'){
            sortedMenu = arrayCopy.sort((a, b) => moment(b.OrderDate).diff(moment(a.OrderDate)));
          }
          return sortedMenu.filter((data) => {
            if (category !== 0){
                for (let i = 0 ; i < data.OrderDetail.length ; i++){
                    return (data.OrderDetail[i].Menu.categoryID === category)
                }
            }
            return true;
          })
          .filter((data) => {
            if (query !== '') {
                for (let i = 0 ; i < data.OrderDetail.length ; i++){
                    return (data.OrderDetail[i].Menu.name.toString().toLowerCase().includes(query.toLowerCase())
                    || data.OrderDetail[i].Menu.price.toString().toLowerCase().includes(query.toLowerCase()));
                }
            }
            return true;
          })
          .map((data, index) => (
            <OrderIndividualContainer  onClick={() => {navigate(`/order/${data.id}`, { replace: true })}}>
                <StyledDate>{formatDate(data.OrderDate)}</StyledDate>
                <OrderDetailContainer>
                    {
                        data.OrderDetail.map((data, index) => (
                            renderDetails(data)
                        ))
                    }
                </OrderDetailContainer>
                {data.OrderDetail.length > 1 ? (<TextContainer><p>Tap to display more item</p></TextContainer>) : (<div />)}
                <CartProductTotal>
                  <p>{data.OrderDetail.length} item(s)</p>
                  <p>Total price: <span>{formatIDR(data.price)}</span></p>
                </CartProductTotal>
            </OrderIndividualContainer>
            
            
          ));
        }
      }

      const renderTopping = (array) => {
        if (array === null || array.length === 0) {
          return (
            <li>No topping</li>
          )
        }
        return array.map((data) => (
          <li>{data}</li>
        )
        )
      }

      const renderDetails = (data) => {
        return (
            <>
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
              <p>Price:</p>
              <CartProductPrice>
                {data.quantity}x <span>{formatIDR(data.price)}</span>
              </CartProductPrice>
              <span>{formatIDR(data.price * data.quantity)}</span>
            </CartProductSubTotal>
            </>
        )
      }

      const handleChangeDirection = (event) => {
        if(dateSort === ''){
          setDateSort('asc');
        }
        else if(dateSort === 'asc'){
            setDateSort('desc');
        }
        else if(dateSort === 'desc'){
            setDateSort('asc');
        }
      };

  return (
    <>
    <NavbarTop></NavbarTop>
    <Container>
        <Banner>
        <img src={bannerOrder} alt="banner.png"></img>
        </Banner>
        <ContentContainer>
            <StyledInput type="text" placeholder="🔍&nbsp;&nbsp;&nbsp;&nbsp;Search" onChange={(event) => { setQuery(event.target.value); }}/>
            <StyledButton onClick={handleChangeDirection}>Date&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowsV}></FontAwesomeIcon></StyledButton>
        </ContentContainer>
        <CategoryContainer>
        <CategoryButton onClick={()=>{setCategory(1)}}>
          <FontAwesomeIcon icon={faPizzaSlice}></FontAwesomeIcon>
          <h3>Pizza</h3>
        </CategoryButton>
        <CategoryButton onClick={()=>{setCategory(2)}}>
          <FontAwesomeIcon icon={faUtensils}></FontAwesomeIcon>
          <h3>Pasta</h3>
        </CategoryButton>
        <CategoryButton onClick={()=>{setCategory(3)}}>
          <FontAwesomeIcon icon={faGlassWater}></FontAwesomeIcon>
          <h3>Drink</h3>
        </CategoryButton>
      </CategoryContainer>
      <OrderContainer>
        <CartItemContainer>
            {renderItem()}
        </CartItemContainer>
      </OrderContainer>
    </Container>
    <NavbarBottom></NavbarBottom>
    </>
    
    
  )
}

export default Order