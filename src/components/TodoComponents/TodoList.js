import React from 'react';
import "./Todo.scss";
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = props => {
    console.log('TodoList: ', props)
    return (
        <div className='todos'>
            <h1>Todo List</h1>
            <ul>
                {props.list.map((todo, index) => <Todo key={index} todo={todo} completer={props.completer} />)}
            </ul>
            <TodoForm
                todo={props.todo}
                updateList={props.updateList}
                eventHandler={props.eventHandler}
                clearCompleted={props.clearCompleted}
            />
        </div>
    );
}

export default TodoList;