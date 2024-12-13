import Header from "./components/header";
import QuizTopic from "./components/quiz-topic";
import { fetchQuizzes } from "./data";

export default async function Home() {
  const quizzes = await fetchQuizzes();

  return (
    <>
      <Header />
      <main className="grid-wrapper grid-wrapper--main">
        <div className="home">
          <div className="home__intro">
            <span className="home__welcome-message">
              Welcome to the <span className="home__welcome-message--highlight">Frontend Quiz!</span>
            </span>
            <span className="home__instructions">Pick a subject to get started.</span>
          </div>

          <div className="home__topics">
            {quizzes.map((quiz, i) => <QuizTopic key={i} {...quiz} />)}
          </div>
        </div>
      </main>
    </>
  );
}
