import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Box, Button, Card, Container, Grid, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from "@mui/material"
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { Link } from "react-router-dom"
import { Delete } from "@mui/icons-material";


const Cart = () => {

    const { cart, deleteItem } = useContext(CartContext)

 

    if (cart.length === 0) {
        return (
            <Container maxWidth="xl" sx={{ alignSelf: "center", marginTop: "50px", }}>
                <Grid container sx={{ justifyContent: "center" }}>
                    <Grid item xs={12} sm={10} md={10} m={3} >
                        <Card sx={{ height: "500px", display: "grid", alignItems: "center", textAlign: "center" }}>
                            <Box >
                                <Box>
                                    <ProductionQuantityLimitsIcon sx={{ fontSize: 150, color: "khaki" }} />
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
                                    TU CARRITO ESTA VACIO!

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
                                    AGREGA PRODUCTOS Y APROVECHA NUESTROS BAJOS PRECIOS!
                                </Typography>
                                <Box mt={3}>
                                    <Link to="/" className="btn btn-primary">
                                        <Button variant="contained" >
                                            AGREGAR PRODUCTOS
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
            <Grid container sx={{ justifyContent: "center" }}>
                <Grid item xs={12} sm={10} md={10} m={3} >
                    <Card sx={{ minHeight: "500px", display: "grid", marginTop: 3, textAlign: "center" }}>
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
                                                    <TableCell><IconButton size="large" onClick={()=> deleteItem(item.id)}>
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
                </Grid>
            </Grid>
        </Container>

    )
}

export default Cart