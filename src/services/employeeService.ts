import axios from 'axios';
import { API_PATHS } from '../configs/api';
import Cookies from 'js-cookie';
import { ACCESS_TOKEN_KEY } from '../utils/constants';

export const getAllEmployee = () => {
  return axios.get(API_PATHS.getEmployee, {
    headers: {
      Authorization: `Bearer ${Cookies.get(ACCESS_TOKEN_KEY)}`,
    },
  });
};

export const getEmployeeByPage = async (page: number) => {
  return axios.get(`${API_PATHS.getEmployee}?page=${page}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get(ACCESS_TOKEN_KEY)}`,
    },
  });
};

export const searchEmployee = async (page: number, search: string) => {
  return axios.get(`${API_PATHS.getEmployee}?search=${search}&page=${page}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get(ACCESS_TOKEN_KEY)}`,
    },
  });
};

export const getBenefit = () => {
  return axios.get(API_PATHS.benefit, {
    headers: {
      Authorization: `Bearer ${Cookies.get(ACCESS_TOKEN_KEY)}`,
    },
  });
};

export const getGrade = () => {
  return axios.get(API_PATHS.grade, {
    headers: {
      Authorization: `Bearer ${Cookies.get(ACCESS_TOKEN_KEY)}`,
    },
  });
};
