import { useSelector } from 'react-redux';
import { AppState } from '../../../redux/reducer';

export const UseEmployee = () => {
  const listData = useSelector((state: AppState) => state.employee.listData);
  const loading = useSelector((state: AppState) => state.employee.loading);
  const firstPage = useSelector((state: AppState) => state.employee.firstPage);
  const lastPage = useSelector((state: AppState) => state.employee.lastPage);
  const linkPage = useSelector((state: AppState) => state.employee.linkPage);
  const nextPage = useSelector((state: AppState) => state.employee.nextPage);
  const prevPage = useSelector((state: AppState) => state.employee.prevPage);
  const totalPage = useSelector((state: AppState) => state.employee.totalPage);
  const currentPage = useSelector((state: AppState) => state.employee.currentPage);
  const from = useSelector((state: AppState) => state.employee.from);
  const to = useSelector((state: AppState) => state.employee.to);
  const totalEmployee = useSelector((state: AppState) => state.employee.totalEmployee);

  return {
    listData,
    loading,
    firstPage,
    lastPage,
    linkPage,
    nextPage,
    prevPage,
    totalPage,
    currentPage,
    from,
    to,
    totalEmployee,
  };
};
