import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllEmployee } from '../../../../services/employeeService';
import toastMessage from '../../../../components/toast/Toast';

export interface initialEmployeeState {
  listData: any;
  loading: boolean;
  firstPage: string;
  lastPage: string;
  linkPage: any;
  nextPage: string;
  prevPage: string;
  totalPage: number | null;
  currentPage: number;
  from: number | null;
  to: number;
  totalEmployee: number;
}

export const initialState: initialEmployeeState = {
  listData: [],
  loading: false,
  firstPage: '',
  lastPage: '',
  linkPage: [],
  nextPage: '',
  prevPage: '',
  totalPage: 0,
  currentPage: 0,
  from: 0,
  to: 0,
  totalEmployee: 0,
};

export const getEmployee = createAsyncThunk('employee/getEmployee', async () => {
  try {
    const res = await getAllEmployee();
    console.log(res.data, 'employee Reducer');
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const employeeReducer = createSlice({
  name: 'employee',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEmployee.pending, (state) => {
      state.loading = true;
      state.listData = [];
      state.firstPage = '';
      state.lastPage = '';
      state.linkPage = [];
      state.nextPage = '';
      state.prevPage = '';
      state.totalPage = 0;
      state.currentPage = 0;
      state.from = 0;
      state.to = 0;
      state.totalEmployee = 0;
    });
    builder.addCase(getEmployee.fulfilled, (state, action) => {
      state.loading = false;
      state.listData = action.payload.data.data;
      state.firstPage = action.payload.data.first_page_url;
      state.lastPage = action.payload.data.last_page_url;
      state.currentPage = action.payload.data.current_page;
      state.prevPage = action.payload.data.prev_page_url;
      state.nextPage = action.payload.data.next_page_url;
      state.from = action.payload.data.from;
      state.to = action.payload.data.to;
      state.totalPage = action.payload.data.last_page;
      state.totalEmployee = action.payload.data.total;
      state.linkPage = action.payload.data.links;
    });
    builder.addCase(getEmployee.rejected, (state, action: any) => {
      state.loading = false;
      toastMessage('error', action.payload.message);
    });
  },
});

export default employeeReducer.reducer;
