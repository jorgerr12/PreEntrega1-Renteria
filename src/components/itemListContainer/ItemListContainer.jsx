import { PedirDatos } from "../../helpers/PedirDatos";
import { useEffect, useState } from "react";
import ItemList from "../itemList/ItemList";
import { collection, getDocs, query, where } from 'firebase/firestore'
import { CircularProgress, Container, Box } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../firebase/config";

const ItemListContainer = () => {

    const [productos, setProductos] = useState({})
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, "productos")
        const ref = categoryId
            ? query(productosRef, where("category", "==", categoryId))
            : productosRef


        getDocs(ref)
            .then((res) => {
                const docs = res.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                if(docs.length > 0) {
                    setProductos(docs)
                }
                else{
                    navigate(-1)
                }
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
    }, [categoryId])
    return (
        <section id="productos">
            <Container  maxWidth="xl" mt={100} sx={{minHeight:"800px"}}>
                {
                    loading
                        ?
                        <Box sx={{ display: 'flex', justifyContent: 'center',alignItems:"center" }}>
                            <CircularProgress />
                        </Box>
                        : <ItemList items={productos} />
                }

            </Container>
        </section>
    );
}

export default ItemListContainer;