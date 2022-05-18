import React ,{useState} from 'react'
import style from "./todo.module.css"

const TodoInput = ({addTodo}) => {
    const [value,setValue] = useState("");

  return (
    <div>
        <input className={style.in} type="text" 
        value={value}
        placeholder="new todo list"
        onChange={(e)=>{
            setValue(e.target.value)
        }}
         />

         <button className={style.btn}
         disabled = {!value}
         onClick = {()=>{
             addTodo(value);
             setValue("")
         }}
          >
             +
         </button>

      
    </div>
  )
}

export default TodoInput
