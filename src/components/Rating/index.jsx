import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { ReviewContainer, Star, StarContainer, StyledSubmitButton, StyledTextArea } from './style';

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
  };

function Rating({handleSubmitFunc, orderDetailID, menuID}) {
  const stars = Array(5).fill(0)
  const [starValue, setStarValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [description, setDescription] = useState('');
  const handleClick = value => {
    setStarValue(value)
  }
  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };
  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  return (
    <ReviewContainer>
      <StarContainer>
        <StarContainer>
            <Star>
                {stars.map((_, index) => {
            return (
                <FontAwesomeIcon icon={faStar}
                key={index}
                size={24}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={(hoverValue || starValue) > index ? colors.orange : colors.grey}
                style={{
                    cursor: "pointer"
                }}
                />
            )
            })}
            </Star>
        </StarContainer>
      </StarContainer>
      <StarContainer>
        <StyledTextArea value={description} 
          onChange={(event)=>{setDescription(event.target.value)}}></StyledTextArea>
      </StarContainer>
      <StarContainer>
        <StyledSubmitButton onClick={()=> {handleSubmitFunc(orderDetailID, menuID, description, starValue)}}>Submit</StyledSubmitButton>
      </StarContainer>
  </ReviewContainer>
  )
}

export default Rating