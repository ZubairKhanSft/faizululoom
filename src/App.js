import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import router from './Router';
import { RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
function App() {
  return (
   <>
    {/* <Home/> */}
    <CssBaseline />
    <RouterProvider router={router}/>
   </>
  );
}

export default App;
