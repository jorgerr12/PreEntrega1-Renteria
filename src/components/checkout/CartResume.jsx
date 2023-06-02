import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Avatar, Box, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { deepOrange } from "@mui/material/colors"


const CartResume = () => {

    const { cart, totalCart } = useContext(CartContext)


    return (
        <Box>
            <Grid>
                <Typography>
                    <Avatar sx={{ bgcolor: deepOrange[500] }}
                        alt="Remy Sharp">
                        2
                    </Avatar>
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

                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default CartResume