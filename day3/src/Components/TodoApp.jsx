
import React , {useState} from 'react'
import TodoInput from "./TodoInput.jsx"
import TodoItem from "./TodoItem.jsx"
import TodoList from "./TodoList.jsx"
import {v4 as uuidv4} from "uuid";
import style from "./todo.module.css"
 


const TodoApp = () => {
    const [todos,setTodos] = useState([]);
    const addTodo = (xyz)=>{
        setTodos([...todos,{
            id: uuidv4(),
            value: xyz,
        }])

    }

    const deleteTodo = (value,key)=>{
        setTodos(todos.filter((todo)=> todo.id !== key));

    }
/// input 
// listing
// todo item
  return (
    <>
        TodoApp
        <div className={style.input}>
      <TodoInput   addTodo = {addTodo}/>
      </div>
      
      <TodoList todos = {todos} deleteTodo = {deleteTodo}/>
      </>
  )
}

export default TodoApp
