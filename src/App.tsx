import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import './App.css';
import { Routes } from './Routes';
import { AppState } from './redux/reducer';

function App() {
  const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>();

  return (
    <>
      <ToastContainer />
      <Routes />
      <Toaster position='top-right' reverseOrder={false} />
    </>
  );
}

export default App;
