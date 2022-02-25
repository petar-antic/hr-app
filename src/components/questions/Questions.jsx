import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import api from '../../utils/axios-instance';
import { useSelector } from 'react-redux';

import '../../styles/questions/Questions.css';
import Question from './question/Question';

const fetchQuestions = async ({ queryKey }) => {
  if (queryKey[1] !== undefined) {
    const response = await api.get(
      `/questions?filters[company][id][$eq]=${queryKey[1]}&populate=*`
    );
    return response.data.data;
  }
};

function Questions() {
  const navigate = useNavigate();
  const companyID = useSelector((state) => state.user.company.companyID);
  const { data, status } = useQuery(['questions', companyID], fetchQuestions);

  const addFunc = () => {
    navigate('/questions/addnewquestion', { state: { companyID: companyID } });
  };

  return (
    <div className="questions">
      <div className="heading">
        <span>Questions</span>
        <button onClick={addFunc}>Add new Question</button>
      </div>
      {status === 'loading' && <div>Loading data...</div>}
      {status === 'error' && <div>Error fetching data</div>}
      {status === 'success' && (
        <div className="questionList">
          {data.map((question) => {
            return (
              <Question
                text={question.attributes.text}
                type={question.attributes.type}
                key={question.id}
                id={question.id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Questions;
