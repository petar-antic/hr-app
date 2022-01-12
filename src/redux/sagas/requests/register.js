import api from '../../../utils/axios-instance';

export function requestRegisterUser({ payload: { email, password, name } }) {
  return api.post('/auth/local/register', {
    email,
    password,
    name,
  });
}
