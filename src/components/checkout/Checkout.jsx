import { Container, Grid } from "@mui/material"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartResume from "./cartResume"
import FormClient from "./FormClient"


const Checkout = () => {



    return (
        <Container maxWidth="xl" sx={{ alignSelf: "center", marginTop: "50px", }}>
            <Grid container sx={{ justifyContent: "center" }}>
                <Grid>
                    <FormClient />
                </Grid>
                <Grid>
                    <CartResume />
                </Grid>
            </Grid>
        </Container>

    )
}

export default Checkout