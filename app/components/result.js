import Link from "next/link";
import HeaderTopic from "./header-topic";

export default function Result({
	score,
	totalQuestions,
	title,
	icon
}) {
	return (
		<div className="result">
			<div className="result__message-wrapper">
				<span className="result__message">Quiz completed</span>
				<span className="result__message result__message--highlighted">You scored...</span>
			</div>

			<div className="result__score-wrapper">
				<div className="result__summarize">
					<HeaderTopic icon={icon} topic={title} />
					<div className="result__score">
						<span className="result__points">{score}</span>
						<span className="result__total">out of {totalQuestions}</span>
					</div>
				</div>
				<Link
					className="quiz__button"
					href="/"
				>
					Plan Again
				</Link>
			</div>
		</div>
	);
}