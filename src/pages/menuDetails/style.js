import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  padding-bottom: 60px;

  @media (max-width: 1280px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    padding-bottom: 120px;
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

const GridContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    @media (max-width: 768px) {
        width: 100%;
    }
`

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 40%;
    align-content: center;
    img{
        object-fit: contain;
    }

    @media (max-width: 768px) {
        padding: 0 1.2rem;
        width: 100%;

        img{
        width: 100%;
    }
    }
`

const PriceContainer = styled.div`
    padding: 1.2rem 2rem;
    display: flex;
    justify-content: flex-end;
    color:orange;
`

const RatingLikeContainer = styled.div`
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
`

const RatingContainer = styled.div`
    display: flex;
    gap: 10px;
    .star{
        color: yellow;
    }
`

const LikeContainer = styled.div`
    display: flex;
    gap: 10px;
    .love{
        color:red;
    }
`

const BottomContainer = styled.div`
    position: fixed;
    bottom: 0;
    display: flex;
    width: 100%;
    background-color: #FAE29C;

    @media (max-width: 768px) {
        padding-bottom: 60px;
    }
`

const LikeButtonContainer = styled.div`
    display: flex;
    width : 20%;
    justify-content: center;
    font-size: 2rem;
    padding: 1rem 0;
    border-radius: 10px;
`

const CartButtonContainer = styled.div`
    display: flex;
    width: 80%;
    background-color: #e7c27d;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    font-size: 2rem;
    gap: 30px;
`

const StyledButtonCart = styled.button`
    border: none;
    background-color: #FAE29C;
    padding: .5rem .5rem;
    border-radius: 12px;
    font-size: 1.3rem;
`

const SubTotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
`

const ToppingContainer = styled.div`
    padding: 1rem 2rem;

    fieldset{
    text-align: center;
    padding: 1rem 1rem;
    border-color: orange;
    border-radius: 10px;
    border-width: 10px;

    legend{
      padding: 10px;
      font-size: 1.3rem
    }
  }
`

const BulletPointContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const TextCheck = styled.div`
    display:flex;
    gap: 5px;
`

const CheckboxContent = styled.div`
    display: flex;
    padding: 0.2rem 0.5rem;
    justify-content: space-between;
`

export { RightColumn, GridContainer, TextCheck, CheckboxContent, BulletPointContainer, ToppingContainer, SubTotalContainer, StyledButtonCart, LikeButtonContainer, CartButtonContainer, BottomContainer, LikeContainer, RatingContainer, RatingLikeContainer, PriceContainer, Container, HeaderTitleContainer, ImageContainer }