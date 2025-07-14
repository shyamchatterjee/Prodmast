import { createContext, useState } from "react";

  export let Context = createContext(null)
  export let ContextFuntion = ({children})=>{

     let [bool,setBool]  = useState(false)
          return <Context.Provider value={{bool,setBool}}>
                 {children}
          </Context.Provider>
  }