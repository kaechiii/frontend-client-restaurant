import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background-color: palegoldenrod;
  position: fixed;
  z-index: 999;

  .logo{
    padding: 0.5rem 0.5rem;
  }

  .logocat{
    width: 100%;
    height: 100%;
  }
`

const MidNav = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: rgba(229,141,89,255);
  font-weight: 800;
  font-size: 1.3rem;
  gap: 1.5rem;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightNav = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: rgba(229,141,89,255);
  font-weight: 800;
  gap: 1.2rem;
  a{
    text-decoration: none;
    cursor: pointer;
    color: orange;
  }
  li {
    padding: 18px 10px;
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    li {
    padding: 5px 0;
    font-size: 1.8rem;
  }
    li:nth-child(2){
        display: none;
    }
  }
`;

const StyledLi = styled.li`
  a{
    text-decoration: none;
    cursor: pointer;
    color: orange;
  }
`

export {StyledLi, Nav, MidNav, RightNav};