import { Box, Typography, Grid, Card, CardMedia, Button } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
import ItemCount from "../itemCount/ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import Notifications from "../notifications/Notifications"
const ItemDetail = ({ item }) => {

    const [cantidad, setCantidad] = useState(1)
    const [notification,setNotification]=useState(false)
    const {addItem}=useContext(CartContext)

    const handleAddItem = ()=>{
        setNotification(false)
        const _cart = {...item,cantidad}
        addItem(_cart)
        setNotification(true)
    }
    
    return (
        
        <Grid container justifyContent={"center"}  spacing={3}>
            {notification && <Notifications type="success" message={item.nombre} description="se registro con exito" />}
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
                    <ItemCount cantidad={cantidad} setCantidad={setCantidad}></ItemCount>
                    <Box mt={5}>
                        <Button onClick={handleAddItem} size="large" variant="contained" startIcon={<ShoppingCart />}>
                            AGREGAR AL CARRITO
                        </Button>
                    </Box>

                </Box>
            </Grid>
        </Grid>
    )
}
export default ItemDetail