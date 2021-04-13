import { useState, useEffect } from 'react'
import TodoItem from './todoItem'

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        setTodoList(json)
        setLoading(false)
      })
  }, []);

  const markIsDone = (todoId) => {
    const todoIndex = todoList.findIndex(todoItem => todoItem.id === todoId)
    const newTodoList = [...todoList]
    newTodoList[todoIndex].completed = !newTodoList[todoIndex].completed
    setTodoList(newTodoList)
  }

  if (loading) {
    return (
      <p>Chargement en cours...</p>
    )
  }

  return (
    <div>
      {todoList.length === 0
        ? <p>Aucune donnée</p> 
        : todoList.map(todo => 
            <TodoItem 
              key={todo.id}
              id={todo.id}
              title={todo.title} 
              completed={todo.completed} 
              markIsDone={markIsDone}
            />
          )}
    </div>
  )
}

export default TodoList
