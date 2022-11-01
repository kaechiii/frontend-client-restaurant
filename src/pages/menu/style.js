import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;

  @media (max-width: 1280px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    padding-bottom: 60px;
    padding-top: 80px;
  }
`

const Banner = styled.div`
    img{
        width: 100%;
    }
`

const ContentContainer = styled.div`
  padding: 20px 20rem;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  gap: 1rem;
  @media (max-width: 1280px) {
    padding: 15px 10rem;
  }

  @media (min-width: 768px) and (max-width: 1280px){
    padding: 15px 5rem;
  }

  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`

const StyledInput = styled.input`
    padding: 0.8rem 2rem;
    width: 80%;
    color: orange;
    border-color: rgba(237,237,237,255);
    background-color: rgb(238,232,170, .3);
    border-radius: 0.3rem;
    font-size: 0.9rem;
    border-top: thin;
    border-left: thin;
    &:focus {
        outline: none;
    }
    ::placeholder{
        font-weight: bold;
        color: orange;
    }

    @media (max-width: 768px) {
        width: 75%;
    }

    @media (min-width: 1280px) {
        font-size: 1vw;
    }
`

const StyledButton = styled.button`
    color: orange;
    width: 10%;
    border-color: transparent;
    background-color: rgb(238,232,170);
    border-radius: 0.3rem;
    font-size: 0.9rem;
    border-width: thin;
    &:focus {
        outline: none;
    }

    @media (max-width: 1280px) {
        width: 10%;
    }

    @media (max-width: 768px) {
        width: 25%;
    }

    @media (min-width: 1280px) {
        font-size: 1vw;
    }
`

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 20rem;
  justify-content: center;
  gap: 1.5vw;
  @media (max-width: 1280px) {
    padding: 0 20px;
  }
`

const CategoryButton = styled.div`
  display: flex;
  flex-direction: column;
  background-color: palegoldenrod;
  color: orange;
  padding: 5vh 9vw;
  border-radius: 5px;
  font-size: 1.2rem;
  gap: 10px;
  justify-content: space-around;

  @media (max-width: 768px) {
    padding: 4vh 9vw;
  }

  @media (min-width: 768px) {
    padding: 3vh 5.5vw;
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    padding: 2vh 6vw;
  }

  @media (min-width: 1280px) {
    font-size: 2vw;
    padding: 5vh 7.5vw;
  }
`

const MenuContainer = styled.div`
    padding: 15px 20px;
    display: flex;
    width: 100%;
    gap: 3rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 992px) {
    flex-direction: row;
    
    gap: 1rem;
  }

  @media (min-width: 1280px) {
    padding: 15px 10vw;
    }
`

const MenuItem = styled.div`
    background: rgb(238,232,170);
    background: linear-gradient(90deg, rgba(238,232,170,1) 0%, rgba(255,217,128,1) 35%, rgba(255,223,92,1) 100%);
    padding: 0.5rem 0.5rem;
    border-radius: 1rem;
    width: 40vw;
    color: orange;
    display: flex;
    flex-direction: row;
    gap: 1rem;

    @media (min-width: 1280px) {
        width: 32vw;
    }

    @media (max-width: 1280px) {
        width: 33vw;
    }

    @media (max-width: 768px) {
    width: 90%;
    gap: 1rem;
  }
`

const ContainerImage = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    img{
        width: 100%;
        border-radius: 1rem;
    }
`

const ContentInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 0.5rem 0.5rem;
    justify-content: space-around;
`

const StyledCartButton = styled.button`
    color: orange;
    border-color: transparent;
    background-color: white;
    border-radius: 0.3rem;
    font-size: 1.5vw;
    padding: 0.3rem 0.5rem;
    border-width: thin;
    width: 80%;
    align-self: center;
    &:focus {
        outline: none;
    }

    @media (max-width: 768px) {
        font-size: 4vw;
    }
`

const NameStyled = styled.p`
    color: black;
    font-size: 2vw;

    @media (max-width: 768px) {
        font-size: 5.5vw;
  }
`

const PriceStyled = styled.p`
    color: black;
    font-size: 1.5vw;

    @media (max-width: 768px) {
        font-size: 5.5vw;
    }
`

export { ContainerImage, PriceStyled, NameStyled, ContentInfo, StyledCartButton, MenuItem, MenuContainer, CategoryButton, CategoryContainer, StyledButton, StyledInput, Container, Banner, ContentContainer };