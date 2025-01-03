import { Suspense } from "react";
import Header from "./components/header";
import Quizzes from "./components/quizzes";

export default async function Home() {
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

          <Suspense fallback={<p>Loading... Other elements are interactive</p>}>
            <Quizzes />
          </Suspense>
        </div>
      </main>
    </>
  );
}
