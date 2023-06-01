import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/config";

export const AuthContext = createContext()


export const AuthProvider =({children})=>{

    const [user,setUser] = useState({
        email:null,
        logged:false
    })

    const signIn =(values)=>{
        signInWithEmailAndPassword(auth,values.email,values.password)
        .catch(e=>console.log(e))
    }

    const signUp =(values)=>{
        createUserWithEmailAndPassword(auth,values.email,values.password)
        .catch(e =>console.log(e))
    }

    const logout =()=>{
        signOut(auth)
    }

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser({
                    email:user.email,
                    logged:true
                })
            }else{
                setUser({
                    email:null,
                    logged:false
                })
            }
        })
    },[])
    return(
        <AuthContext.Provider value={{user,signIn,signUp,logout}}>
            {children}
        </AuthContext.Provider>
    )
}