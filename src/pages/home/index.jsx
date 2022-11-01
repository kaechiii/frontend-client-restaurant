import React from 'react'
import { ButtonContainer, CardBox, CardColumn, CardContainer, CardRow, CardTitle, Container, HeroContent, HeroTextContainer, HeroTitle, ImageCardContainer, Jumbotron, LeftJumbotron, RightJumbotron, StyledButton, TextCardContainer } from './style'
import pizzaJumbotron from '../../assets/pizza-jumbotron.png'
import pizzaCard from '../../assets/pizza-card.png'
import pastaCard from '../../assets/pasta-card.png'
import mocktailCard from '../../assets/mocktail-card.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import NavbarTop from '../../components/NavBarTop'
import NavbarBottom from '../../components/NavBarBottom'

function Home() {
  return (
    <>
    <NavbarTop></NavbarTop>
        <Container>
        <Jumbotron>
            <LeftJumbotron>
                <HeroContent>
                    <HeroTitle>
                        <span>HUNGRY?</span> Order your food at 
                        <span> PIZZA CAT! </span>
                    </HeroTitle>
                    <HeroTextContainer>
                        <p>
                            Pizza cat available to your nearest shopping mall to serve 
                            you fresh pizza, pasta, and best beverages for you and your loved one!
                        </p>
                    </HeroTextContainer>
                    <ButtonContainer>
                        <p>Visit our menu here:</p>
                        <StyledButton>Menu</StyledButton>
                    </ButtonContainer>
                </HeroContent>
            </LeftJumbotron>
            <RightJumbotron>
                <img src={pizzaJumbotron} alt="jumbotron.png" />
            </RightJumbotron>
        </Jumbotron>
        <CardContainer>
            <CardTitle>
                What we serve:
            </CardTitle>
            <CardRow>
                <CardColumn>
                    <CardBox>
                        <ImageCardContainer>
                            <img src={pizzaCard} alt="pizza-card.png" />
                        </ImageCardContainer>
                        <TextCardContainer>
                            <h2>Pizza</h2>
                            <p>Fresh pizza baked with love especially for you <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></p>
                        </TextCardContainer>
                    </CardBox>
                </CardColumn>
                <CardColumn>
                    <CardBox>
                        <ImageCardContainer>
                            <img src={pastaCard} alt="pasta-card.png" />
                        </ImageCardContainer>
                        <TextCardContainer>
                            <h2>Pasta</h2>
                            <p>Pasta freshly made with high quality ingredients</p>
                        </TextCardContainer>
                    </CardBox>
                </CardColumn>
                <CardColumn>
                    <CardBox>
                        <ImageCardContainer>
                            <img src={mocktailCard} alt="drink-card.png" />
                        </ImageCardContainer>
                        <TextCardContainer>
                            <h2>Drink</h2>
                            <p>Drink perfectly crafted by our talented baristas</p>
                        </TextCardContainer>
                    </CardBox>
                </CardColumn>
            </CardRow>
        </CardContainer>
    </Container>
    <NavbarBottom></NavbarBottom>
    </>
    
    
  )
}

export default Home