import { Box, Typography, Grid, Card, CardMedia, Button } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
const ItemDetail = ({ item }) => {
    return (
        
        <Grid container justifyContent={"center"}  spacing={3}>
            <Grid item xs={12} md={5}>
                <Card>
                    <CardMedia
                        component="img"

                        image={item.img}
                    />
                </Card>
            </Grid>
            <Grid item xs={12} md={5} >
                <Box>
                    <Typography gutterBottom variant="h4" component="div">
                        {item.nombre}
                    </Typography>
                    <Typography color={"grey"} component="div">
                        Categoria: {item.category}
                    </Typography>

                    <Typography color={"grey"} textAlign={"justify"} mt={3}>
                        {item.descripcion}
                    </Typography>
                    <Typography gutterBottom color={"red"} variant="h4" mt={5}>
                        S/{item.precio}
                    </Typography>
                    <Typography gutterBottom variant="h6" mt={5}>
                        Estock Disponible: {item.stock}
                    </Typography>
                    <Box mt={5}>
                        <Button size="large" variant="contained" startIcon={<ShoppingCart />}>
                            AGREGAR AL CARRITO
                        </Button>
                    </Box>

                </Box>
            </Grid>
        </Grid>
    )
}
export default ItemDetail