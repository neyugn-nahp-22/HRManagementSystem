export interface ICreateParams {
  account_user_id: null;
  attendance_allowance_paid: boolean;
  audit_salary: string;
  bank_account_no: string;
  bank_name: string;
  basic_salary: string;
  benefits: string[];
  card_number: string;
  contract_start_date: string;
  contracts: string[];
  deleted_ids: string[];
  department_id: string;
  dob: string;
  document_upload: null;
  documents: string[];
  entitle_ot: boolean;
  family_card_number: string;
  gender: string;
  grade: null;
  grade_id: null;
  health_insurance: string;
  health_insurance_no: string;
  home_address_1: string;
  home_address_2: string;
  ktp_no: string;
  marriage_id: string;
  meal_allowance: string;
  meal_allowance_paid: boolean;
  mobile_no: string;
  mother_name: string;
  name: string;
  nc_id: string;
  operational_allowance_paid: boolean;
  pob: string;
  position_id: string;
  remark: string;
  safety_insurance: string;
  safety_insurance_no: string;
  staff_id: string;
  tel_no: string;
  type: string;
  user: null;
  userAccount: null;
}

export interface ICreateValidation {
  name: string;
  gender: number;
  dob: any;
  nc_id: string;
  ktp_no: string;
}
