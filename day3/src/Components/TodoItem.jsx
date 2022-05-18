import React from 'react'
import style from "./todo.module.css"
const TodoItem = ({value,deleteTodo, id}) => {
  return (
  <>  
        <div className = {style.todo}>
           
        <p>{value} </p> 
        <button onClick={()=>  deleteTodo(value,id) }>delete</button>
       
       
        </div>
        
  </>
   

  )
}

export default TodoItem
