import Navbar from "./components/navbar/Navbar"
import ItemListContainer from "./components/itemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={ <ItemListContainer /> }/>
        <Route path='/item/:id' element={ <ItemDetailContainer /> }/>
        <Route path='*' element={ <Navigate to={"/"} /> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
