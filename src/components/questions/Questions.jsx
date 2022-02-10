import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';

import '../../styles/questions/Questions.css';
import Question from './question/Question';

const fetchQuestions = async () => {
  const response = await axios.get(
    'https://internship-hr-app.herokuapp.com/api/questions?populate=*'
  );
  return response.data.data;
};

function Questions() {
  const { data, status } = useQuery('questions', fetchQuestions);
  const deleteQuestion = () => {
    console.log('delete');
  };

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
                deleteQuestion={deleteQuestion}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Questions;
