import api from '../../../utils/axios-instance';

export function requestLoginUser({ payload: { email, password } }) {
  return api.post('/auth/local', {
    identifier: email,
    password,
  });
  // .catch((error) => {
  //   if (error.response) {
  //     console.log(error.response.data);
  //     console.log(error.response.status);
  //     console.log(error.response.headers);
  //   } else if (error.request) {
  //     console.log(error.request);
  //   } else {
  //     console.log('Error', error.message);
  //   }
  //   console.log(error.config);
  // });
}

export function requestSaveProfileInfo(profile) {
  return api.put('/profiles', {
    data: {
      name: profile.name,
      profilePhoto: profile.profilePhoto,
    },
  });
}
