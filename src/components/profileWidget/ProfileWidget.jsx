import { AccountCircle } from "@mui/icons-material"
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material"
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";


const ProfileWidget = () => {
    const {user,logout} = useContext(AuthContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLogout = () => {
        logout()
        setAnchorEl(null);

    };
    const handleClose = () => {
        setAnchorEl(null);
      };
    
    return (
        <Box sx={{display:"flex",alignItems:"center"}}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <AccountCircle />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
               
            >

                <MenuItem onClick={handleLogout}>logout</MenuItem>
            </Menu>
            <Typography>{user.email}</Typography>
        </Box>
    )
}

export default ProfileWidget