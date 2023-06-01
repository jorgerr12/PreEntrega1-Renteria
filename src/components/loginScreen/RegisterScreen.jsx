import { Avatar, Box, Button, Container, Grid, TextField, Typography } from "@mui/material"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";


const RegisterScreen = () => {
    const {signUp} = useContext(AuthContext)
    const [values,setValues] =useState({
        email:'',
        password:''
    })

    const handleInput = (e)=>{
        setValues({
            ...values,
            [e.target.name]:e. target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
       signUp(values)
      };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Registrarse
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        value={values.email}
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleInput}
                    />
                    <TextField
                        value={values.password}
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleInput}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Registrarse
                    </Button>
                    <Grid container>
                        <Grid item xs>
                        </Grid>
                        <Grid item>
                            <Link to="/login">
                                {"Iniciar Sesion"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

        </Container>

    )
}

export default RegisterScreen