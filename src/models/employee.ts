export interface ICreateParams {
  id: string; //string
  name: string; //string
  gender: string; //string
  dob: string; //string
  ktp_no: string; //string
  nc_id: string; //string
  contract_start_date: string; //string;
  contract_date: string;
  document: File | undefined;
  type: string; //string
  basic_salary: number; //number
  audit_salary: number; //number
  safety_insurance: number; //number
  health_insurance: number; //number
  meal_allowance: number; //number
  card_number: string; //string
  mother_name: string; //string
  pob: string; //string
  home_address_1: string; //string
  home_address_2: string; //string
  mobile_no: string; //string
  tel_no: string; //string
  marriage_id: string; //string
  bank_account_no: string; //string
  bank_name: string; //string
  family_card_number: string; //string
  safety_insurance_no: string; //string
  health_insurance_no: string; //string
  department_id: string; //string
  position_id: string; //string
  entitle_ot: number; //number
  meal_allowance_paid: number; //number
  operational_allowance_paid: number; //number
  attendance_allowance_paid: number; //number
  grade_id: any; //string
  remark: string; //string
  benefits: any; // []
  shift: string; //string
}
