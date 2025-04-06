import React, { useState, useEffect } from "react";
import Question from "./components/Question";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState([]); // Store questions
  const [step, setStep] = useState(0); // Track the current question
  const [responses, setResponses] = useState({}); // Store responses
  const [surveyCompleted, setSurveyCompleted] = useState(false); // Track if survey is completed

  // Load questions from the mock data (questions.json)
  useEffect(() => {
    fetch("/questions.json")
      .then((res) => res.json()) // Parse questions from the JSON file
      .then((data) => setQuestions(data)) // Set questions to state
      .catch((error) => console.error("Error loading questions:", error)); // Handle errors
  }, []);

  // Handle input change and update responses
  const handleChange = (key, value) => {
    const question = questions[step];
    setResponses((prev) => ({
      ...prev,
      [question.id]: value, // Save value directly (no nested keys)
    }));
  };

  // Move to the next question or submit if it's the last question
  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  // Submit the responses to the server
  const handleSubmit = () => {
    // Send responses to the mock API
    fetch("http://localhost:5000/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(responses), // Send responses as JSON
    })
      .then((res) => res.json())
      .then(() => {
        console.log("Survey responses saved:", responses);
        setSurveyCompleted(true); // Set survey as completed
      })
      .catch((error) => {
        console.error("Error saving responses:", error);
      });
  };

  // Reset survey when "Start Over" is clicked
  const handleStartOver = () => {
    setStep(0); // Reset step to 0, go back to first question
    setResponses({}); // Clear the responses to start fresh
    setSurveyCompleted(false); // Reset survey completion status
  };

  if (questions.length === 0) return <div>Loading...</div>; // Show loading state

  const currentQuestion = questions[step]; // Get the current question based on step

  return (
    <div className="center-page">
      <div className="container">
        {!surveyCompleted ? (
          <>
            <Question
              question={currentQuestion} // Pass current question to Question component
              value={responses[currentQuestion.id] || ""} // Pass current response value
              onChange={handleChange} // Handle change in response
            />
            <button className="next-button" onClick={handleNext}>
              Next
            </button>
          </>
        ) : (
          <div className="thank-you-message">
            <h2>Thank you for completing the survey!</h2>
            <p>Your responses have been saved.</p>
            <button onClick={handleStartOver}>Start Over</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
