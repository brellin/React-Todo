import React from 'react';
import styles from './Todo.css';
import TodoForm from './TodoForm';

const Todo = props => {
    return (
        <div className='todos'>
            <h1>Todo List:</h1>
            <TodoForm />
        </div>
    );
}

export default Todo;