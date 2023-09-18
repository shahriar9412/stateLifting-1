import React from 'react'
import Todo from './Components/Todo'
import NewTodo from './Components/NewTodo'

const App = () => {
  const handleNewTodo = (newTodo) => {
console.log(newTodo)
  }
  return (
    <div>
      <Todo title='Learn React.js'/>
      <NewTodo onHandleNewTodo={handleNewTodo}/>
    </div>
  )
}
export default App
