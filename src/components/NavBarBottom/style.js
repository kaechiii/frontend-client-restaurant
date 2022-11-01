import styled from 'styled-components';

const BottomNav = styled.nav`
  display: none;

  @media (max-width: 768px) {
    height: 60px;
    position: fixed;
    bottom: 0;
    background-color: palegoldenrod;
    display: flex;
    align-items: center;
    width: 100%;
  }
`

const BottomUl = styled.ul`
  @media (max-width: 768px){
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding: 10px 18px;
  }
`

const BottomLi = styled.li`
  a{
    text-decoration: none;
    color:orange;
    cursor: pointer;
  }
  @media (max-width: 768px){
    color: orange;
    text-align: center;
  }
`

export {BottomNav, BottomUl, BottomLi};