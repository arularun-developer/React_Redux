import React from 'react'
import Header from './Header'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Product from './Product'
import Cart from './Cart'
function Home() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/product/:id' element={<Product/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </div>
  )
}

export default Home
