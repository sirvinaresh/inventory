import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddBook from './components/AddBook';
import Sales from './components/Sales';
import Transaction from './components/Transaction';
import Register from './components/Register';
import Login from './components/Login';
import { useState } from 'react';
function App() {

  const [isAuthenticated, setisAuthenticated] = useState(false);

    const PrivateRoute = ({element}) =>{
        return isAuthenticated ? element : <Navigate to='/login'/>
    }

  return (
    <div className="App">
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Navigate to='/login'/>}/>
        <Route path='/dashboard' element={<PrivateRoute element={<Dashboard/>}/>}/>
        <Route path='addbook' element={<PrivateRoute element={<AddBook/>}/>}/>
        <Route path='sales' element={<PrivateRoute element={<Sales/>}/>}/>
        <Route path='transaction' element={<PrivateRoute element={<Transaction/>}/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
