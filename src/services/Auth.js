import React, { useState, useEffect } from 'react';
import app from './base'

export const AuthContext=React.createContext();

export const AuthProvider=({children})=>{
    const[currntUser,setCurrentUser]=useState(null)
    useEffect(()=>{
        app.auth().onAuthStateChanged(setCurrentUser)
    },[])

    return(
        <AuthProvider.Provider value={{currntUser}}>
            {children}
        </AuthProvider.Provider>
    )
}