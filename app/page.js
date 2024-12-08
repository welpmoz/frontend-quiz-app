import QuizTopic from "./components/quiz-topic";

export default function Home() {
  return (
    <div className="quiz">
      <div className="quiz__intro">
        <span className="quiz__welcome-message">
          Welcome to the <span className="quiz__welcome-message--highlight">Frontend Quiz!</span>
        </span>
        <span className="quiz__instructions">Pick a subject to get started.</span>
      </div>

      <div className="quiz__topics">
        <QuizTopic iconPath="/images/icon-css.svg" topic="CSS" />
        <QuizTopic iconPath="/images/icon-js.svg" topic="Javascript" />
        <QuizTopic iconPath="/images/icon-html.svg" topic="HTML" />
        <QuizTopic iconPath="/images/icon-accessibility.svg" topic="Accesibility" />
      </div>
    </div>
  );
}
