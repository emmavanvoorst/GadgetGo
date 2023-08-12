import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { styled } from "styled-components";
import Home from './Home';
import Header from './Header';
import Footer from "./Footer";
import Company from './Company';
import AllProducts from './AllProducts';
import Cart from './Cart';
import ProductDetails from './ProductDetails';
import AboutPage from './AboutPage';
import Confirmation from './Confirmation';


//list of all our routes 
function App() {
  return (
    <Router>
      <Container>
      <Header/>
      <Routes>
        <Route path ="/" element = {<Home/>}/>
        <Route path="/:company" element={<Company />} />
        <Route path = "/company/:companyId" element = {<Company/>}/>
        <Route path = "/allproducts" element = {<AllProducts/>}/>
        <Route path="/cart" element={<Cart />} />
        <Route path = "/allproducts/:itemId" element = {<ProductDetails/>}/>
        <Route path = "/about" element = {<AboutPage/>}/>
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
      <Footer/>
      </Container>
    </Router>
  );
}


const Container = styled.div`
display: flex;
flex-direction: column;
`

export default App;
