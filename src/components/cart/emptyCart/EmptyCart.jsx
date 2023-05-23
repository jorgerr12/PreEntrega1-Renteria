import { Container,Grid,Card,Box,Typography,Button } from "@mui/material"
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { Link } from "react-router-dom";
const EmptyCart = ()=>{

    return (
        <Container maxWidth="xl" sx={{ alignSelf: "center", marginTop: "50px", }}>
                <Grid container sx={{ justifyContent: "center" }}>
                    <Grid item xs={12} sm={10} md={10} m={3} >
                        <Card sx={{ height: "500px", display: "grid", alignItems: "center", textAlign: "center" }}>
                            <Box >
                                <Box>
                                    <ProductionQuantityLimitsIcon sx={{ fontSize: 150, color: "khaki" }} />
                                </Box>
                                <Typography
                                    variant="h5"
                                    noWrap
                                    sx={{
                                        mr: 2,
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        textDecoration: 'none',
                                    }}>
                                    TU CARRITO ESTA VACIO!

                                </Typography>

                                <Typography variant="h5"
                                    noWrap
                                    sx={{
                                        mr: 2,
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        textDecoration: 'none',
                                    }}>
                                    AGREGA PRODUCTOS Y APROVECHA NUESTROS BAJOS PRECIOS!
                                </Typography>
                                <Box mt={3}>
                                    <Link to="/" className="btn btn-primary">
                                        <Button variant="contained" >
                                            AGREGAR PRODUCTOS
                                        </Button>

                                    </Link>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
    )
}

export default EmptyCart