import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { TotalContext } from "./totalContext";

function App() {

  let total = JSON.parse(localStorage.getItem('total')!);
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
