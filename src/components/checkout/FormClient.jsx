import { Avatar, Box, Grid, TextField, Typography } from "@mui/material"
import { deepOrange } from '@mui/material/colors'



const FormClient = () => {


    return (
        <Box>
            <Grid container>
                <Typography sx={{display:"flex"}}>
                    <Avatar sx={{ bgcolor: deepOrange[500],marginRight:"10px",alignItems:"center"}}
                        alt="Remy Sharp">
                        1
                    </Avatar>
                    INFORMACION DE FACTURACION Y ENVIO
                </Typography>
            </Grid>
            <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Nombre"
                    name="name"
                    autoComplete="name"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="direccion"
                    label="Direccion"
                    id="direccion"
                    autoComplete="Direccion"
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Repet Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />

            </Box>
        </Box>
    )
}

export default FormClient