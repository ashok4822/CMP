import { createContext } from "react";

export const StoreContext=createContext()
const StoreContextProvider=(props)=>{
    
    const value={}
    return (
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider