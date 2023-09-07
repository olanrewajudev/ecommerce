import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import SIgnup from './Pages/SIgnup'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Products />} />
        <Route path='/signup' element={<SIgnup />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
