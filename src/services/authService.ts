import axios from 'axios';
import { ILoginParams } from '../models/auth';
import { API_PATHS } from '../configs/api';
import Cookies from 'js-cookie';
import { ACCESS_TOKEN_KEY } from '../utils/constants';

export const userLogin = (data: ILoginParams) => {
  return axios.post(API_PATHS.signIn, data);
};

export const userDetail = () => {
  return axios.get(API_PATHS.userDetail, {
    headers: {
      Authorization: `Bearer ${Cookies.get(ACCESS_TOKEN_KEY)}`,
    },
  });
};

export const getAllCompany = () => {
  return axios.get(API_PATHS.getCompany);
};
