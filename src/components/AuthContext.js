import { createContext,useState } from "react";
export const AuthContext=createContext();
export const AuthProvider=({children}) =>{
    const [valid,setValid]=useState(false);
    const login=()=>{
        setValid(true);
    }
    const logout=()=>{
        setValid(false);
    }
    return(
        <AuthContext.Provider value={{valid,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
};