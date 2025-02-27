import React from "react";
import Navbar from "./Components/Navbar"
import Main_Pages from "./Components/Main_Pages";
import Footer from "./Components/Footer"
import Product_Display from "./Components/Product_Display"
import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";

const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Main_Pages />} />
                <Route path="/Product_Display/:ProductId" element={<Product_Display />}/>
                <Route path="/cart/:Cartid" element={<Cart/>}/>
            </Routes>
            <Footer />
        </>
    )
}

export default App