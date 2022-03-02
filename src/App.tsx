import React from "react";
import { useDispatch } from "react-redux"

import GlobalStyles from "./styles/GlobalStyles";
import Routes from "./routes";
import { addItem, removeItem } from "./store/actionCreators"
import { Dispatch } from "redux";
import { IItem } from "./types";

const App: React.FC = () => {
      const dispatch: Dispatch<any> = useDispatch()
    
      const saveItem = React.useCallback(
        (item: IItem) => dispatch(addItem(item)),
        [dispatch]
      )

    return (
        <>
            <GlobalStyles />
            <Routes 
              saveItem={saveItem} 
              removeItem={removeItem} 
            />
        </>
    )
}

export default App;