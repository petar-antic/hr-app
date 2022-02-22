import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import api from '../../../utils/axios-instance';

const EditAnswers = ({ id }) => {
  const queryClient = useQueryClient();
  const [text, setText] = useState('');
  console.log(text);
  const { status, data } = useQuery(['answers', id], () => fetchAnswers(id));
  const fetchAnswers = async (id) => {
    const { data } = await api.get(
      `/answers?populate=*&filters[profile][id][$eq]=${id}`
    );
    return data;
  };
  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const editAnswer = async () => {
    return api.put(`/answers/615`, {
      data: {
        answer: text,
        profile: id,
        question: 477,
      },
    });
  };
  const { mutate } = useMutation(editAnswer, {
    onSuccess: () => {
      queryClient.invalidateQueries('answers');
    },
  });

  return (
    <div className="profile-card mr-50">
      <p className="profile-card-header">Answers</p>
      {status === 'success' &&
        data.data.map((answer) => {
          return (
            <div key={answer.id}>
              <form className="flex flex-column" onSubmit={handleSubmit}>
                <label>
                  Question: {answer.attributes.question.data.attributes.text}
                </label>
                <input
                  placeholder="Enter a new Answer"
                  defaultValue={answer.attributes.answer}
                  type="text"
                  onChange={(e) => setText(e.target.value)}
                />
              </form>
            </div>
          );
        })}
      <div className="flex jc-end">
        <button
          className="btn-save"
          type="submit"
          onClick={() => {
            mutate();
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditAnswers;
