import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Customers from './pages/Customers'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './pages/HomePage'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'
import CreatePage from './pages/CreatePage'
import ReadPage from './pages/ReadPage'
import UpdatePage from './pages/UpdatePage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/customers' element={<Customers />}></Route>
        <Route path='/create' element={<CreatePage />}></Route>
        <Route path='/update/:id' element={<UpdatePage />}></Route>
        <Route path='/read/:id' element={<ReadPage />}></Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
