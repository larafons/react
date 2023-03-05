import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/index'
import { Vinilos } from './pages/Products/index'
import { Contact } from './pages/Contact/index'
import { Product } from './pages/Product/index'
import { CartProvider } from './context/cartContext';
import { Cart } from './pages/Cart/index'
import { FinalizarCompra } from './pages/FinalizarCompra';


function App() {
  return (


    <BrowserRouter>
    <CartProvider>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Vinilos />} />
        <Route path="/productos/:productId" element={<Product />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/carrito" element={<Cart />} />  
        <Route path="/finalizarcompra" element={<FinalizarCompra />} />    
    </Routes>
    </CartProvider>
    </BrowserRouter>
  );
}

export default App;
