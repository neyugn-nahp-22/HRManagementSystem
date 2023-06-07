import { Toaster } from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { Routes } from './Routes';

function App() {

  return (
    <>
      <ToastContainer />
      <Routes />
      <Toaster position='top-right' reverseOrder={false} />
    </>
  );
}

export default App;
