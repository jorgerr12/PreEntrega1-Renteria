import { Box, Button, Grid, Typography } from "@mui/material"





const ItemCount = ({cantidad,setCantidad}) => {

    const hanleCantidad =
    {
        resta: ()=>{
            cantidad > 1 && setCantidad(cantidad -1)
        },
        suma:()=>{
            setCantidad(cantidad +1)
        }
    }
    return (

        <Grid container mt={5}>
            <Grid  sx={{ textAlign: 'center', alignSelf: 'center' }}>
                <Typography gutterBottom color="gray"  justifyContent="center" marginRight={3} >
                    Cantidad:
                </Typography>
            </Grid>
            <Grid item>
                <Button onClick={hanleCantidad.resta} variant="outlined" color="primary" sx={{ minWidth: "30px" }} disabled={cantidad === 1} >
                    -
                </Button>
            </Grid>
            <Grid width={30} sx={{ textAlign: 'center', alignSelf: 'center' }}>
                <Typography   justifyContent="center" >
                   {cantidad}
                </Typography>
            </Grid>
            <Grid>
                <Button onClick={hanleCantidad.suma} variant="outlined" color="primary" sx={{ minWidth: "30px" }}>
                    +
                </Button>
            </Grid>
        </Grid>


    )


}


export default ItemCount