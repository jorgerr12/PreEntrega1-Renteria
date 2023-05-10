import ItemCard from "../itemCard/ItemCard"
import { Grid } from "@mui/material";
const ItemList = ({items})=>{

    return(
        <Grid container spacing={3}>
           
                {
                    items.map((item)=><ItemCard key={item.id} item={item} />)
                }
        </Grid>
    )
}

export default ItemList;