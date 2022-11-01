import React from 'react';
import { BottomLi, BottomNav, BottomUl} from './style';
import { faGamepad, faHome, faReceipt, faUser, faUtensils} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const NavbarBottom = () => {
  return (
    <BottomNav>
      <BottomUl>
        <BottomLi>
          <Link to="/home">
          <FontAwesomeIcon icon={faHome} />
            <p>Home</p>
          </Link>
        </BottomLi>
        <BottomLi>
          <Link to="/order">
            <FontAwesomeIcon icon={faReceipt} />
            <p>Order</p>
          </Link>
        </BottomLi>
        <BottomLi>
          <Link to="/menu">
            <FontAwesomeIcon icon={faUtensils} />
            <p>Menu</p>
          </Link>
        </BottomLi>
        <BottomLi>
          <Link to="/game">
            <FontAwesomeIcon icon={faGamepad} />
            <p>Games</p>
          </Link>
        </BottomLi>
        <BottomLi>
          <Link to="/profile">
            <FontAwesomeIcon icon={faUser} />
            <p>Profile</p>
          </Link>
        </BottomLi>
      </BottomUl>
    </BottomNav>
  )
}

export default NavbarBottom