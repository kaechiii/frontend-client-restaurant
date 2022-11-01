import styled from "styled-components"

const ReviewContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 1rem 0;
  gap: 10px;
`

const StarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Star = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.5rem;
`

const StyledTextArea = styled.textarea`
  border: 1px solid #a9a9a9;
  border-radius: 5px;
  min-height: 100px;
  width: 50%;
  padding: 10px 10px;
`

const StyledSubmitButton = styled.button`
  background-color: rgb(238,232,170);
  border: none;
  border-radius: 10px;
  color: black;
  padding: .7rem 1rem;
  font-weight: 600;
  font-size: 1rem;

  @media (max-width: 768px) {
        width: 30%;
        padding: .5rem 1rem;
    }
`

export {ReviewContainer, StarContainer, Star, StyledTextArea, StyledSubmitButton}