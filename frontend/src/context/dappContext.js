/* https://www.robinwieruch.de/react-usecontext-hook */
import {createContext, useContext} from "react";

// Create the context
const DappContext = createContext(null);

// Create a custom provider component
const DappContextProvider = ({value, children}) => (
  <DappContext.Provider value={value}>{children}</DappContext.Provider>
);

// Create a hook to grab the value directly
const useDappContext = () => useContext(DappContext);

export {DappContextProvider, useDappContext};
