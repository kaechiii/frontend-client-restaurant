import React from 'react';
import pizzacat from '../../assets/pizzacat.png';
import { MidNav, Nav, RightNav, StyledLi } from './style';
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {cartUiActions} from "../../store/slices/cartUISlice";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const NavbarTop = () => {
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  return (
    <Nav>
      <div className="logo">
        <img className="logocat" src={pizzacat} alt='logo.png'></img>
      </div>
      <MidNav>
        <StyledLi>
          <Link to="/home">
            <p>Home</p>
          </Link>
        </StyledLi>
        <StyledLi>
          <Link to="/order">
            <p>Order</p>
          </Link>
        </StyledLi>
        <StyledLi>
          <Link to="/menu">
            <p>Menu</p>
          </Link>
        </StyledLi>
        <StyledLi>
          <Link to="/game">
            <p>Games</p>
          </Link>
        </StyledLi>
      </MidNav>
      <RightNav>
        <li><FontAwesomeIcon icon={faShoppingCart} onClick={toggleCart}></FontAwesomeIcon></li>
        <Link to="/profile">
        <li><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></li>
          </Link>
      </RightNav>
    </Nav>
  )
}

export default NavbarTop