import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import '../../../styles/questions/editQuestion/EditQuestion.css';
import api from '../../../utils/axios-instance';

const fetchQuestion = async ({ queryKey }) => {
  return await api.get(`/questions/${queryKey[1]}`);
};

function EditQuestion() {
  const queryClient = useQueryClient();
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location.state.id);

  const { data } = useQuery(['questionId', location.state.id], fetchQuestion, {
    onSuccess: (newData) => {
      console.log(data);
      setText(newData.data.data.attributes.text);
      setType(newData.data.data.attributes.type);
    },
  });

  const [text, setText] = useState('');
  const [type, setType] = useState('text');

  const editQuestion = async () => {
    return api.put(`/questions/${location.state.id}`, {
      data: {
        text: text,
        type: type,
      },
    });
  };

  const { mutate } = useMutation(editQuestion, {
    onSuccess: () => {
      queryClient.invalidateQueries('questions');
      navigate('/questions');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="editQuestion">
      <span className="heading">Edit Question</span>
      <form onSubmit={handleSubmit}>
        <div className="questionText">
          <label>Question text</label>
          <input
            type="text"
            name="questionText"
            placeholder="Question text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
        </div>
        <div className="questionType">
          <label>Question type</label>
          <select name="questionType" onChange={(e) => setType(e.target.value)}>
            <option value="" hidden>
              Select question type
            </option>
            <option value="Text">Text</option>
            <option value="Long text">Long text</option>
            <option value="Image">Image</option>
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

export default EditQuestion;
