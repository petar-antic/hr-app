import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import api from '../../../utils/axios-instance';

import topBtn from '../../../assets/icons/arrow1top.svg';
import downBtn from '../../../assets/icons/arrow1down.svg';

function Question(props) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const editFunc = () => {
    navigate('/questions/editquestion', { state: { id: props.id } });
  };

  const deleteQuestion = async (id) => {
    return await api.delete(`/questions/${id}`);
  };

  const { mutate } = useMutation(deleteQuestion, {
    onSuccess: () => {
      queryClient.invalidateQueries('questions');
    },
  });

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
          onClick={() => {
            mutate(props.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Question;
