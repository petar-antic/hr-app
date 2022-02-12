import React from 'react';

import { useQuery } from 'react-query';
import api from '../../../utils/axios-instance';

const EditAnswers = ({ id }) => {
  const { status, data } = useQuery(['answers', id], () => fetchAnswers(id));
  const fetchAnswers = async (id) => {
    const { data } = await api.get(
      `/answers?populate=*&filters[profile][id][$eq]=${id}`
    );
    return data;
  };
  return (
    <div className="profile-card mr-50">
      <p className="profile-card-header">Answers</p>
      {status === 'success' &&
        data.data.map((answer) => {
          return (
            <div key={answer.id}>
              <form className="flex flex-column">
                <label>
                  Question: {answer.attributes.question.data.attributes.text}
                </label>
                <input placeholder={answer.attributes.answer} type="text" />
              </form>
            </div>
          );
        })}
      <div className="flex jc-end">
        <button className="btn-save">Save</button>
      </div>
    </div>
  );
};

export default EditAnswers;
