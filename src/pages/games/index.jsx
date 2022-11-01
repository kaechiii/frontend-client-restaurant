import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import QuizGames from '../../components/QuizGame'
import { Container, ContentContainer, HeaderTitleContainer, LeaderboardContainer, NameIndex, StyledButton } from './style'
import './style.css'
import {useGetLiveQuery, usePostNewHistoryMutation, useGetLeaderboardQuery} from '../../store/api/gameApi';
import { useEffect } from 'react'
import NavbarBottom from '../../components/NavBarBottom'
import NavbarTop from '../../components/NavBarTop'

function Games() {
  const navigate = useNavigate();
  const [toggleState, setToggleState] = useState(1);
  const [gameStart, setGameStart] = useState (0);
  const [live, setLive] = useState(3);
  const [historyID, setHistoryID] = useState();

  const [postHistory] = usePostNewHistoryMutation();

  const {
    data: liveData,
    isLoading: isLoadingLive,
  } = useGetLiveQuery();

  const {
    data: leaderboard,
    error: getLeaderboardError,
  } = useGetLeaderboardQuery();

  useEffect (() => {
    if(!isLoadingLive){
        setLive(liveData.data)
    }
  }, [liveData])

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const HandleStartGame = () => {
    if(live !== 0){
        setGameStart(1)

        postHistory({})
        .unwrap()
        .then((response) => {
            setHistoryID(response.data.id)
          })
        .catch((error) => {
        });
    }
  }

  const RenderLeaderboard = () => {
    if (getLeaderboardError) {
        return 0;
      } if (leaderboard) {
        if (leaderboard.length === 0 || leaderboard.data === null) 
        { 
          return (
            <p>No leaderboard data to display</p>
          )
        }
        let arrayCopy = leaderboard.data.map((data) => data);
        let sortedData = arrayCopy.sort((a, b) => b.score - a.score);
        return sortedData.slice(0, 10).map((data, index) => (
            <LeaderboardContainer>
                <NameIndex>
                <p>{index + 1}</p>
                <p>{data.User.name}</p>
                </NameIndex>
                <p className = "textRight">{data.score}</p>
            </LeaderboardContainer>
          ));
      }
  }

  return (
    <>
    <NavbarTop></NavbarTop>
      <Container>
        <HeaderTitleContainer>
            <FontAwesomeIcon icon={faArrowLeft} onClick={() => {navigate('/menu', { replace: true })}}></FontAwesomeIcon>
            <p>Games</p>
            <div></div>
        </HeaderTitleContainer>
        <ContentContainer>
        <div className="container">
            <div className="bloc-tabs">
                <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
                >
                Home
                </button>
                <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
                >
                Leaderboard
                </button>
            </div>

            <div className="content-tabs">
                <div
                className={toggleState === 1 ? "content  active-content" : "content"}
                >
                    {gameStart === 1 ? (
                        <QuizGames 
                        gameOverFunc = {() => {setGameStart(0)}}
                        gameID = {historyID}
                        ></QuizGames> 
                    ) : (
                        <div>
                        <h1>Welcome to pizza cat quiz!</h1>
                        <h3>
                            Today chances to play: {live}
                        </h3>
                        <p>
                            Pizza cat quiz is a multiple choice game about random food trivia! if you score equal or more than 80% of the question you will receive a voucher code to use for your next order!
                        </p>
                        <StyledButton onClick={HandleStartGame}>
                            Play now
                        </StyledButton>
                    </div>
                    )}
                    
                </div>
                <div
                className={toggleState === 2 ? "content  active-content" : "content"}
                >
                {
                    RenderLeaderboard()
                }
                </div>
            </div>
        </div>
        </ContentContainer>
        
    </Container>
    <NavbarBottom></NavbarBottom>
    </>
    
  )
}

export default Games