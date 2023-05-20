import MOCK_DATA from "../data/MOCK_DATA"

export const PedirDatos =()=>{

return new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve (MOCK_DATA)
    },2000)
})


}