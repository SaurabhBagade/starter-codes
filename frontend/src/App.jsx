
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import NotFound from './pages/NotFound'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} errorElement={<ErrorPage/>}>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact/:no" element={<Contact/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
