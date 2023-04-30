import React from 'react'

const Todo = ({todo, toggleTodo}) => {
return (
    <div>
        <label>
            <input type="checkbox" checked={todo.completed} readOnly/>
        </label>
        {todo.name}
    </div>
    );
};
export default Todo;