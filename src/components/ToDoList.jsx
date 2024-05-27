import React from 'react';
import { ToDoItem } from "./ToDoItem";

export const ToDoList = ({todos, onDelete}) => {
    return (
        <div className='list-items'>
            <h1 style={{marginLeft:100}}>To Do List</h1>
            
            <ul>{todos.map(todo => (
                    <li key={todo.key}>
                        
                        <ToDoItem 
                        id={todo.key}
                        title={todo.title} 
                        description={todo.description} 
                        completed={todo.completed}
                        onDelete={onDelete}
                        />

                    </li>
                ))}
            </ul>
        </div>
    )
}