import api from '../../../utils/axios-instance';

export function requestLoginUser({ payload: { email, password } }) {
  return api.post('/auth/local', {
    identifier: email,
    password,
  });
}

export function requestUserProfile(profileID) {
  console.log(profileID);
  return api.get(`/profiles?filters[user][id][$eq]=${profileID}&populate=*`);
}
