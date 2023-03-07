import React ,{ createContext, useReducer } from "react"

const INITIAL_STATE = {
    openLogout: false
}

export const LogoutContext = createContext(INITIAL_STATE)

const logoutReducer = (state,action) =>{
    switch(action.type){
        case "OPEN":
            return{
                openLogout: true
            }
        case "CLOSE":
            return {
                openLogout: false
            }
        default:
            return state
    }
}

export const LogoutContextProvider = ({children}) =>{
    const [ state , dispatch ] = useReducer(logoutReducer ,INITIAL_STATE)
    return(
        <LogoutContext.Provider value={{ openLogout: state.openLogout , dispatch}}>
            {children}
        </LogoutContext.Provider>
    )
}