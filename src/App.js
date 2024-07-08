import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import { Route, Routes } from 'react-router-dom';
import SingleProduct from './components/Products/SingleProduct';

function App() {
  return (
    < >
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products/:id' element={<SingleProduct/>}/>
    </Routes>
    </>
  );
}

export default App;
