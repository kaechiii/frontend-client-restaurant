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

const Jumbotron = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 0 5rem;

    @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 2rem;
  }
`

const LeftJumbotron = styled.div`
    width: 50%;
    @media (max-width: 768px) {
        width: 100%;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 1rem;
`
const RightJumbotron = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
    width: 100%;
    }

  img{
    width: 100%;
  }

`
const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const HeroTitle = styled.div`
    font-size: 3.5rem;
    font-weight: 600;
    text-align: center;
    span{
        color: crimson;
    }

    @media (max-width: 768px) {
        font-size: 2rem;
    }
    @media (max-width: 1280px) {
        font-size: 2.5rem;
    }
`

const HeroTextContainer = styled.div`
    width: 62%;
    padding: 1rem 0;
    text-align: center;

    p{
        font-size: 1.1rem;

        @media (max-width: 768px) {
            font-size: .9rem;
    }
    }

    @media (max-width: 768px) {
        width: 100%;
    }

`

const ButtonContainer = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

const StyledButton = styled.button`
    color: orange;
    border-color: transparent;
    background-color: rgb(238,232,170);
    border-radius: 10px;
    font-size: 1.5rem;
    border-width: thin;
    padding: .5rem 1rem;
    &:focus {
        outline: none;
    }

    @media (min-width: 1280px) {
        font-size: 1.5vw;
    }
`
const CardContainer = styled.div`
  padding: 3rem 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const CardTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  padding-bottom: 1rem;
`

const CardColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  padding: 1rem 0;
  

  @media (max-width: 768px) {
    width: 70%;
    }
    
    @media (max-width: 480px) {
    width: 100%;
    }

    img{
        width: 100%;
    }
`

const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 3.5rem;
    }

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 2rem 2rem;
    }

`

const CardBox = styled.div`
  background-color: blanchedalmond;
  border-radius: 30px;
  padding: 1rem 0;
`

const ImageCardContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    background-color: beige;
    border-radius: 30px;
`

const TextCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 1.5rem;
    text-align: center;

    p{
        font-size: 1.1rem;
    }
`

export {TextCardContainer, ImageCardContainer, CardBox, CardColumn, CardRow, CardTitle, CardContainer, StyledButton, ButtonContainer, HeroTextContainer, HeroTitle, HeroContent, Container, Jumbotron, LeftJumbotron, RightJumbotron}