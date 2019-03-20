import React from 'react';
import './index.css';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDoList: [],
      todo: '',
      id: 0,
      completed: false
    }
  }

  eventHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  updateList = e => {
    e.preventDefault();
    const newTodo = {
      todo: this.state.todo,
      id: Date.now(),
      completed: false
    }

    this.setState({
      toDoList: [...this.state.toDoList, newTodo],
      value: ''
    });
  }

  render() {
    return (
      <div className='container'>
        <TodoList
          name={this.state.todo}
          list={this.state.toDoList}
          updateList={this.updateList}
          eventHandler={this.eventHandler}
        />
      </div>
    );
  }
}

export default App;
