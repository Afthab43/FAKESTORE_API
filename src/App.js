import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './components/headers/Header';
import Footer from './components/footer/Footer';
import SingleProduct from './pages/SingleProduct/SingleProduct';

function App() {
  return (
    <div >
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products/:id' element={<SingleProduct/>}/>
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
