import { createContext, useState } from "react";
import run from "../config/Gemini";
export const Context = createContext();

const ContextProvider = (props)=>{
    const [input, setInput] = useState("")
    const [recentprompt, setRecentprompt] = useState( "")
    const [prevprompt, setPrevprompt] = useState([])
   
    const [showresult, setShowresult] = useState(false )
    const [loading, setLoading] = useState( false)

   const [resultData, setResultData] = useState("")

    const onSent = async (prompt)=>{
       setResultData("")
       setLoading(true)
       setShowresult(true)
   setRecentprompt(input)
      const response =  await run(input)
      setResultData(response)
      setLoading(false)
      setInput("")

    }
    onSent("what is react js")

    const contextValue = {
        prevprompt,
        setPrevprompt,
        onSent,
        setRecentprompt,
        recentprompt,
        showresult,
        loading,
        resultData,
        input,
        setInput
    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider