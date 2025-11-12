import { createContext, useState } from "react";

export let Context = createContext(null);
export let ContextFuntion = ({ children }) => {
  let [bool, setBool] = useState(false);
  let [boolen, setboolen] = useState(false);
  let [curreState, setState] = useState(true);
  let [position, setposition] = useState("");
  return (
    <Context.Provider
      value={{
        bool,
        setBool,
        boolen,
        setboolen,
        curreState,
        setState,
        setposition,
        position,
      }}
    >
      {children}
    </Context.Provider>
  );
};
