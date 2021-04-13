import React from 'react'
import TodoItem from './todoItem'

export default class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.markIsDone = this.markIsDone.bind(this)
    this.state = { todoList: [], loading: false }
  }

  componentDidMount() {
    this.setState({ loading: true })
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => this.setState({ todoList: json, loading: false }));
  }

  markIsDone(todoId) {
    const todoIndex = this.state.todoList.findIndex(todoItem => todoItem.id === todoId)
    const newTodoList = [...this.state.todoList]
    newTodoList[todoIndex].completed = !newTodoList[todoIndex].completed
    this.setState({ todoList: newTodoList })
  }

  render() {
    if (this.state.loading) {
      return (
        <p>Chargement en cours...</p>
      )
    }

    return (
      <div>
        {this.state.todoList.length === 0
          ? <p>Aucune donnée</p> 
          : this.state.todoList.map(todo => 
              <TodoItem 
                key={todo.id}
                id={todo.id}
                title={todo.title} 
                completed={todo.completed} 
                markIsDone={this.markIsDone}
              />
            )}
      </div>
    )
  }
}
