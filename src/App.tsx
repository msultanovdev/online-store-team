import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Basket from "./pages/Basket/Basket";
import Catalog from "./pages/Catalog/Catalog";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
