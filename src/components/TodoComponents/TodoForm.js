import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input
                onChange={props.eventHandler}
                name='name'
                placeholder='Your todo'
                value={props.todo.name}
            />
            <button onClick={props.updateList}>Add Todo</button>
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </form>
    );
}

export default TodoForm;