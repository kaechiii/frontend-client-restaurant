import React, { useState } from 'react'
import { Banner, CategoryButton, CategoryContainer, Container, ContainerImage, ContentContainer, ContentInfo, MenuContainer, MenuItem, NameStyled, PriceStyled, StyledButton, StyledCartButton, StyledInput } from './style'
import bannerMenu from '../../assets/banner-menu.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsV, faGlassWater, faPizzaSlice, faUtensils } from '@fortawesome/free-solid-svg-icons'
import {useGetMenuQuery} from '../../store/api/menuApi'
import { formatIDR } from '../../helpers/formatter'
import { useNavigate } from 'react-router-dom'
import NavbarTop from '../../components/NavBarTop'
import NavbarBottom from '../../components/NavBarBottom'

function Menu() {
  const {
    data: menu,
    error: getMenuError,
    isLoading: isLoadingMenu,
  } = useGetMenuQuery();

  const navigate = useNavigate();

  const [priceSort, setPriceSort] = useState('');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState(0);

  const renderMenu = () => {
    if (getMenuError) {
      return 0;
    } if (menu) {
      if (menu.length === 0 || menu.data === null) 
      { 
        return (
          <p>No menu data to display</p>
        )
      }
      let arrayCopy = menu.data.map((data) => data);
      let sortedMenu = arrayCopy;
      if(priceSort === 'asc'){
        sortedMenu = arrayCopy.sort((a, b) => a.price - b.price);
      }
      else if(priceSort === 'desc'){
        sortedMenu = arrayCopy.sort((a, b) => b.price - a.price);
      }
      return sortedMenu.filter((data) => {
        if(category === 0){
          return true;
        }
        return (data.categoryID === category);
      })
      .filter((data) => {
        if (query === '') {
          return true;
        }
        return (data.name.toString().toLowerCase().includes(query.toLowerCase())
        || data.like.toString().toLowerCase().includes(query.toLowerCase())
        || data.rating.toString().toLowerCase().includes(query.toLowerCase())
        || data.price.toString().toLowerCase().includes(query.toLowerCase()));
      }).map((data, index) => (
          <MenuItem key={index} onClickCapture={()=>{navigate(`/menu/${data.id}`, { replace: true })}}>
            <ContainerImage>
              <img src={data.photo} alt="pizza.png"></img>
            </ContainerImage>
            <ContentInfo>
              <NameStyled>{data.name}</NameStyled>
              <PriceStyled>{formatIDR(data.price)}</PriceStyled>
              <StyledCartButton onClick={()=>{navigate(`/profile`, { replace: true })}}>Add to cart</StyledCartButton>
            </ContentInfo>
          </MenuItem>
        ));
    }
  };

  const handleChangeDirection = (event) => {
    if(priceSort === ''){
      setPriceSort('asc');
    }
    else if(priceSort === 'asc'){
      setPriceSort('desc');
    }
    else if(priceSort === 'desc'){
      setPriceSort('asc');
    }
  };

  return (
    <>
    <NavbarTop></NavbarTop>
    <Container>
      <Banner>
        <img src={bannerMenu} alt="banner.png"></img>
      </Banner>
      <ContentContainer>
        <StyledInput type="text" placeholder="🔍&nbsp;&nbsp;&nbsp;&nbsp;Search" onChange={(event) => { setQuery(event.target.value); }}/>
        <StyledButton onClick={handleChangeDirection}>Price&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowsV}></FontAwesomeIcon></StyledButton>
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
      <MenuContainer>
        {renderMenu()}
      </MenuContainer>
    </Container>
    <NavbarBottom></NavbarBottom>
    </>
    
  )
}

export default Menu