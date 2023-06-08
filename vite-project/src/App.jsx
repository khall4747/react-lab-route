import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes, Route  } from 'react-router-dom';
import NotFound from './componet/notFound'
import { Link } from 'react-router-dom'; //to add links in page
import Book from './componet/Book';
import Allbooks from './componet/allbooks'
import { Button } from '@chakra-ui/react';
function App() {
  const [todo,setTodo]=useState("")
  const [list,setlist]=useState([])
  const list1 = ()=>{
    setlist([...list,todo])
  }
  return (
    <>
   <input value={todo} onChange={(e)=>setTodo(e.target.value)}/>
     <button onClick={list1}>submit</button>
     
      <ul>{list.map((item,key)=>(
        <li key={item}>{item}</li>
         

      ))}</ul>
    
    </>
   
  )
}

/*  const [count, setName] = useState(0)
  const a =2
  const b=3
<button onClick={ ()=>{setName(a*b)}} >button</button>
  <button  onClick={()=>{setName(a-b)}}>button</button>
  <button>button</button>
   <p>{count}</p>*/
//-----------------------------------------------------------
   /* const [rate,setRate]=useState(0)
     const [Text,setText]=useState("") sholud have inatial vale
 const valueAl=(e)=>{
  if(rate<=5  && Text=="" ){
   alert("hello")
  }
 
 }
  return (
    <>
   <h1>rate</h1> <br/>
   <input type='range' max={10} min={0} value={rate} onChange={(e)=>{setRate(e.target.value)}}/><br/>
   <textarea value={Text} onChange={(e)=>{setText(e.target.value)}}></textarea><br/>
    <button onClick={valueAl}>submit</button>
    </>
   
  )*/
export default App
