import React ,{useState} from 'react';
import '../App.css'
import InputFiled from './InputFiled';
import { Todo } from './Modal';
import ToDoList from './TodoList';


 

const Home :React.FC= () => {
    
const [todo, setTodo] = useState<string>('')  // we are assigning the to do to be in the string format thats why we have use the string outside the use state;
const [todos, setTodos] = useState<Todo[]>([])

const handleAdd= (e:React.FormEvent)=> {
e.preventDefault();

if(todo){
    setTodos([...todos,{id:Date.now(),todo,isDone:false}])
    setTodo("")
}
}

// console.log(todos);
  return (
    <div className='App'>
<span className='heading'>
Taskify
</span>
<InputFiled todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

{/* {todos.map((t)=>(
    <li> {t.todo}</li>
))} */}

<ToDoList todos={todos} setTodos={setTodos}   />


    </div>
  )
}

export default Home
