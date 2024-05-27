import { useState } from "react";

export const ToDoItem = ({id,title,description,completed,onDelete}) => {

    const [isCompleted, setIsCompleted] = useState(completed);
    const handleCheck = () => {
        setIsCompleted(!isCompleted);
    }
    const handleClick = () => {
        onDelete(id); 
    }
    return (
        <div className="full-item">
            <div className="upper-Item">
                <input type="checkbox" checked={isCompleted} onChange={handleCheck}/>
                <h2 className={isCompleted ? 'completado': ''} >{title}</h2>
            </div>
            <p>{description}</p>
            <button style={{height:30}} onClick={handleClick}>Delete</button>
        </div>
    )
}