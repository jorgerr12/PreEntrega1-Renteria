import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { ReadMore } from '@mui/icons-material'
import { Link } from 'react-router-dom';
const ItemCard = ({ item }) => {

    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia width="100%"
                        component="img"
                        height="320px"
                        image={item.img}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.nombre}
                        </Typography>
                        <Typography textAlign={"center"} color={"red"} gutterBottom variant="h5" component="div">
                            Precio: S/{item.precio}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{ justifyContent: "center" }}>
                    <Link to={`/item/${item.id}`}>
                        <Button size="large" variant="contained" startIcon={<ReadMore />}>
                            Ver mas
                        </Button>
                    </Link>

                </CardActions>
            </Card>
        </Grid>

    )
}
export default ItemCard