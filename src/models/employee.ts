export interface ICreateParams {
  name: string;
  gender: number;
  mother_name: string;
  dob: string;
  pob: string;
  ktp_no: string;
  nc_id: string;
  home_address_1: string;
  home_address_2: string;
  mobile_no: string;
  tel_no: string;
  marriage_code: string;
  card_number: string;
  bank_account_no: string;
  bank_name: string;
  family_card_number: string;
  safety_insurance_no: string;
  health_insurance_no: string;
  contract_start_date: string;
  type: string;
  contract_date: string;
  document: string;
}

export interface ICreateValidation {
  name: string;
  gender: number;
  dob: any;
  nc_id: string;
  ktp_no: string;
}
