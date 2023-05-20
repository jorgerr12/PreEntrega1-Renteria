import Navbar from "./components/navbar/Navbar"
import ItemListContainer from "./components/itemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/cart/Cart";

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={ <ItemListContainer /> }/>
          <Route path='/item/:id' element={ <ItemDetailContainer /> }/>
          <Route path='/cart' element={ <Cart /> }/>
          <Route path='*' element={ <Navigate to={"/"} /> }/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
