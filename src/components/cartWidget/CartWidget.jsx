import { Box, IconButton, Badge, } from "@mui/material";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
const CartWidget = () => {

    const {cart,countCart}= useContext(CartContext)

    const count = countCart()

 
    return (
        <Box>
            <Link to={"/cart"} style={{ textDecoration: "none" }} color="white">
            <IconButton size="large" aria-label="show items cart" sx={{color:"white"}}>
                <Badge badgeContent={count} color="error">
                    <LocalMallIcon />
                </Badge>
            </IconButton>
            </Link>
        </Box>
    );
}
export default CartWidget;