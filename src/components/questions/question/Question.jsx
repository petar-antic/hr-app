import React from 'react';
import { useNavigate } from 'react-router-dom';

// import '../../styles/questions/Questions.css';
import topBtn from '../../../assets/icons/arrow1top.svg';
import downBtn from '../../../assets/icons/arrow1down.svg';

function Question(props) {
  const navigate = useNavigate();
  const editFunc = () => {
    navigate('/questions/editquestion', { state: { type: props.type } });
  };

  return (
    <div className="question">
      <div className="leftSide">
        <img className="topBtn" src={topBtn} alt="topBtn"></img>
        <img className="downBtn" src={downBtn} alt="downBtn"></img>
        <p className="questionNum">Question - {props.type}</p>
        <p className="questionTitle">{props.text}</p>
      </div>
      <div className="rightSide">
        <button className="editBtn" onClick={editFunc}>
          Edit
        </button>
        <button
          className="delBtn"
          onClick={() => props.deleteQuestion(props.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Question;
