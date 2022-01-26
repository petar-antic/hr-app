import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { uploadImage } from '../../redux/actions/user-actions';

const Image = () => {
  const [files, setFiles] = useState();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('files', files[0]);

    dispatch(uploadImage(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={(e) => setFiles(e.target.files)} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Image;
