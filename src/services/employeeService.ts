import axios, { AxiosResponse } from 'axios';
import { API_PATHS } from '../configs/api';
import Cookies from 'js-cookie';
import { ACCESS_TOKEN_KEY } from '../utils/constants';
import { ICreateParams } from '../models/employee';

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

export const addEmployeeService = async (data: ICreateParams): Promise<AxiosResponse<any>> => {
  try {
    const res = await axios.post(API_PATHS.getEmployee, data, {
      headers: {
        Authorization: `Bearer ${Cookies.get(ACCESS_TOKEN_KEY)}`,
      },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const deleteEmployeeService = (id: any) => {
  return axios.delete(API_PATHS.deleteEmployee, {
    headers: {
      Authorization: `Bearer ${Cookies.get(ACCESS_TOKEN_KEY)}`,
    },
    data: {
      record_ids: id,
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

export const getDepartment = () => {
  return axios.get(API_PATHS.department, {
    headers: {
      Authorization: `Bearer ${Cookies.get(ACCESS_TOKEN_KEY)}`,
    },
  });
};

export const getPosition = () => {
  return axios.get(API_PATHS.position, {
    headers: {
      Authorization: `Bearer ${Cookies.get(ACCESS_TOKEN_KEY)}`,
    },
  });
};

export const getMarriage = () => {
  return axios.get(API_PATHS.marriage, {
    headers: {
      Authorization: `Bearer ${Cookies.get(ACCESS_TOKEN_KEY)}`,
    },
  });
};
