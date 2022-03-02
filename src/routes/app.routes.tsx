import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Produtos from "../pages/Produtos";
import Carrinho from "../pages/Carrinho";
import { IItem } from "../types";

type Props = {
    saveItem: (item: IItem | any) => void,
    removeItem: (item: IItem | any) => void
}

const AppRoutes: React.FC<Props> = (saveItem, removeItem) => (
    <Layout>
        <Routes>
            <Route path="/" element={<Produtos {...saveItem} {...removeItem} />} />
            <Route path="/carrinho" element={<Carrinho {...saveItem} {...removeItem}/>} />
        </Routes>
    </Layout>
);

export default AppRoutes;