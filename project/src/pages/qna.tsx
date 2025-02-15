import React, { useState, useEffect } from "react";

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      nextQuestion();
    }
  }, [timeLeft]);

  const handleAnswerClick = (option) => {
    setSelectedAnswers((prev) => ({ ...prev, [currentQuestion]: option }));
    if (option === questions[currentQuestion].answer) {
      setCorrectAnswers(correctAnswers + 1);
    }
    setTimeout(() => nextQuestion(), 1000);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(60);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg text-center">
      {!showResults ? (
        <>
          <h2 className="text-2xl font-bold mb-4">
            Question {currentQuestion + 1} / {questions.length}
          </h2>
          <div className="w-full bg-gray-200 h-2 rounded-full mb-4">
            <div
              className="h-full bg-green-500 rounded-full transition-all"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
          <h3 className="text-lg font-semibold mb-6">{questions[currentQuestion].question}</h3>
          <div className="grid gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                className={`py-2 px-4 border rounded-lg text-lg transition-colors ${
                  selectedAnswers[currentQuestion] === option ? "bg-green-200" : "bg-gray-100 hover:bg-gray-300"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <p className="mt-4 text-red-600 font-bold">Time left: {timeLeft}s</p>
        </>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-lg mb-4">
            Correct Answers: <span className="font-bold">{correctAnswers} / {questions.length}</span>
          </p>
          <h3 className="text-xl font-semibold mb-4">Review:</h3>
          {questions.map((q, index) => (
            <div key={index} className="p-4 mb-3 bg-gray-100 rounded-lg">
              <h4 className="font-semibold mb-2">{index + 1}. {q.question}</h4>
              <div className="grid gap-2">
                {q.options.map((option, i) => {
                  const isCorrect = option === q.answer;
                  const isSelected = selectedAnswers[index] === option;
                  return (
                    <button
                      key={i}
                      className={`py-2 px-4 border rounded-lg text-lg ${
                        isCorrect ? "bg-green-300" : isSelected ? "bg-red-300" : "bg-gray-100"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Quiz;
