import { ILoginValidation } from '../../models/auth';

export const validLogin = (values: ILoginValidation) => {
  return !values.username && !values.password;
};
