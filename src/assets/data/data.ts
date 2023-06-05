export const TABLE_FIELD = [
  { id: 'staff_id', label: 'NIK', minWidth: '95px' },
  { id: 'name', label: 'Name', minWidth: '150px' },
  { id: 'gender', label: 'Gender', minWidth: '70px' },
  { id: 'card_number', label: 'Bank Card No.', minWidth: '130px' },
  { id: 'bank_account_no', label: 'Bank Account No.', minWidth: '150px' },
  { id: 'family_card_number', label: 'Family Card No.', minWidth: '150px' },
  { id: 'marriage_code', label: 'Marriage Status', minWidth: '130px' },
  { id: 'mother_name', label: 'Mother Name', minWidth: '150px' },
  { id: 'pob', label: 'Place of birth', minWidth: '115px' },
  { id: 'dob', label: 'Date of birth', minWidth: '115px' },
  { id: ['home_address_1', 'home_address_2'], label: 'Home Address', minWidth: '700px' },
  { id: 'nc_id', label: 'National Card ID No.', minWidth: '170px' },
  { id: 'contract_start_date', label: 'Date Start', minWidth: '90px' },
  { id: 'contracts', label: 'First Contract', minWidth: '110px' },
  { id: 'contracts', label: 'Second Contract', minWidth: '130px' },
  { id: 'contracts', label: 'End Contract', minWidth: '110px' },
  { id: 'department_name', label: 'Department', minWidth: '150px' },
  { id: 'type', label: 'Employee Type', minWidth: '120px' },
  { id: 'basic_salary', label: 'Salary Rp.', minWidth: '90px' },
  { id: 'position_name', label: 'Position', minWidth: '150px' },
  { id: 'entitle_ot', label: 'O/T Paid', minWidth: '80px' },
  { id: 'meal_allowance_paid', label: 'Meal paid', minWidth: '90px' },
  { id: 'meal_allowance', label: 'Meal Rp.', minWidth: '80px' },
  { id: 'grade_name', label: 'Grading', minWidth: '80px' },
];

export const Type = {
  Permanent: {
    id: 0,
    name: 'Pernament',
  },
  PartTime: {
    id: 1,
    name: 'PartTime',
  },
  Contract: {
    id: 2,
    name: 'Contract',
  },
};

export const GENDER = [
  {
    id: 1,
    name: 'Male',
  },
  {
    id: 2,
    name: 'Female',
  },
];

export const MARRIAGE_STATUS = [
  {
    name: 'N/A',
    id: 1,
  },
  {
    name: 'Married with 1 kid',
    id: 2,
  },
  {
    name: 'Single',
    id: 3,
  },
  {
    name: 'Married',
    id: 4,
  },
];

export const DEPARTMENT = [
  {
    name: 'N/A',
    id: 1,
  },
  {
    name: 'Developer',
    id: 2,
  },
  {
    name: 'Quality Controjk',
    id: 3,
  },
  {
    name: 'Maintenance',
    id: 4,
  },
  {
    name: 'Business Development',
    id: 5,
  },
];

export const POSITION = [
  {
    name: 'N/A',
    id: 1,
  },
  {
    name: 'Junior',
    id: 2,
  },
  {
    name: 'Vice Manager',
    id: 3,
  },
  {
    name: 'Manager',
    id: 4,
  },
];

export const EMPLOYEE_TYPE = [
  {
    id: 1,
    name: 'Permanent',
  },
  {
    id: 2,
    name: 'Part-time',
  },
  {
    id: 3,
    name: 'Contract',
  },
];

export const TABLE_CONTRACT = [
  { label: 'No', minWidth: '50px' },
  { label: 'Contract Name', minWidth: '150px' },
  { label: 'Sign Date', minWidth: '150px' },
  { label: 'Action', minWidth: '294px' },
];

export const TABLE_OTHERS = [
  { label: 'No', minWidth: '50px' },
  { label: 'Document Name', minWidth: '345px' },
  { label: 'Created At', minWidth: '345px' },
  { label: 'Action', minWidth: '345px' },
];
