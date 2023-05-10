import { Container,CircularProgress,Box } from "@mui/material"
import { PedirDatos } from "../../helpers/PedirDatos"
import ItemDetail from "../itemDetail/ItemDetail"
import { useParams,useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
const ItemDetailContainer = () => {
 
    const [producto,setProducto]= useState({})
    const [loading,setLoading]= useState(true)
    const {id} = useParams();
    const navigate = useNavigate()
    useEffect(()=>{
        setLoading(true)
        PedirDatos().then((data)=>{
            let item = data.find((item)=> item.id === Number(id))
            if(item){
                setProducto(item)
            }
            else{
                navigate(-1)
            }
        }).catch((err) => console.log(err))
        .finally(()=>setLoading(false))
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