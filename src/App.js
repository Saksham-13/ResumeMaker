import './App.css';
import Login from './Login';
import Homepage from "./component/Homepage";
import { Route,Router,Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={ <Homepage />}/>
      <Route path='/login' element={  <Login/>}/>

   
   
    </Routes>
    </>
  );
}

export default App;
