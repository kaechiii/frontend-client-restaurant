import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { RatingLikeContainer, Container, HeaderTitleContainer, ImageContainer, PriceContainer, RatingContainer, LikeContainer, BottomContainer, LikeButtonContainer, CartButtonContainer, StyledButtonCart, SubTotalContainer, ToppingContainer, BulletPointContainer, CheckboxContent, TextCheck, GridContainer, RightColumn } from './style';
import {useGetMenuByIdQuery} from '../../store/api/menuApi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import {formatIDR} from '../../helpers/formatter';
import {usePostItemMutation} from '../../store/api/cartApi';
import NavbarTop from '../../components/NavBarTop';
import NavbarBottom from '../../components/NavBarBottom';

function MenuDetails() {
  const {id} = useParams();
  const {
    data: menu,
    error: getMenuError,
    isLoading: isLoadingMenu,
  } = useGetMenuByIdQuery({id});

  const [addToCart] = usePostItemMutation();

  const [mushroom, setMushroom] = useState(0);
  const [beefRasher, setBeefRasher] = useState(0);
  const [chickenCutlet, setChickenCutlet] = useState(0);
  const [mozzarella, setMozzarella] = useState(0);

  const beefRef = useRef(null);
  const mushroomRef = useRef(null);
  const chickenCutletRef = useRef(null);
  const mozarellaRef = useRef(null);

  const navigate = useNavigate();

  useEffect (() => {
    if(!isLoadingMenu){
        setSubTotal(menu.data.price)
    }
  }, [menu])

  const [subTotal, setSubTotal] = useState(0);

  const checkTopping = () => {
    const toppingArray = [];
    if(mushroom === 1){
        toppingArray.push('Mushroom');
    }
    if(beefRasher === 1){
        toppingArray.push('Beef rasher');
    }
    if(chickenCutlet === 1){
        toppingArray.push('Chicken cutlet');
    }
    if(mozzarella === 1){
        toppingArray.push('Mozzarella');
    }

    return toppingArray;
  }

  const addCartHandler = () => {
    const toppingArray = checkTopping();
    addToCart({toppings: toppingArray, size: selectedSize, price: subTotal, quantity: 1, menu_id: parseInt(id)})
        .unwrap()
        .then((response) => {
            // setStatusMessage('Add to cart success');
            // setShowModal(true);
            navigate('/menu', { replace: true })
          })
        .catch((error) => {
            // setStatusMessage(error);
            // setShowModal(true);
        });
  }


  const renderPage = () => {
    if (getMenuError) {
        return ;
      } if (menu) {
        return(
            <div>
                <HeaderTitleContainer>
                    <FontAwesomeIcon icon={faArrowLeft} onClick={() => {navigate('/menu', { replace: true })}}></FontAwesomeIcon>
                    <p>{menu.data.name}</p>
                    <div></div>
                </HeaderTitleContainer>
                <GridContainer>
                    <ImageContainer>
                        <img src={menu.data.photo} alt={menu.data.name}></img>
                    </ImageContainer>
                    <RightColumn>
                        <div>
                        <PriceContainer>
                            <h1>{formatIDR(menu.data.price)}</h1>
                        </PriceContainer>
                        <RatingLikeContainer>
                            <RatingContainer>
                                <FontAwesomeIcon icon={faStar} className="star"></FontAwesomeIcon>
                                <h4>{Math.round(menu.data.rating * 100) / 100}</h4>
                            </RatingContainer>
                            <LikeContainer>
                                <FontAwesomeIcon icon={faHeart} className="love"></FontAwesomeIcon>
                                <h4>{menu.data.likes}</h4>
                            </LikeContainer>
                        </RatingLikeContainer>
                        </div>
                        <ToppingContainer>
                <fieldset>
                    <legend>Choose your toppings: </legend>
                        <BulletPointContainer>
                        <label>
                            <CheckboxContent>
                                <TextCheck>
                                    <input
                                        ref={mushroomRef}
                                        type="checkbox"
                                        onChange={() => {addToppingMushroom()}}
                                        id="mushroom"
                                        name="mushroom"
                                    />
                                    <p>Mushroom</p>
                                </TextCheck>
                                <p className='price'>+ Rp 11.000,00</p>
                            </CheckboxContent>
                        </label>
                        <label>
                            <CheckboxContent>
                                <TextCheck>
                                    <input
                                        ref={beefRef}
                                        type="checkbox"
                                        onChange={() => {addToppingBeef()}}
                                        id="beefrasher"
                                        name="beefrasher"
                                    />
                                    <p>Beef rasher</p>
                                </TextCheck>
                                <p className='price'>+ Rp 23.700,00</p>
                            </CheckboxContent>  
                        </label>
                        <label>
                            <CheckboxContent>
                                <TextCheck>
                                    <input
                                        ref={chickenCutletRef}
                                        type="checkbox"
                                        onChange={() => {addToppingChicken()}}
                                        id="chickencutlet"
                                        name="chickencutlet"
                                    />
                                    <p>Chicken cutlet</p>
                                </TextCheck>
                                <p className='price'>+ Rp 18.500,00</p>
                            </CheckboxContent>
                        </label>
                        <label>
                            <CheckboxContent>
                                <TextCheck>
                                <input
                                    ref={mozarellaRef}
                                    type="checkbox"
                                    onChange={() => {addMozzarella()}}
                                    id="mozzarella"
                                    name="mozzarella"
                                />
                                <p>Mozzarella</p>
                                </TextCheck>
                                <p className='price'>+ Rp 14.000,00</p>
                            </CheckboxContent>
                        </label>
                        </BulletPointContainer>
                </fieldset>
                <fieldset>
                    <legend>Choose serving size: </legend>
                        <BulletPointContainer>
                        <label>
                            <CheckboxContent>
                                <TextCheck>
                                    <input
                                        type="radio"
                                        onChange={checkMedium}
                                        id="size"
                                        name="size"
                                        value="Medium"
                                        checked={selectedSize === 'Medium'}
                                    />
                                    <p>Medium</p>
                                </TextCheck>
                            </CheckboxContent>
                        </label>
                        <label>
                            <CheckboxContent>
                                <TextCheck>
                                    <input
                                        type="radio"
                                        onChange={checkLarge}
                                        id="size"
                                        name="size"
                                        value="Large"
                                        checked={selectedSize === 'Large'}
                                    />
                                    <p>Large</p>
                                </TextCheck>
                                <p className='price'>+ Rp 30.000,00</p>
                            </CheckboxContent>
                        </label>
                        </BulletPointContainer>
                </fieldset>
        </ToppingContainer>
                    </RightColumn>
                </GridContainer>
                <BottomContainer>
                    <LikeButtonContainer>
                        <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                    </LikeButtonContainer>
                    <CartButtonContainer>
                        <SubTotalContainer>
                            <h5>Subtotal: </h5>
                            <h4>{subTotal}</h4>
                        </SubTotalContainer>
                        <StyledButtonCart onClick={addCartHandler}>Add to cart</StyledButtonCart>
                    </CartButtonContainer>
                </BottomContainer>
            </div>
        )
      }
  }

  const addToppingMushroom = () => {
    let newSubtotal = 0
    if(mushroomRef.current.checked){
        newSubtotal = subTotal + 11000;   
        setMushroom(1)
    }
    else{
        newSubtotal = subTotal - 11000;
        setMushroom(0)
    }
    setSubTotal(newSubtotal);
  }

  const addToppingBeef = () => {
    let newSubtotal = 0
    if(beefRef.current.checked){
        newSubtotal = subTotal + 23700;   
        setBeefRasher(1)
    }
    else{
        newSubtotal = subTotal -23700;
        setBeefRasher(0)
    }
    setSubTotal(newSubtotal);
  }

  const addToppingChicken = () => {
    let newSubtotal = 0
    if(chickenCutletRef.current.checked){
        newSubtotal = subTotal + 18500;   
        setChickenCutlet(1)
    }
    else{
        newSubtotal = subTotal -18500;
        setChickenCutlet(0)
    }
    setSubTotal(newSubtotal);
  }

  const addMozzarella = () => {
    let newSubtotal = 0
    if(mozarellaRef.current.checked){
        newSubtotal = subTotal + 14000;  
        setMozzarella(1) 
    }
    else{
        newSubtotal = subTotal -14000;
        setMozzarella(0)
    }
    setSubTotal(newSubtotal);
  }

  const checkMedium = (event) => {
    setSelectedSize(event.target.value)
    let newSubtotal = 0
    newSubtotal = subTotal - 30000;
    setSubTotal(newSubtotal);
  }

  const checkLarge = (event) => {
    setSelectedSize(event.target.value)
    let newSubtotal = 0
    newSubtotal = subTotal + 30000;
    setSubTotal(newSubtotal);
  }

  const [selectedSize, setSelectedSize] = useState('Medium');
  
  return (
    <>
    <NavbarTop></NavbarTop>
    <Container>
        {renderPage()}
    </Container>
    <NavbarBottom></NavbarBottom>
    </>
    
  )
}

export default MenuDetails