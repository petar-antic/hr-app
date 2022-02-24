import { useState } from 'react';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import api from '../../utils/axios-instance';

const fetchAnswers = async ({ queryKey }) => {
  const { data } = await api.get(
    `/answers?populate=*&filters[profile][id][$eq]=${queryKey[1]}`
  );
  return data.data;
};

const editAllAnswers = async () => {
  return api.put(`/answers`, {
    data: {},
  });
};

const EditAnswers = ({ id }) => {
  const queryClient = useQueryClient();
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    text.forEach((answer) => {
      console.log(answer);
    });
  };

  const { status, data } = useQuery(['answers', id], fetchAnswers);

  const { mutate } = useMutation(editAllAnswers, {
    onSuccess: () => {
      queryClient.invalidateQueries('answers');
    },
  });

  // const handleChange = (value, i, answerID) => {
  //   setText((prevText) => [...prevText, answerID]);
  //   console.log(text);
  // };
  const handleChange = (value, i, answerID) => {
    setText((text) => ({ ...text, [i]: value }));
    console.log(text);
  };

  return (
    <>
      {status === 'loading' && <div>Loading data...</div>}
      {status === 'error' && <div>Error fetching data</div>}
      {status === 'success' && (
        <div className="profile-card">
          <p className="profile-card-header">Answers</p>
          <form className="flex flex-column" onSubmit={handleSubmit}>
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
                      handleChange(e.target.value, i, answer.id);
                    }}
                  />
                </div>
              );
            })}
            <div className="flex jc-end">
              <button className="btn-save" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default EditAnswers;
