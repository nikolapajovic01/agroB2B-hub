// src/services/companyService.ts
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const checkCompanyVerification = async (companyId: number) => {
  const res = await axios.get(`${API_URL}/api/company/verification/${companyId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    },
  });
  return res.data.isVerified;
};

export const fetchCompanyDetails = async () => {
  const res = await axios.get(`${API_URL}/api/company/details`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    },
  });
  return res.data;
};
  
  
