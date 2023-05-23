import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Box, Button, Card, Container, Grid, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from "@mui/material"

import { Link } from "react-router-dom"
import { Delete } from "@mui/icons-material";
import EmptyCart from "./emptyCart/EmptyCart";


const Cart = () => {

    const { cart, deleteItem,totalCart } = useContext(CartContext)

    const total = totalCart()

    if (cart.length === 0) {
        return (
            <EmptyCart />
        )
    }

    return (
        <Container maxWidth="xl" sx={{ alignSelf: "center", marginTop: "50px", }}>
            <Grid container sx={{ justifyContent: "center" }}>
                <Grid item xs={12} sm={10} md={10} m={3} >
                    <Card sx={{ minHeight: "300px", display: "grid", marginTop: 3, textAlign: "center" }}>
                        <Box >
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell></TableCell>
                                            <TableCell>Descripcion</TableCell>
                                            <TableCell>Precio</TableCell>
                                            <TableCell>Cantidad</TableCell>
                                            <TableCell>Sub Total</TableCell>
                                            <TableCell>Sub Total</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            cart.map((item) => (
                                                <TableRow key={item.id}>
                                                    <TableCell sx={{ maxWidth: "100px" }}><img style={{ width: "100%" }} src={item.img} alt="" /></TableCell>
                                                    <TableCell>{item.nombre}</TableCell>
                                                    <TableCell>S/ {item.precio}</TableCell>
                                                    <TableCell>{item.cantidad}</TableCell>
                                                    <TableCell>S/ {item.cantidad * item.precio}</TableCell>
                                                    <TableCell><IconButton size="large" onClick={() => deleteItem(item.id)}>
                                                        <Delete />
                                                    </IconButton ></TableCell>
                                                </TableRow>
                                            )
                                            )
                                        }

                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>

                    </Card>

                    <Grid container mt={3} sx={{ justifyContent: "end" }}>
                        <Grid item sm={4} md={4} xs={10} >
                            <Card>
                                <Box p={2} textAlign="center">
                                <Typography variant="h5" color="red">TOTAL A PAGAR: S/ {total}</Typography>
                                <Box mt={3}>
                                    <Link to="/" className="btn btn-primary">
                                        <Button color="success" variant="contained" size="large" sx={{width:"80%"}} >
                                           COMPRAR
                                        </Button>

                                    </Link>
                                </Box>
                                </Box>
                            </Card>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>

        </Container>

    )
}

export default Cart