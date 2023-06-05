import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import intlReducer, { IntlState } from '../modules/intl/redux/intlReducer';
import authReducer, { initialAuthState } from '../modules/auth/redux/authReducer';
import employeeReducer, { initialEmployeeState } from '../modules/contents/redux/EmployeeRedux/employeeReducer';

export interface AppState {
  router: RouterState;
  intl: IntlState;
  auth: initialAuthState;
  employee: initialEmployeeState;
}

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    intl: intlReducer,
    auth: authReducer,
    employee: employeeReducer,
  });
}
