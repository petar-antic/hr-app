import api from '../../../utils/axios-instance';

export function requestRegisterUser({ payload: { email, password } }) {
  return api.post('', {});
}
