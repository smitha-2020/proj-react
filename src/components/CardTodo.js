import React from 'react'
import Backdrop from './Backdrop';
// import Cardbtn from './Cardbtn';
import { useState } from 'react';
import Details from './Details';
import Cardbtn from './Cardbtn';

const CardTodo = (props) => {

    const [SelItem,setSelItem] = useState('smitha')   
    const [IsModalOpen,setIsModalOpen] =useState(false);
  
    function LinkClicked(item){
      setSelItem(item)
  
  }
  function changeModal(item){
    //test after context
     
     setIsModalOpen(true)
     setSelItem(item)
  
  }
  function deleteModal(){
     setIsModalOpen(false)
  
  }
  return (
    <>
      
    <ul className='mainDiv'>

        {props.items.map(item => <li className='subDiv' key={item.id}>

                <div className='roundName'>{(item.username).split('')[0]}</div>
                <div className='headingName'>{item.name}</div>
                <div className='divName'>@{item.username}</div>
                <div className='divwebsite'>https://{item.website}</div>
                <br></br>
                <Cardbtn item={item} onClick={() => LinkClicked({item})}/>
                {/* <Link className='divBtn' to={`/view/${item.id}`} onClick={() => LinkClicked({item})} state={item} >More Details</Link> */}
                {/* <button className='divBtn' onClick={()=>{changeModal(item)}}>More Details</button> */}
                {/* <div className="btnWrapper">
                        <button className='divBtn' onClick={()=>{changeModal(item)}}>click</button>
                        <Link className='linkBtn' to={`/view/${item.username}`} onClick={() => LinkClicked({item})} state={item} >click</Link>
                </div> */}
                {IsModalOpen && <Backdrop onClick={deleteModal} />}
                {IsModalOpen && <Details onConfirm={deleteModal} onCancel={deleteModal} item={SelItem} />}
        </li>)}
</ul>
  
  </>
  )
}

export default CardTodo