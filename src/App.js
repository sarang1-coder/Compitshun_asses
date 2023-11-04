import './App.css';
import { Routes, Route} from "react-router-dom";
import Login from './Components/authentication/Login';
import Homepage from './Components/pages/Homepage';
import ErrorHandling from './Components/pages/ErrorHandling';
import Register from './Components/authentication/Register';
  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
  <>
    <Routes>
      <Route 
        path='/login' 
        element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/home" element={<Homepage/>}/>
      <Route path='*' element={<ErrorHandling/>}/>
  </Routes>
  <ToastContainer/>
  </>
  );
}

export default App;
