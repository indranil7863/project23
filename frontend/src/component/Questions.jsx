import React from "react";
import data from '../quiz-data/Data1.js'
import { useState } from "react";
import '../style/Questions.css'

const Question = () =>{
    const [currqindex, setCurrqIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});

    const handleOptionSelect = (option) => {
        setSelectedAnswers({
          ...selectedAnswers,
          [currqindex]: option,
        });
      };
    const currentQuestion = data[currqindex];
    const isLastQuestion = currqindex === data.length -1;

    const handleNext = () =>{
        setCurrqIndex((prevIndex) => prevIndex+1)
    }
    const handlePrev = () =>{
        setCurrqIndex((prevIndex) => prevIndex -1)
    }
    const handleSubmit = () =>{
        // directed to result page
        alert("Quiz submitted")
    }

    return (
        <div className="containers">
            <div className="question-section">
            <h2 className="question-top">Question {currqindex+1}</h2>
            <p className="question-name">{currentQuestion.question}</p>
            <div>
                {currentQuestion.options.map((option, index) =>(
                    <div className="option-div" key={index}>
                        <label className="label-section">
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
                    <button className="select-button prev" onClick={handlePrev}>Prev</button>
                )}
                {!isLastQuestion && (
                    <button className="select-button next" onClick={handleNext}>Next</button>
                )}
                {isLastQuestion && (
                    <button className="select-button submit" onClick={handleSubmit}>Submit</button>
                )}
              </div>
            </div>
        </div>
    )
}

export default Question;