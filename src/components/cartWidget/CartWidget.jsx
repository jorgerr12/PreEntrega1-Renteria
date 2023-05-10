import { Box, IconButton, Badge, } from "@mui/material";
import LocalMallIcon from '@mui/icons-material/LocalMall';
const CartWidget = () => {
    return (
        <Box>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={1} color="error">
                    <LocalMallIcon />
                </Badge>
            </IconButton>
        </Box>
    );
}
export default CartWidget;