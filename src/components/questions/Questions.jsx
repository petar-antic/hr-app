import React from 'react';
import '../../styles/questions/Questions.css';

import topBtn from '../../assets/icons/arrow1top.svg';
import downBtn from '../../assets/icons/arrow1down.svg';

function Questions() {
  return (
    <div className="questions">
      <div className="heading">
        <span>Questions</span>
        <button>Add new question</button>
      </div>
      <div className="questionList">
        <div className="question">
          <div className="leftSide">
            <img className="topBtn" src={topBtn} alt="topBtn"></img>
            <img className="downBtn" src={downBtn} alt="downBtn"></img>
            <p className="questionNum">Question 1 - Text</p>
            <p className="questionTitle">Do you have any pets?</p>
          </div>
          <div className="rightSide">
            <button className="editBtn">Edit</button>
            <button className="delBtn">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
