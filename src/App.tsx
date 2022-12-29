import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { TotalContext } from "./totalContext";
import { totalType } from "./types";

function App() {

  useEffect(() => {
    if(localStorage.length === 0) {
      localStorage.setItem('total', JSON.stringify({
        count: 0,
        price: 0
      }));
      localStorage.setItem('basketProducts', JSON.stringify([]));
    }
  }, [])

  const total: totalType = JSON.parse(localStorage.getItem('total')!) !== null ? JSON.parse(localStorage.getItem('total')!) : 0;
  const [totalPrice, setTotalPrice] = useState(total.price);

  return (
    <TotalContext.Provider value={{totalPrice, setTotalPrice }}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <AppRouter />
          <Footer />
        </BrowserRouter>
      </div>
    </TotalContext.Provider>
  );
}

export default App;
