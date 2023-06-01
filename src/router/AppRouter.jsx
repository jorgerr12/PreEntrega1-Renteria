import Navbar from "../components/navbar/Navbar"
import ItemListContainer from "../components/itemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from "../components/itemDetailContainer/ItemDetailContainer";
import Cart from "../components/cart/Cart";
import LoginScreen from "../components/loginScreen/LoginScreen";
import RegisterScreen from "../components/loginScreen/RegisterScreen";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const AppRouter = () => {
    const { user } = useContext(AuthContext)
    return (
        <BrowserRouter>
            {
                user.logged
                    ? <>
                        <Navbar />

                        <Routes>
                            <Route path='/' element={<ItemListContainer />} />
                            <Route path='/category/:categoryId' element={<ItemListContainer />} />
                            <Route path='/item/:id' element={<ItemDetailContainer />} />
                            <Route path='/cart' element={<Cart />} />
                            <Route path='*' element={<Navigate to={"/"} />} />
                        </Routes>
                    </>
                    :
                    <Routes>
                        <Route path='/login' element={<LoginScreen />} />
                        <Route path='/register' element={<RegisterScreen />} />
                        <Route path='*' element={<Navigate to={"/login"} />} />
                    </Routes>
            }
     
        </BrowserRouter>
    )
}
export default AppRouter