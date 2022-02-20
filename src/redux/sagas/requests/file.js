import api from '../../../utils/axios-instance';

export function requestUploadImage(image) {
  const formData = new FormData();
  formData.append('files', image);

  return api.post('/api/upload', formData, {});
}
