import React from 'react'

const Details = (props) => {
  return (
    <>
               
    <div className="modal">
    <div className='name-div'>Name: {props.item.username}</div>
    <div className='email-div'>UserName: {props.item.name}</div>
    <div className='add-div'>Email: {props.item.email}</div>
    <div className='add-div'>Phone: {props.item.phone}</div>
    <div className='add-div'>Company: {props.item.company['name']}</div>
    <div className='add-div'>Website: {props.item.website}</div>
    <div className='add-div'>Address: </div>
    <ul className='address-div'>
        <li>street: {props.item.address['street']} </li>
        <li>suite: {props.item.address['suite']} </li>
        <li>city: {props.item.address['city']} </li>
        <li>zipcode: {props.item.address['zipcode']} </li>
    </ul>

    <br></br>
    <p>Are you sure?</p>
    <button className="btn btn--alt" onClick={props.onCancel}>Cancel</button>
    <button className="btn" onClick={props.onConfirm}>Confirm</button>

</div>
</>
  )
}

export default Details