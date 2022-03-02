import React from "react";

import { BrowserRouter } from 'react-router-dom';
import { IItem } from "../types";

import AppRoutes from "./app.routes";

type Props = {
    saveItem: (item: IItem | any) => void,
    removeItem: (item: IItem | any) => void
}

const Routes: React.FC<Props> = ({saveItem, removeItem}) => (
    <BrowserRouter>
        <AppRoutes saveItem={saveItem} removeItem={removeItem} />
    </BrowserRouter>    
    
)

export default Routes;
