import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input
                todo={props.eventHandler}
            />
        </form>
    );
}

export default TodoForm;