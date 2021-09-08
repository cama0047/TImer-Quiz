import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Countdown from "./components/Countdown";
import React,{useState} from 'react'

function App() {
  const MinSecs = { minutes: 1, seconds: 0 };

 const questions = [
   {
     questionText: "What is the capital of France?",
     answerOptions: [
       { answerText: "New York", isCorrect: false },
       { answerText: "London", isCorrect: false },
       { answerText: "Paris", isCorrect: true },
       { answerText: "Dublin", isCorrect: false },
     ],
   },
   {
     questionText: "Who is CEO of Tesla?",
     answerOptions: [
       { answerText: "Jeff Bezos", isCorrect: false },
       { answerText: "Elon Musk", isCorrect: true },
       { answerText: "Bill Gates", isCorrect: false },
       { answerText: "Tony Stark", isCorrect: false },
     ],
   },
   {
     questionText: "The iPhone was created by which company?",
     answerOptions: [
       { answerText: "Apple", isCorrect: true },
       { answerText: "Intel", isCorrect: false },
       { answerText: "Amazon", isCorrect: false },
       { answerText: "Microsoft", isCorrect: false },
     ],
   },
   {
     questionText: "How many Harry Potter books are there?",
     answerOptions: [
       { answerText: "1", isCorrect: false },
       { answerText: "4", isCorrect: false },
       { answerText: "6", isCorrect: false },
       { answerText: "7", isCorrect: true },
     ],
   },
 ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };


  return (
    <div className="App">
      <Countdown MinSecs={MinSecs} />

      <div>
        {showScore ? (
          <h1 >
            You scored {score} out of {questions.length}
          </h1>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                  <h2>
                <span>
                    Question {currentQuestion + 1}
                  {" "}
                 </span>
                /{questions.length}
                    </h2>
              </div>
              <h2>{questions[currentQuestion].questionText}</h2>
            </div>
            <div class="d-grid gap-2 col-6 mx-auto">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
