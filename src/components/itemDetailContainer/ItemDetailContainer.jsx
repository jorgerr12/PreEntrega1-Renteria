import { Container,CircularProgress,Box } from "@mui/material"
import ItemDetail from "../itemDetail/ItemDetail"
import { useParams,useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
const ItemDetailContainer = () => {
 
    const [producto,setProducto]= useState({})
    const [loading,setLoading]= useState(true)
    const {id} = useParams();
    const navigate = useNavigate()
    useEffect(()=>{
        setLoading(true)
        
        const docRef = doc(db,"productos",id)
        getDoc(docRef)
            .then((doc)=>{
                const item = {
                    id:doc.id,
                    ...doc.data()
                }
                setProducto(item)
            })
            .catch(err=>console.log(err))
            .finally(()=> setLoading(false))
    },[])
    return (
        <section>
            <Container maxWidth="xl" mt={100}>
                {
                    loading
                    ? <Box sx={{ display: 'flex',justifyContent:'center'}}>
                        <CircularProgress />
                     </Box>
                    : <ItemDetail item={producto} loading={loading}/>
                }
               
            </Container>
        </section>

    )
}
export default ItemDetailContainer