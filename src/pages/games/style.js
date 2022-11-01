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

const HeaderTitleContainer = styled.div`
    padding: 1rem 1rem;
    display: flex;
    justify-content: space-between;
    color:orange;
    font-size: 2rem;
    word-wrap: break-word;
    gap: 5vw;
`

const ContentContainer = styled.div`
    padding: 0 2rem;
    width: 80%;
    margin: 0 auto;

    @media (max-width: 768px) {
        padding: 0 .1rem;
  }
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

const LeaderboardContainer = styled.div`
    display:flex;
    justify-content: space-between;
    width: 100%;
    background-color: palegoldenrod;
    padding: 1rem 0;
`

const NameIndex = styled.div`
    display:flex;
    width: 100%;
`

export {LeaderboardContainer, NameIndex, StyledButton, Container, HeaderTitleContainer, ContentContainer}