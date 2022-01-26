import api from '../../../utils/axios-instance';

export function requestUploadImage(photo) {
  return api.post('/upload', photo);
}
