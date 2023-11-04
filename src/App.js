import './App.css';
import {useRoutes} from "react-router-dom";
import Login from './Components/authentication/Login';
import Homepage from './Components/pages/Homepage';




function App() {


  const routes=useRoutes([
    {
      path:'/',
      element:<Homepage/>
    },
    {
      path:'/login',
      element:<Login/>
    }
  ])

  
  return (
    routes
  );
}

export default App;
