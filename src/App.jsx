import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import { Products } from './pages/Products'
import { Contact } from './pages/Contact'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
 <Routes>
  <Route index element={<Home/>}/>
  <Route path='/products' element={<Products/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/login' element={<Login/>}/>

 </Routes>

    </>
  )
}

export default App
