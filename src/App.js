
import './App.css';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './components/headers/Header';
import Footer from './components/footer/Footer';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Products from './pages/Products/Products';
import CategoryProducts from './pages/Category Products/CategoryProducts';
import CartPage from './pages/Cart/CartPage';

function App() {
  return (
    <div >
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products/:id' element={<SingleProduct/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/categories/:name' element={<CategoryProducts/>}/>
      <Route path='/cart' element={<CartPage/>}/>
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
