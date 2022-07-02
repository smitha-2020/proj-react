import React from 'react'
import { useState,useEffect } from 'react';
import CardTodo from './CardTodo';

const Todo = () => {
    const [IsModalOpen,setIsModalOpen] =useState(false); 
    const [IsLoading,setIsLoading] =useState(true)
    const [items,setItems] = useState([])

    useEffect(()=>

        setIsLoading(true),
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((json) => {
               
                setIsLoading(false);
                setItems(json);
               
        }),[IsModalOpen])
        
        if(IsLoading){
                return(<div>Page is Loading..Wait a Moment..</div>)

        }else{

                
                return( 
                        <>

                              <CardTodo items={items} />
                        </>
                    )

        }
}

export default Todo