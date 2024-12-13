'use client';

import { useState } from "react";
import QuestionForm from "./question-form";
import Result from "./result";

export default function Quiz({
	title,
	icon,
	questions,
}) {
	const [score, setScore] = useState(0);
	const [progress, setProgress] = useState(1);

	const goToNextQuestion = () => {
		setProgress((oldProgress) => oldProgress + 1);
	}

	return (
		(progress !== questions.length + 1)
		? <QuestionForm
			progress={progress}
			goToNextQuestion={goToNextQuestion}
			question={questions[progress - 1]}
			title={title}
			addScore={() => setScore(score + 1)}
		/>
		: <Result
			icon={icon}
			score={score}
			title={title}
			totalQuestions={questions.length}
		/>
	);
}