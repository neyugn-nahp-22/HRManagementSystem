export interface ICreateParams {
  id: string;
  name: string;
  gender: string;
  dob: string;
  ktp_no: string;
  nc_id: string;
  contract_start_date: string;
  type: string;
  basic_salary: number;
  audit_salary: number;
  safety_insurance: number;
  health_insurance: number;
  meal_allowance: number;
  card_number: string;
  mother_name: string;
  pob: string;
  home_address_1: string;
  home_address_2: string;
  mobile_no: string;
  tel_no: string;
  marriage_id: string;
  bank_account_no: string;
  bank_name: string;
  family_card_number: string;
  safety_insurance_no: string;
  health_insurance_no: string;
  department_id: string;
  position_id: string;
  entitle_ot: number;
  meal_allowance_paid: number;
  operational_allowance_paid: number;
  attendance_allowance_paid: number;
  grade_id: string;
  remark: string;
  benefits: [];
  shift: string;
}

export interface ICreateValidation {
  name: string;
  gender: number;
  dob: any;
  nc_id: string;
  ktp_no: string;
}
