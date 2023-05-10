import { PedirDatos } from "../../helpers/PedirDatos";
import { useEffect, useState } from "react";
import ItemList from "../itemList/ItemList";
import { CircularProgress, Container,Box } from "@mui/material";
import { useParams,useNavigate } from "react-router-dom";

const ItemListContainer = () => {

    const [productos, setProductos] = useState({})
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        setLoading(true)
        PedirDatos()
            .then((data) => {
                if (!categoryId) {
                    setProductos(data)
                }
                else {
                    let items = data.filter((item) => item.category === categoryId)
                  
                    if(items.length >0){
                        setProductos(items)
                    }
                    else{
                        console.log("no existe categoria")
                     navigate(-1)
                    }
                    
                    
                }

            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [categoryId])
    return (
        <section id="productos">
            <Container maxWidth="xl" mt={100}>
                {
                    loading 
                    ? 
                    <Box sx={{ display: 'flex',justifyContent:'center'}}>
                        <CircularProgress />
                    </Box>
                    : <ItemList items={productos} />
                }

            </Container>
        </section>
    );
}

export default ItemListContainer;