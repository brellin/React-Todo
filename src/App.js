import React from 'react';
import './index.scss';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDoList: [{
        name: 'Null',
        id: 0,
        completed: true
      },
      {
        name: 'Undefined',
        id: 1,
        completed: true
      }],
      todo: {
        name: '',
        id: 0,
        completed: false
      }
    }
  }

  eventHandler = e => {
    this.setState({
      todo: e.target.value
    });
  };

  updateList = e => {
    e.preventDefault();
    const newTodo = {
      name: this.state.todo,
      id: Date.now(),
      completed: false
    }

    this.setState({
      toDoList: [...this.state.toDoList, newTodo]
    });
  }

  completer = e => {
    this.setState({
      toDoList: this.state.toDoList.map(todo => {
        if (todo.id === e.id) {
          return {
            ...e,
            completed: !todo.completed
          }
        }
        return todo;
      })
    });
  }

  clearCompleted = e => {
    e.preventDefault();
    const filteredList = this.state.toDoList.filter(todo => todo.completed === false);
    this.setState({ toDoList: filteredList });
  }

  render() {
    return (
      <div className='container'>
        <TodoList
          todo={this.state.todo}
          list={this.state.toDoList}
          updateList={this.updateList}
          eventHandler={this.eventHandler}
          completer={this.completer}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
