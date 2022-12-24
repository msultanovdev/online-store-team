import React from "react";
import { Route, Routes } from "react-router-dom";
import Basket from "../pages/Basket/Basket";
import Catalog from "../pages/Catalog/Catalog";
import Main from "../pages/Main/Main";
import NotFound from "../pages/NotFound/NotFound";
import Product from "../pages/Product/Product";

const AppRouter = () => {
    return(
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/catalog/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
}

export default AppRouter;