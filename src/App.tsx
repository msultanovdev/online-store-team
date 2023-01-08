import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { TotalContext } from "./totalContext";
import { totalType } from "./types";

function App() {
  const total: totalType = JSON.parse(localStorage.getItem('total')!) !== null ? JSON.parse(localStorage.getItem('total')!) : 0;
  const [totalPrice, setTotalPrice] = useState(total.price);

  const [amount, setAmount] = useState(total.count);
  const [isModalActive, setIsModalActive] = useState(false);

  useEffect(() => {
      if(localStorage.length <= 2) {
        setTotalPrice(0);
        setAmount(0);
      localStorage.setItem('total', JSON.stringify({
        count: 0,
        price: 0
      }));
      localStorage.setItem('basketProducts', JSON.stringify([]));
      }
  }, [])

  return (
    <TotalContext.Provider value={{totalPrice, setTotalPrice, amount, setAmount, isModalActive, setIsModalActive}}>
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
