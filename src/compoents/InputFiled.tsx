import React ,{useRef} from 'react';
import './Style.css'

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e:React.FormEvent)=> void
}


const InputFiled:React.FC<Props> = ({todo,setTodo,handleAdd}) => {
    const inputRef = useRef<HTMLInputElement>(null)
  return (
    <div>

<form className='input' onSubmit={(e)=>{ 
    handleAdd(e)
    inputRef.current?.blur()
    }}>
    <input 
    type='text'
    ref={inputRef} 
    placeholder='Enter a Task ' className='input__box'
    value={todo}
    onChange={
        (e) => setTodo(e.target.value)
    }
    />
<button className='input__submit' type='submit'>Go </button>
    

</form>
    </div>
  )
}

export default InputFiled
