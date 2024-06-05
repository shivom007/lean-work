
import { useState, useEffect } from "react";
import QuestionHeader from "./components/question-header/QuestionHeader";
import "./App.css";
import { questions } from "./constants/questions/index.js";
import Question from "./components/question/Question";

function App() {
  const [remainingTime, setRemainingTime] = useState(3600);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [isSelected, setIsSelected] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);
  const [answers, setAnswers] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
  });
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (!isSubmitted) {
      const timer = setInterval(() => {
        setRemainingTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isSubmitted]);

  const handleNext = (next) => {
    if(!answers[selectedOption]) {
      setTotal((prev) => prev + selectedOption);
    }
    
    if (currentQuestion >= questions.length) {
      setIsSubmitted(true);

      setCurrentQuestion(questions.length);
      setIsSelected(false);
      return;
    }
    setCurrentQuestion(next);
    setIsSelected(false);
  };
  const handleOption = (question, option, point) => {
    setIsSelected(true);
    setSelectedOption(point);

    setAnswers((prev) => ({
      ...prev,
      [question]: option,
    }));
  };
  const handlePrevious = (previous) => {
    setCurrentQuestion(previous);
    setIsSelected(true);
  };

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className="app-container"
    >
      
      <QuestionHeader
        questionNumber={currentQuestion}
        totalQuestions={questions.length}
        remainingTime={formatTime(remainingTime)}
      />
      {isSubmitted && (
        <div className="score-container"
          
        >
          {" "}
          <span>Your Total score is :</span>
          <h1>{total}</h1>
        </div>
      )}
      {questions && !isSubmitted &&
        questions.map(
          (question, index) =>
            currentQuestion === question.id && (
              <div
                style={{
                  height: "auto",
                  padding: 0,
                }}
                key={index + 1}
              >
                <Question
                  isSelected={isSelected}
                  setIsSelected={setIsSelected}
                  handleNext={handleNext}
                  question={question}
                  handleOption={handleOption}
                  answer={answers[question.id]}
                  handlePrevious={handlePrevious}
                />
              </div>
            )
        )}
      
    </div>
  );
}

export default App;
