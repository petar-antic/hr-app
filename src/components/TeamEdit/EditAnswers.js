import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import api from '../../utils/axios-instance';

const fetchAnswers = async ({ queryKey }) => {
  const { data } = await api.get(
    `/answers?populate=*&filters[profile][id][$eq]=${queryKey[1]}`
  );
  return data.data;
};

const EditAnswers = ({ id }) => {
  const queryClient = useQueryClient();
  const [text, setText] = useState([]);
  const { status, data } = useQuery(['answers', id], fetchAnswers);

  const handleChange = (value, i) => {
    setText((prevText) => ({
      ...prevText,
      [i]: value,
    }));
    console.log(text);
  };

  return (
    <>
      {status === 'loading' && <div>Loading data...</div>}
      {status === 'error' && <div>Error fetching data</div>}
      {status === 'success' && (
        <div className="profile-card">
          <p className="profile-card-header">Answers</p>
          <form className="flex flex-column">
            {data.map((answer, i) => {
              return (
                <div className="answers" key={answer.id}>
                  <h3>
                    Question: {answer.attributes.question.data.attributes.text}
                  </h3>
                  <input
                    type="text"
                    defaultValue={answer.attributes.answer}
                    onChange={(e) => {
                      handleChange(e.target.value, i);
                    }}
                  />
                </div>
              );
            })}
            <div className="flex jc-end">
              <button className="btn-save">Save</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default EditAnswers;
