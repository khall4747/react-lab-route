import React from 'react'
import { Link } from 'react-router-dom';
export default function allbooks() {
  return (
    <div>
        <Link to="/book/1" >book1</Link>
        <Link to="/book/2" >book2</Link>
        <Link to="/book/3" >book3</Link>
    </div>
  )
}
