import api from '../../../utils/axios-instance';

export function requestUploadImage(formData) {
  return api.post('/upload', formData);
}
