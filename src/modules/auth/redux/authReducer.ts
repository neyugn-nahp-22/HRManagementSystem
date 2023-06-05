import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { replace } from 'connected-react-router';
import Cookies from 'js-cookie';
import toastMessage from '../../../components/toast/Toast';
import { ROUTES } from '../../../configs/routes';
import { userLogin } from '../../../services/authService';
import { ACCESS_TOKEN_KEY } from '../../../utils/constants';

export interface initialAuthState {
  loading: boolean;
  userDetail: any;
}

export const initialState: initialAuthState = {
  loading: false,
  userDetail: {},
};

export const getToken = createAsyncThunk<void, any, {}>(
  'auth/getTokenUser',
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const res = await userLogin(data);
      if (res) {
        dispatch(replace(ROUTES.employee));
      }
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getToken.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getToken.fulfilled, (state, action: any) => {
      state.loading = false;
      Cookies.set(ACCESS_TOKEN_KEY, action.payload.data.token);
    });
    builder.addCase(getToken.rejected, (state, action: any) => {
      state.loading = false;
      toastMessage('error', action.payload.message);
    });
  },
});

export default authReducer.reducer;
