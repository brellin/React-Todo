import React from 'react';
import styles from './Todo.scss';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className='todos'>
            <h1>Todo List:</h1>
            <ul>
                {props.list.map((arr, index) => <Todo key={index} todo={arr.todo} />)}
            </ul>
            <TodoForm
                name={props.todo}
                updateList={props.updateList}
                eventHandler={props.eventHandler}
            />
        </div>
    );
}

export default TodoList;