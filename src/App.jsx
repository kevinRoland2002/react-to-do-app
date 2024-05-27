import { useState } from 'react'
import { ToDoInput } from './components/ToDoInput'
import { ToDoList } from './components/ToDoList'
import './App.css'

function App() {

  //Listado de to do
  const [todos, setTodos] = useState([]);
  //Contador para la key
  const [key, setKey] = useState(1);

  const handleSubmit = (e) => { 
    //Previene el renderizado de la pagina
    e.preventDefault();
    //Agrega la tarea a la lista

    const newToDo = {
      key:key,
      title:e.target.title.value,
      description:e.target.description.value,
      completed:false
    }

    if (newToDo.title === "") {return}

    // De esta manera la ultima agregada sale arriba.
    setTodos([newToDo, ...todos]
  );
  
  //Limpiar campos del formulario
  e.target.title.value = '';
  e.target.description.value = '';

  //Incrementar el contador del key
  setKey((key) => key+1);
  }
  
  const handleDelete = (key) => {
    const updatedItems = todos.filter(todo => todo.key !== key);
    setTodos(updatedItems);
  }

  return (
    <>
      <div className='container'>
        <form className='todo-form' onSubmit={handleSubmit}> 
          <h1 style={{marginLeft:55}}>New To Do</h1>
          <input type="text" id='title' placeholder='Name of to do' style={{width:250, marginBottom:12, borderColor:'white'}}/>
          <br />
          <textarea id='description' placeholder='Description of to do' cols="30" rows="3" style={{width:252, marginBottom:12, borderColor:'white', resize:"none"}}></textarea>
          <br />
          <button className='btn' type='submit' style={{width:260}}>Add</button>
        </form>
        <br />
        <ToDoList todos={todos} onDelete={handleDelete}/>
      </div>
    </>
  )
}


export default App
