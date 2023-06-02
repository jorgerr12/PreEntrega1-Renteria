import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/config";

export const AuthContext = createContext()


export const AuthProvider =({children})=>{

    const [user,setUser] = useState({
        email:null,
        logged:false
    })

    const [errors,setErrors] = useState(null)

    const signIn =(values)=>{
        signInWithEmailAndPassword(auth,values.email,values.password)
        .catch(e => setErrors(e.message))
    }

    const signUp =(values)=>{
        createUserWithEmailAndPassword(auth,values.email,values.password)
        .catch(e => setErrors(e.message))
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
        setErrors(null)
    },[])
    return(
        <AuthContext.Provider value={{user,errors,setErrors,signIn,signUp,logout}}>
            {children}
        </AuthContext.Provider>
    )
}