// import React, { useState } from "react";
// import "./Survey.css"; // Importing the CSS
// import Question from "./Question"; // Assuming you are importing the Question component

// const Survey = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [responses, setResponses] = useState([]);
  
//   const questions = [
//     {
//       id: 1,
//       question: "Title",
//       type: "dropdown",
//       options: ["Mr", "Ms", "Mrs", "Miss", "Dr"]
//     },
//     {
//       id: 2,
//       question: "Date of Birth",
//       info: "Your Date of birth is required to accurately calculate your health age. ",
//       type: "input"
//     },
//     {
//         id: 3,
//         question: "On a scale of 1-10, with 10 being the highest how would you rate the following? The usual performance of most other workers in a job similar to yours",
//         type: "buttons",
//         options: ["1","2","3","4","5","6","7","8","9","10"]
//     },
//     {
//       id: 4,
//       question: "Are there any other sources of stress not mentioned here that affect you?",
//       type: "textarea"
//     },
//     {
//       id: 5,
//       question: "How would you describe the balance between your work and non-work activities?",
//       type: "buttons",
//       options: [
//         "Ideal",
//         "Satisfactory",
//         "Challenging",
//         "Extremely Challenging",
//         "Unmanageable"
//       ]
//     }
//   ];

//   const handleInputChange = (questionId, value) => {
//     setResponses((prevResponses) => {
//       const existingResponse = prevResponses.find((res) => res.id === questionId);
//       if (existingResponse) {
//         return prevResponses.map((res) =>
//           res.id === questionId ? { ...res, value } : res
//         );
//       }
//       return [...prevResponses, { id: questionId, value }];
//     });
//   };

//   const handleButtonClick = (value, questionId) => {
//     handleInputChange(questionId, value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert("Survey submitted!");
//   };

//   const currentQuestionData = questions[currentQuestion];

//   return (
//     <div className="survey-container">
//       <form onSubmit={handleSubmit}>
//         <Question
//           question={currentQuestionData}
//           value={responses.find((res) => res.id === currentQuestionData.id)?.value}
//           onChange={handleInputChange}
//         />

//         <div className="bottom-right">
//           <button type="submit">OK</button>
//           <p>Press Enter to Submit</p>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Survey;
