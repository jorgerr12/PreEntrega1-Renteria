import { Box, Button, Card, Container, Grid, Typography } from "@mui/material"
import { collection, getDoc, addDoc, getDocs, writeBatch, query, where, documentId, doc } from "firebase/firestore"
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from "../../firebase/config";
import CartResume from "./cartResume"
import FormClient from "./FormClient"
import { Link } from "react-router-dom";


const Checkout = () => {
    const {cart,totalCart,emptyCart}= useContext(CartContext)
    const [orderId, setOrderId] = useState(null)
    const generarOrden = async (data) => {
  
        const orden = {
            client: data,
            items: cart.map(item => ({id: item.id, nombre: item.nombre, cantidad: item.cantidad})),
            total: totalCart(),
            date: new Date()
        }

        const batch = writeBatch(db)
        const productosRef = collection(db, "productos")
        const ordersRef = collection(db, "orders")

        const promesas = cart.map((item) => {
            const ref = doc(productosRef, item.id)
            return getDoc(ref)
        })

        const productos = await Promise.all(promesas)

        const outOfStock = []

        productos.forEach((doc) => {
            const item = cart.find((item) => item.id === doc.id)
            const stock = doc.data().stock
            
            if (stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })
        if (outOfStock.length === 0) {
            addDoc(ordersRef, orden)
                .then((doc) => {
                        batch.commit()
                        setOrderId(doc.id)
                        emptyCart()
                    })
        } else {
            console.log(outOfStock)
            alert("Hay items sin stock")
        }

    }

    if (orderId) {
        return (
            <Container maxWidth="xl" sx={{ alignSelf: "center", marginTop: "50px", }}>
                <Grid container sx={{ justifyContent: "center" }}>
                    <Grid item xs={12} sm={10} md={10} m={3} >
                        <Card sx={{ height: "500px", display: "grid", alignItems: "center", textAlign: "center" }}>
                            <Box >
                                <Box>
                                    <CheckCircleIcon sx={{ fontSize: 150, color: "green" }} />
                                </Box>
                                <Typography
                                    variant="h5"
                                    noWrap
                                    sx={{
                                        mr: 2,
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        textDecoration: 'none',
                                    }}>
                                    TU COMPRA SE REALIZO CON EXITO

                                </Typography>

                                <Typography variant="h5"
                                    noWrap
                                    sx={{
                                        mr: 2,
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        textDecoration: 'none',
                                    }}>
                                   Guardá tu número de orden: {orderId}
                                </Typography>
                                <Box mt={3}>
                                    <Link to="/" className="btn btn-primary">
                                        <Button variant="contained" >
                                            CONTINUAR COMPRANDO
                                        </Button>

                                    </Link>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        )
    }

    return (
        <Container maxWidth="xl" sx={{ alignSelf: "center", marginTop: "50px", }}>
            <Card sx={{padding:"20px"}}>
                <Grid container sx={{ justifyContent: "space-evenly" }}>
                    <Grid item md={5} sx={{margin:"10px"}}>
                        <FormClient generarOrden={generarOrden}/>
                    </Grid>
                    <Grid item md={5}>
                        <CartResume />
                    </Grid>
                </Grid>
            </Card>
        </Container>

    )
}

export default Checkout