import { createContext } from "react";

export const StoreContext=createContext()
const StoreContextProvider=(props)=>{
    const url='http://localhost:4000'
    const value={url}
    return (
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider