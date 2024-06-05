/* eslint-disable react/prop-types */
// src/components/QuestionHeader.js
// import React from 'react';
import './questionHeader.css';

const QuestionHeader = ({ questionNumber, totalQuestions, remainingTime }) => {
    return (
        <div className="question-header-container">
            <div className="question-info">
                Question {questionNumber} <span>of {totalQuestions}</span> 
            </div>
            <div className="case-details">
                <a href="#case-details">Case details</a>
            </div>
            <div className="timer">
                ⏲ {remainingTime} <span> remaining</span>
            </div>
        </div>
    );
};

export default QuestionHeader;
