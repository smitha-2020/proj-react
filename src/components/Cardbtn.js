import React from 'react'
import { Link } from 'react-router-dom';

const Cardbtn = (props) => {
  return (
    <Link className='divBtn' to={`/view/${props.item.id}`}  state={props.item} >More Details</Link>
  )
}

export default Cardbtn