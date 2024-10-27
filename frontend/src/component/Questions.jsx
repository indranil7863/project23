import React from "react";
import data from '../quiz-data/Data1.js'
import { useState } from "react";
import '../style/Questions.css'
import Result from "./Result.jsx";

const Question = () =>{
    const [currqindex, setCurrqIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});

    const [score, setScore] = useState(null);
    const [showResults, setshowResults] = useState(false);
    // const [attempt, setAttempt] = useState(0);

    const handleOptionSelect = (option) => {
        setSelectedAnswers({
          ...selectedAnswers,
          [currqindex]: option,
        });
      };

    const currentQuestion = data[currqindex];
    const isLastQuestion = currqindex === data.length -1;
      const calculateScore = () =>{
        let correctCount = 0;
        data.forEach((question, index) =>{
            if(selectedAnswers[index] === question.correctAnswer){
                correctCount++;
            }
            
        });
        return correctCount;
      }

    const handleNext = () =>{
        setCurrqIndex((prevIndex) => prevIndex+1)
    }
    const handlePrev = () =>{
        setCurrqIndex((prevIndex) => prevIndex -1)
    }
    const handleSubmit = () =>{
        // directed to result page
        alert("Quiz submitted")
        // setAttempt(selectedAnswers.length);
        const correctAnswercount = calculateScore();
        setScore(correctAnswercount);
        setshowResults(true);

    }

    return (
        <div className="containers">
           {showResults ?
            ( <Result score={score} totalQuestions={data.length} selectedAnswers={selectedAnswers}/>)
             : 
           (
            <div className="question-section user-selection">
            <h2 className="question-top user-selection">Question {currqindex+1}</h2>
            <p className="question-name user-selection">{currentQuestion.question}</p>
            <div>
                {currentQuestion.options.map((option, index) =>(
                    <div className="option-div" key={index}>
                        <label className="label-section user-selection">
                            <input  type="radio" 
                                name={`question-${currqindex}`}
                                value={option}
                                checked={selectedAnswers[currqindex] === option}
                                onChange={() => handleOptionSelect(option)}
                            />
                            {option}
                        </label>
                    </div>
                ))

                }
            </div>
            <div className="div-button">
                {currqindex >0 && (
                    <button className="select-button prev user-selection" onClick={handlePrev}>Prev</button>
                )}
                {!isLastQuestion && (
                    <button className="select-button next user-selection" onClick={handleNext}>Next</button>
                )}
                {isLastQuestion && (
                    <button className="select-button submit user-selection" onClick={handleSubmit}>Submit</button>
                )}
              </div>
            </div>
           )}
        </div>
    )
}

export default Question;