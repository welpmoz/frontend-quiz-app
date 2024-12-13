import { useRef, useState } from "react";
import Options from "./options";
import { submitAnswer } from "../data";

export default function QuestionForm({
	progress,
	goToNextQuestion,
	question,
	title,
	addScore,
}) {
	const {options, question: questionTitle} = question;
	const selectAnswerError = useRef(null);
	const [selectedOption, setSelectedOption] = useState(null);
	const optionsContainer = useRef(null);

	const buttonNextQuestion = useRef(null);
	const buttonSubmitAnswer = useRef(null);

	const handleChange = (e) => {
		setSelectedOption(e.target.value);
	};

	const showAfterSubmit = (evaluation) => {
		let {
			is_correct,
			option_marked,
			correct_option,
		} = evaluation;

		// get all options
		let labelOptions = optionsContainer.current.querySelectorAll('label.quiz__option');

		for (let option of labelOptions) {
			if (option.innerText === correct_option) {
				option.classList.add('quiz__option--correct');
				break;
			}
		}

		if (!is_correct) {
			// show error icons
			for (let option of labelOptions) {
				if (option.innerText === option_marked) {
					option.classList.add('quiz__option--incorrect');
					break;
				}
			}
		}

		for (let option of labelOptions) {
			option.classList.remove('quiz__option--checkable');
		}

		buttonNextQuestion.current.classList.replace('quiz__button--hidden', 'quiz__button--visible');
		buttonSubmitAnswer.current.classList.replace('quiz__button--visible', 'quiz__button--hidden');
	};

	const cleanState = () => {
		let labelOptions = optionsContainer.current.querySelectorAll('label.quiz__option');
		for (let option of labelOptions) {
			option.classList = 'quiz__option quiz__option--checkable';
		}

		let inputOptions = optionsContainer.current.querySelectorAll('input.quiz__option-input');
		for (let option of inputOptions) {
			option.checked = false;	
		}

		setSelectedOption(null);

		buttonNextQuestion.current.classList.replace('quiz__button--visible', 'quiz__button--hidden');
		buttonSubmitAnswer.current.classList.replace('quiz__button--hidden', 'quiz__button--visible');
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (selectedOption === null) {
			selectAnswerError.current.classList.replace('quiz__feedback--hidden', 'quiz__feedback--visible');
		} else {
			selectAnswerError.current.classList.replace('quiz__feedback--visible', 'quiz__feedback--hidden');
			// submit solution to backend
			let answerEvalutation = await submitAnswer(title, progress, selectedOption);
			showAfterSubmit(answerEvalutation);

			if (answerEvalutation.is_correct) {
				addScore();
			}
		}
	};

	return (
		<form className="quiz" onSubmit={handleSubmit} onChange={handleChange}>
			<div className="quiz__header">
				<span className="quiz__progress">Question {progress} of 10</span>
				<span className="quiz__question">
					{questionTitle}
				</span>
				<div className="quiz__progress-bar-wrapper">
					<div className="quiz__progress-bar" style={{
						width: `${progress * 10}%`
					}}></div>	
				</div>
			</div>

			<div className="quiz__body" ref={optionsContainer}>
				<Options options={options} />
				<button
					className="quiz__button quiz__button--hidden"
					onClick={() => {
						cleanState();
						goToNextQuestion();
					}}
					ref={buttonNextQuestion}
					type="button"
				>
					Next Question
				</button>
				<button
					className="quiz__button quiz__button--visible"
					ref={buttonSubmitAnswer}
					type="submit"
				>
					Submit Answer
				</button>
				<span className="quiz__feedback quiz__feedback--hidden" ref={selectAnswerError}>
					<img className="quiz__icon quiz__icon--error" src="/images/icon-error.svg" alt="Error icon" />
					<span className="quiz__feedback-message">Please select an answer</span>
				</span>
			</div>																			
		</form>
	);
}