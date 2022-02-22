import React, { useState, useEffect } from 'react';
import api from '../../../utils/axios-instance';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import '../../../styles/questions/addNewQuestion/AddNewQuestion.css';

const fetchQuestions = async () => {
  return await api.get(
    '/questions?populate=*&pagination[pageSize]=1000&sort=order:DESC'
  );
};

function AddNewQuestion() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data } = useQuery('questionsLength', fetchQuestions);

  useEffect(() => {
    if (data) {
      setQuestionsLength(data.data.data[0].attributes.order);
    }
  }, [data]);

  const [questionsLength, setQuestionsLength] = useState(null);
  const [text, setText] = useState('');
  const [type, setType] = useState('text');

  const addQuestion = async () => {
    return api.post(`/questions/`, {
      data: {
        text: text,
        type: type,
        order: questionsLength + 1,
        company: 41,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const { mutate } = useMutation(addQuestion, {
    onSuccess: () => {
      queryClient.invalidateQueries('questions');
      navigate('/questions');
    },
  });

  return (
    <div className="addNewQuestion">
      <span className="heading">Add new Question</span>
      <form onSubmit={handleSubmit}>
        <div className="questionText">
          <label>Question text</label>
          <input
            type="text"
            name="questionText"
            placeholder="Question text"
            onChange={(e) => setText(e.target.value)}
          ></input>
        </div>
        <div className="questionType">
          <label>Question type</label>
          <select name="questionType" onChange={(e) => setType(e.target.value)}>
            <option value="" hidden>
              Select question type
            </option>
            <option value="text">Text</option>
            <option value="long_text">Long text</option>
            <option value="image">Image</option>
          </select>
        </div>
        <button
          type="submit"
          id="saveBtn"
          onClick={() => {
            mutate();
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default AddNewQuestion;
