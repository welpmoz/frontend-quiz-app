import Header from "../components/header";
import Quiz from "../components/quiz";

import { fetchQuiz } from "../data";

export default async function Page({
  params
}) {
  // TODO: Add here reference to end quiz for change
  // the view
  const quizName = (await params).quiz;
  const quiz = await fetchQuiz(quizName);

  // work with first question
  const {
    questions,
    title,
    icon,
  } = quiz;

	return (
		<>
			<Header topic={title} icon={icon} />
			<main className="grid-wrapper grid-wrapper--main">
        <Quiz questions={questions} title={title} icon={icon} />
      </main>
		</>
	);
}
