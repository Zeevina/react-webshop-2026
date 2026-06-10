import './App.css'
import { Routes, Route } from 'react-router';

//Context

//Components
import Navbar from './components/Navbar'
import Footer from './components/Footer';

//Pages
import PageShop from './pages/PageShop';
import PageCart from './pages/PageCart';
import PageProduct from './pages/PageProduct';
import CartProvider from './components/CartProvider';



function App() {

  return (
    <>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={ <PageShop /> } />
          <Route path='/cart' element={ <PageCart/> } />
          <Route path='/product/:productId' element={ <PageProduct/> } />
        </Routes>
        <Footer />
      </CartProvider>
    </>
  )
}

export default App
