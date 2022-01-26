import api from '../../../utils/axios-instance';

export function requestSaveCompany(payload) {
  let nameSlug = payload.name.replace(/\s/g, '');
  nameSlug = nameSlug + Math.floor(Math.random() * 100000);

  return api.post('/api/companies', {
    data: {
      name: payload.name,
      slug: nameSlug,
    },
  });
}
