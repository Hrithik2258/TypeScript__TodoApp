import { type } from 'os'
import React,{useState}  from 'react'
import { Todo } from './Modal';
import {AiFillEdit,AiFillDelete} from 'react-icons/ai';
import {MdDone} from 'react-icons/md';
import './Style.css'
import ToDoList from './TodoList';

type Props= {
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}



const SingleTodo:React.FC<Props> = ({todos,todo,setTodos}) => {

//Adding The eDIT fUNCTIONALITY
const [edit, setEdit] = useState<Boolean>(false);
const [editTodo, setEditTodo] = useState<string>(todo.todo)


    const HandleDone = (id:number)=> {
            setTodos(todos.map((todo)=> todo.id === id?{...todo,isDone: !todo.isDone}:todo))
    };

//Deleting The Function 
// we are using the filter function As we want to delete this stuff to filter out that function to get it filter

    const HandleDelete= (id:number)=> {
        setTodos(todos.filter((todo)=> todo.id!==id));

    };



    const handleEdit = (e:React.FormEvent,id:number)=> {
        e.preventDefault();
        setTodos(todos.map((todo)=> (
            todo.id === id? {...todo,todo:editTodo}:todo) )
            
            )
            setEdit(false); 
    }


  return (
 <form className='todos__single' onSubmit={(e)=> handleEdit(e,todo.id)}>
{edit?(
<input type='text'  value={editTodo} onChange={(e)=> setEditTodo(e.target.value)} className='edittodo___input'/>
    ): (
 
        todo.isDone?(
            <span className='todos__single--text'> {todo.todo} </span>

        ): (
            
            <span className='todos__single--text'> {todo.todo} </span>
        )
    )
}


   
    



<div style={{margin:"0px 0px 0px 280px"}}>
    <span className='icon' onClick={
        ()=>{
            if (!edit && !todo.isDone){
                setEdit(!edit);
            }
    
        }
    }>{<AiFillEdit/>} 
     </span>
   
    <span className='icon'  onClick={()=> HandleDelete(todo.id)}>{<AiFillDelete/>} </span>
    <span className='icon' onClick={()=> HandleDone(todo.id)}> <MdDone/> </span>
</div>
 </form>
  )
}

export default SingleTodo

