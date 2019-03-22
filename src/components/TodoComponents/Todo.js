import React from 'react';


const Todo = props => {
    console.log(props.todo)
    return (
        <li
            className={props.todo.completed === true ? 'completed' : ''}
            onClick={() => props.completer(props.todo)}
        >
            {props.todo.name}
        </li>
    );
}

export default Todo;