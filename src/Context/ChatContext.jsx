import React ,{ createContext, useEffect, useReducer } from "react"

const INITIAL_STATE = {
    chatId: JSON.parse(localStorage.getItem("chat")) || null,
}

export const ChatContext = createContext(INITIAL_STATE)

const chatReducer = ( state,action ) =>{
    switch(action.type){
        case "OPENS":
            return{
                chatId: action.payload
            }
        case "CLOSES":
            return {
                chatId: null
            }
        default:
            return state
    }
}

export const ChatContextProvider = ({children}) =>{
    const [ state , dispatch ] = useReducer(chatReducer ,INITIAL_STATE)

    useEffect(()=>{
        localStorage.setItem("chat" , JSON.stringify(state.chatId))
    },[state.chatId])

    return(
        <ChatContext.Provider value={{ chatId:state.chatId , dispatch}}>
            {children}
        </ChatContext.Provider>
    )
}