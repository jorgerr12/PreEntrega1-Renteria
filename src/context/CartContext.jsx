import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (item) => {
        const inCart = cart.find((e) => e.id === item.id)
        if (inCart) {
            inCart.cantidad = inCart.cantidad + item.cantidad
            setCart([...cart])
        }
        else {
            setCart([...cart, item])
        }

    }

    const deleteItem = (id) =>{
        let item = cart.findIndex((item)=> item.id === id)
        cart.splice(item,1)
        setCart([...cart])
        
    }
    const countCart = () => {
        const count = cart.reduce((acc, item) => acc + item.cantidad, 0)
        return count
    }

    const totalCart =() =>{
        const count = cart.reduce((acc,item)=>acc + item.cantidad * item.precio,0)
        return count
    }




    return (
        <CartContext.Provider value={{ cart, addItem, countCart,deleteItem,totalCart }}>
            {children}
        </CartContext.Provider>
    )

}