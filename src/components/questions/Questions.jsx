import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import api from '../../utils/axios-instance';

import '../../styles/questions/Questions.css';
import Question from './question/Question';

const fetchQuestions = async () => {
  const response = await api.get(
    '/questions?filters[company][id][$eq]=41&populate=*'
  );
  return response.data.data;
};

function Questions() {
  const { data, status } = useQuery('questions', fetchQuestions);

  return (
    <div className="questions">
      <div className="heading">
        <span>Questions</span>
        <Link to={`/questions/addnewquestion`}>
          <button>Add new Question</button>
        </Link>
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
