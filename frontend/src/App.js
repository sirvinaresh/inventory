import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddBook from './components/AddBook';
import Sales from './components/Sales';
import Transaction from './components/Transaction';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='addbook' element={<AddBook/>}/>
        <Route path='sales' element={<Sales/>}/>
        <Route path='transaction' element={<Transaction/>}/>
      </Routes>
    </div>
  );
}

export default App;
