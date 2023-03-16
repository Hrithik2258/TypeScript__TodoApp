import React from 'react';
import './Style.css';
import { Todo } from './Modal';
import SingleTodo from './SingleTodo';

interface Props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>

}

const ToDoList:React.FC<Props> = ({todos,setTodos}) => {
  return (
    <div className='todos'>
{todos.map(todo => (
<SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
))}
    </div>
  )
}

export default ToDoList
