import React from 'react'

const Card = (props) => {
    const data = props.data;
  return (
    <div className="mainView">
    {/* <Menus/> */}
     
    <div className="detailView">
    <div className="detailViewName">Name:{data.name}</div>
    <div className="detailViewUsername">Username:{data.username}</div>
    <div className="detailViewemail">Email:{data.email}</div>
    <div className="detailViewph">Phone:{data.phone}</div>
    <div className="detailViewcompany">Company:https://{data.company.name}</div>
    <div className="detailViewweb">Website:{data.website}</div>
    <div className="detailViewadd">address:</div>


    
    <div className="detailViewul">
       <div>street:<span>{data.address.street}</span></div>
       <div>suite:{data.address.suite}</div>
       <div>city:{data.address.city}</div>
       <div>zipcode:{data.address.zipcode}</div>
    </div>
    


 </div>  
 </div>
  )
}

export default Card