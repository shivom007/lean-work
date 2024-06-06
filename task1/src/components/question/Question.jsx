/* eslint-disable react/prop-types */
// import React, { useState } from "react";
import "./question.css";
const Question = ({
  question,
  handleNext,
  handleOption,
  answer,
  handlePrevious,
}) => {
  return (
    <div className="question-container">
      <div className="question-text-container">
        <div className="question-text">
          <span>{question.id}.</span>
          {question.questionText}
        </div>
        <div className="options-section">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quod
            libero, velit quasi facilis dolore officiis{" "}
          </span>
          <div className="options-container">
            <span>Pick One Option</span>
            {question &&
              question.options.map((option, index) => {
                return (
                  <label
                    onClick={() => handleOption(question.id, option)}
                    htmlFor={`${index}`}
                    key={index}
                  >
                    {" "}
                    <input
                      onChange={() => handleOption(question.id, option)}
                      checked={answer === option}
                      type="radio"
                      name={`${question.id}`}
                      id={`${index}`}
                    />
                    {option}
                  </label>
                );
              })}
          </div>
        </div>
      </div>
      <div
        className="buttons-container"
        style={{
          justifyContent: question.id === 1 ? "flex-start" : "space-around",
          paddingRight: question.id === 1 ? "346px" : "",
        }}
      >
        <button
          disabled={!answer}
          className="next-btn"
          style={{
            cursor: !answer ? "not-allowed" : "pointer",
          }}
          onClick={() => handleNext(Number(question.id) + 1)}
        >
          Save & Proceed
        </button>
        {Number(question.id) > 1 && (
          <button
            className="prev-btn"
            style={{
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: "16px",
              height: "44px",
              width: "184px",
              border: "1px solid #0F0F0F",
              borderRadius: "6px",
              cursor: "pointer",
            }}
            onClick={() => handlePrevious(Number(question.id) - 1)}
          >
            Previous
          </button>
        )}
      </div>
    </div>
  );
};

export default Question;
