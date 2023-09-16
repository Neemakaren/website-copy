import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route  path='/about' element={<About />}/> 
      <Route path='/contact' element={<Contact />}/>
      <Route path='/single' element={<Single />}/> */}
      <Route path='*' element={<Error />}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
