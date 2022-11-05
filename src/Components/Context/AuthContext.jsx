import { createContext, useState } from "react";

export const AuthContext = createContext();
export default function AuthContextProvider({children}){
    const [auth,setAuth] = useState(false);
    const toggleAuth = ()=>{
        setAuth(!auth);
    }
    return(
        <div>
            <AuthContext.Provider value={{auth,toggleAuth}}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}