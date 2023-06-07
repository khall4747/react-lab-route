import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes, Route  } from 'react-router-dom';
import NotFound from './componet/notFound'
import { Link } from 'react-router-dom'; //to add links in page
import Book from './componet/Book';
import Allbooks from './componet/allbooks'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
  <Link to="/book" >books</Link>
    
    <Routes>
      <Route path="/" element={<h1>hello</h1>} ></Route>
      <Route path="/book" element={<Allbooks/>} />
      <Route path="/book/:id" element={<Book/>} />
      <Route path="/*" element={<NotFound/>}/>
    
      </Routes> 
    </>
  )
}

export default App
