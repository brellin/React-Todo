import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input
                onChange={props.eventHandler}
                name='todo'
                placeholder='Your todo'
                value={props.todo}
            />
            <button onClick={props.updateList}>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    );
}

export default TodoForm;