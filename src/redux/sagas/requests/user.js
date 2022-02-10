import api from '../../../utils/axios-instance';

export function requestLoginUser({ payload: { email, password } }) {
  return api.post('/auth/local', {
    identifier: email,
    password,
  });
}
