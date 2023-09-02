import React from 'react'
import {Routes,Route} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import Home from '../component/Home'
function Index() {
  return (
<BrowserRouter>
<Routes>
    <Route path='*' element={<Home/>}></Route>
</Routes>
</BrowserRouter>
  )
}

export default Index

