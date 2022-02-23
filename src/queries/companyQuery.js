import { useQuery } from 'react-query';
import api from '../utils/axios-instance';

export const getUserCompany = async (userId) => {
  if (userId !== null) {
    const currentCompany = await api
      .get(`/companies?filters[profiles][user][id][$eq]=${userId}`)
      .then((res) => res.data.data);
    return currentCompany;
  }
};

export const useCompany = (userId) => {
  return useQuery(['currentCompany', userId], () => getUserCompany(userId));
};
