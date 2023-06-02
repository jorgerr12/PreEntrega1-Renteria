import { Card, Container, Grid } from "@mui/material"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartResume from "./cartResume"
import FormClient from "./FormClient"


const Checkout = () => {



    return (
        <Container maxWidth="xl" sx={{ alignSelf: "center", marginTop: "50px", }}>
            <Card sx={{padding:"20px"}}>
                <Grid container sx={{ justifyContent: "space-evenly" }}>
                    <Grid item md={5} sx={{margin:"10px"}}>
                        <FormClient />
                    </Grid>
                    <Grid item md={5}>
                        <CartResume />
                    </Grid>
                </Grid>
            </Card>
        </Container>

    )
}

export default Checkout