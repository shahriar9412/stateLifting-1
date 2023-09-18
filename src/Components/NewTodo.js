import React from 'react'

const NewTodo = (props) => {
    props.onHandleNewTodo({title: 'I am new todo'})
  return (
    <div>
      <h1>NewTodo</h1>
    </div>
  )
}

export default NewTodo
