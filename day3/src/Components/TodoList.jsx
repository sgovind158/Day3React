import React from 'react'
import TodoItem from './TodoItem.jsx'

const TodoList = ({todos,deleteTodo}) => {

  return (
    <div>
        <h2>Here is your todo list</h2>
       
        <ul>
         {todos.map((todo)=>{ 
             return(
            <TodoItem  key={todo.id} id={todo.id}  value={todo.value} deleteTodo={deleteTodo}/>
         )
         }
         )}
        </ul>
      
    </div>
  )
}

export default TodoList
