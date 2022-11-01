import React from 'react'
import { useState } from 'react';
import { CouponContainer, CouponTextContainer, IconTextContainer, StyledButton } from './style';
import './style.css'
import {usePostCouponsMutation, usePatchHistoryMutation} from '../../store/api/gameApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';

function QuizGames({gameOverFunc, gameID}) {
    const questions = [
		{
			questionText: 'What percentage of peanuts is found in a standard jar of peanut butter??',
			answerOptions: [
				{ answerText: '60%', isCorrect: false },
				{ answerText: '75%', isCorrect: false },
				{ answerText: '90% (correct answer)', isCorrect: true },
				{ answerText: '95%', isCorrect: false },
			],
		},
		{
			questionText: 'Where were French fries invented?',
			answerOptions: [
				{ answerText: 'France', isCorrect: false },
				{ answerText: 'Belgium (correct answer)', isCorrect: true },
				{ answerText: 'Indonesia', isCorrect: false },
				{ answerText: 'India', isCorrect: false },
			],
		},
		{
			questionText: 'Where was Coca-Cola first served?',
			answerOptions: [
				{ answerText: 'Georgia (correct answer)', isCorrect: true },
				{ answerText: 'Florida', isCorrect: false },
				{ answerText: 'Texas', isCorrect: false },
				{ answerText: 'Seattle', isCorrect: false },
			],
		},
		{
			questionText: 'What is the most commonly-used flavor enhancer used by fast-food restaurants?',
			answerOptions: [
				{ answerText: 'Mustard', isCorrect: false },
				{ answerText: 'Pepper', isCorrect: false },
				{ answerText: 'Salt', isCorrect: false },
				{ answerText: 'MSG (correct answer)', isCorrect: true },
			],
		},
		{
			questionText: 'What is "affogato" ?',
			answerOptions: [
				{ answerText: 'Chocolate ice cream with sprinkles', isCorrect: false },
				{ answerText: 'Chocolate brand', isCorrect: false },
				{ answerText: 'Fancy avocado', isCorrect: false },
				{ answerText: 'Vanilla ice cream with a shot of espresso (correct answer)', isCorrect: true },
			],
		},
		{
			questionText: 'Where do taco originated from?',
			answerOptions: [
				{ answerText: 'Mexico (correct answer)', isCorrect: true },
				{ answerText: 'Cuba', isCorrect: false },
				{ answerText: 'Brazil', isCorrect: false },
				{ answerText: 'Japan', isCorrect: false },
			],
		},
		{
			questionText: 'Where would you find Tom Yum soup?',
			answerOptions: [
				{ answerText: 'Indonesia', isCorrect: false },
				{ answerText: 'Taiwan', isCorrect: false },
				{ answerText: 'Thailand (correct answer)', isCorrect: true },
				{ answerText: 'Singapore', isCorrect: false },
			],
		},
		{
			questionText: 'Where would you find rendang?',
			answerOptions: [
				{ answerText: 'Thailand', isCorrect: false },
				{ answerText: 'Taiwan', isCorrect: false },
				{ answerText: 'Indonesia (correct answer)', isCorrect: true },
				{ answerText: 'Singapore', isCorrect: false },
			],
		},
		{
			questionText: 'Which fruit contains the highest vitamin C?',
			answerOptions: [
				{ answerText: 'Pepper (correct answer)', isCorrect: true },
				{ answerText: 'Orange', isCorrect: false },
				{ answerText: 'Lemon', isCorrect: false },
				{ answerText: 'Strawberry', isCorrect: false },
			],
		},
		{
			questionText: 'Which fast food outlet has the largest number of restaurants in the world?',
			answerOptions: [
				{ answerText: 'McD', isCorrect: false },
				{ answerText: 'Pizza hut', isCorrect: false },
				{ answerText: 'KFC', isCorrect: false },
				{ answerText: 'Subway (correct answer)', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [coupon, setCoupon] = useState('');
	const [couponAmount, setCouponAmount] = useState(0);

	const [postCoupon] = usePostCouponsMutation();
	const [updateHistory] = usePatchHistoryMutation();

	const  shuffle = (array) => {
		let currentIndex = array.length,  randomIndex;
	  
		while (currentIndex !== 0) {

		  randomIndex = Math.floor(Math.random() * currentIndex);
		  currentIndex--;

		  [array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex]];
		}
	  
		return array;
	  }

	const selectedQuestion = shuffle(questions);

	const checkIfGetCoupon = (gameID) => {
		if(score >= 4){
			postCoupon({})
			.unwrap()
			.then((response) => {
				setCoupon(response.data.CouponType.coupon_code);
				setCouponAmount(response.data.CouponType.amount);
				HandleUpdateScore(gameID, response.data.CouponType.id);
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
		}

		HandleUpdateScore(gameID, 0);
	}

	const HandleUpdateScore = (gameID, couponTypeId) => {
		updateHistory({"history_id": gameID, "score": score, "coupon_type_id": couponTypeId})
			.unwrap()
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	const handleAnswerOptionClick = (isCorrect, gameID) => {
		if (isCorrect) {
			setScore(score + 1);
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion <= 5) {
			setCurrentQuestion(nextQuestion);
		} else {
			checkIfGetCoupon(gameID);
			setShowScore(true);
		}
	};
	return (
        <div className='app-container'>
            <div className='app'>
			{showScore ? (
				<div className='score-section'>
					<p>You scored {score} out of 5</p>
					{ couponAmount > 0 ? (
						<>
							<p>Congratulation! you get a voucher!</p>
							<CouponContainer>
								<IconTextContainer>
								<FontAwesomeIcon icon={faTags}></FontAwesomeIcon>
								</IconTextContainer>
								
								<CouponTextContainer>
									<p className="nameText">{coupon}</p>
									<p className="amountText">{couponAmount} off from your order</p>
								</CouponTextContainer>
							</CouponContainer>
						</>
					) : (
						<p>You don't get any voucher, try again next time~</p>
					)}
					
					<StyledButton onClick={()=>{gameOverFunc()}}>Back</StyledButton>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/5
						</div>
						<div className='question-text'>{selectedQuestion[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{selectedQuestion[currentQuestion].answerOptions.map((answerOption) => (
							<button className="quiz-button" onClick={() => handleAnswerOptionClick(answerOption.isCorrect, gameID)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
        </div>
		
	);
}

export default QuizGames