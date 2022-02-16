import api from '../../../utils/axios-instance';

export function requestSaveCompany(payload) {
  return api.put(`/api/companies/${payload.id}`, {
    data: {
      name: payload.name,
    },
  });
}
