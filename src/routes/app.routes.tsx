import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Produtos from "../pages/Produtos";
import Carrinho from "../pages/Carrinho";

const AppRoutes: React.FC = () => (
    <Layout>
        <Routes>
            <Route path="/" element={<Produtos/>} />
            <Route path="/carrinho" element={<Carrinho/>} />
        </Routes>
    </Layout>
);

export default AppRoutes;