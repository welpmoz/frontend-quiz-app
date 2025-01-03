import QuizTopic from "./quiz-topic";

import { fetchQuizzes } from "../data";

export default async function Quizzes() {
    const quizzes = await fetchQuizzes();

    return (
        <div className="home__topics">
            {quizzes.map((quiz, i) => <QuizTopic key={i} {...quiz} />)}
        </div>
    );
}