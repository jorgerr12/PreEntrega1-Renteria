import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Avatar, Box, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { deepOrange } from "@mui/material/colors"


const CartResume = () => {

    const { cart, totalCart } = useContext(CartContext)

    const SubTotal = totalCart()
    return (
        <Box>
            <Grid container sx={{ alignItems: "center" }}>
                <Avatar sx={{ bgcolor: deepOrange[500], marginRight: "10px" }}
                    alt="Remy Sharp">
                    2
                </Avatar>
                <Typography>
                    RESUMEN DE PEDIDO
                </Typography>
            </Grid>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Descripcion</TableCell>
                            <TableCell>Precio</TableCell>
                            <TableCell>Cantidad</TableCell>
                            <TableCell>Sub Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            cart.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.nombre}</TableCell>
                                    <TableCell>S/ {item.precio}</TableCell>
                                    <TableCell>{item.cantidad}</TableCell>
                                    <TableCell>S/ {item.cantidad * item.precio}</TableCell>
                                </TableRow>

                            )
                            )

                        }
                        <TableRow key={"subTotal"}>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell>Sub Total:</TableCell>
                            <TableCell>S/{SubTotal}</TableCell>
                        </TableRow>
                        <TableRow key={"subTotal"}>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell>Envio:</TableCell>
                            <TableCell>S/0</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography variant="h5" color="red" sx={{float:"right"}}>TOTAL A PAGAR: S/ {SubTotal}</Typography>
        </Box>
    )
}

export default CartResume