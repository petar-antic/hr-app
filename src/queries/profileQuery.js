import { useQuery } from 'react-query';
import api from '../utils/axios-instance';

export const getCompanyProfiles = async (companyName, status) => {
  const encoded = encodeURIComponent(companyName);
  const profiles = await api
    .get(
      `/profiles?filters[status][$eq]=${status}&filters[company][name][$eq]=${encoded}&sort=createdAt&populate=*`
    )
    .then((res) => res.data.data);
  return profiles;
};

export const useProfiles = (companyName, status) => {
  return useQuery(['profiles', companyName, status], () =>
    getCompanyProfiles(companyName, status)
  );
};
