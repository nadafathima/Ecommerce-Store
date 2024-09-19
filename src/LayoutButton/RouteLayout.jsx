import React from 'react'
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Home from '../Components/Home'
import Logout from '../Components/Logout'
import ProductDetails from '../Components/ProductDetails'

function RouteLayout() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/logout' element={<Logout/>}/>
            <Route path='/product/:id' element={<ProductDetails/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default RouteLayout
