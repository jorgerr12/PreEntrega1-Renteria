import { Avatar, Box, Button, Grid, TextField, Typography } from "@mui/material"
import { deepOrange } from '@mui/material/colors'
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";



const FormClient = ({generarOrden}) => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const {user} = useContext(AuthContext)
    const onSubmit = (data) => { 
        generarOrden(data)
        console.log(data)
    }
    const error = ()=>{return 'error'}
    return (
        <Box>
            <Grid container sx={{ alignItems: "center" }}>
                <Avatar sx={{ bgcolor: deepOrange[500], marginRight: "10px", alignItems: "center" }}
                    alt="Remy Sharp">
                    1
                </Avatar>
                <Typography>

                    INFORMACION DE FACTURACION Y ENVIO
                </Typography>
            </Grid>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
                <TextField
                
                    {...errors.name && ({error})}
                    margin="normal"
                    fullWidth
                    id="name"
                    label="Nombre"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    helperText={errors.name && errors.name.message}
                    {...register("name",{ required: "Este campo es requericdo"})}
                />
                <TextField
                 {...errors.direccion && ({error})}
                    margin="normal"
                    fullWidth
                    name="direccion"
                    label="Direccion"
                    id="direccion"
                    autoComplete="Direccion"
                    helperText={errors.direccion && errors.direccion.message}
                    {...register("direccion",{ required: "Este campo es requericdo"})}
                />
                <TextField
                     {...errors.email && ({error})}
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    defaultValue={user.email}
                    autoFocus
                    helperText={errors.email && errors.email.message}
                    {...register("email",{ required: "Este campo es requericdo",pattern: {
                        value:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: 'Email invalido',
                      }})}
                />               
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    FINALIZAR COMPRA
                </Button>

            </Box>
        </Box>
    )
}

export default FormClient