export interface ILoginParams {
  username: string;
  password: string;
  company_id: number;
}

export interface ILoginValidation {
  username: string;
  password: string;
  company_id: any;
}

export interface IForgotPasswordValidation {
  email: string;
}

export interface ISignUpParams {
  email: string;
  password: string;
  repeatPassword: string;
  name: string;
  gender: string;
  region: string;
  state: string;
}

export interface IChangePasswordValidation {
  newPassword: string;
  confirmPassword: string;
}

export interface ISignUpValidation {
  email: string;
  password: string;
  repeatPassword: string;
  name: string;
  gender: string;
  region: string;
  state: string;
}

export interface IGenderParams {
  label: string;
  value: string;
}

export interface ILocationParams {
  id: string | number;
  name: string;
  pid: number | null;
}
