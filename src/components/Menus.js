import React from 'react'
import { Link } from 'react-router-dom';

const Menus = () => {
   
  return (
    <div>
    <ul>
        <li>
            <Link className="backbtn" to='/'>Back</Link>
        </li>
    </ul>
 </div>
  )
}

export default Menus;