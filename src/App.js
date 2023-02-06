import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/index'
import { Vinilos } from './pages/Products/index'
import { Contact } from './pages/Contact/index'
import { Product } from './pages/Product/index'


function App() {
  return (


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Vinilos />} />
        <Route path="/productos/:productId" element={<Product />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
