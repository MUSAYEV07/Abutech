import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact/Contact'
import Layout from './Layout'


function App() {
  return (
    <div>
      <BrowserRouter>
         <Routes>
            <Route path='/contact' element={<Contact/>}/>
         </Routes>
      </BrowserRouter>
      <Layout/>
    </div>
  )
}

export default App