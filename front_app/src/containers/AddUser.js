import React from 'react'
import { connect } from 'react-redux'
import { createUser } from '../actions'

// AddUserするcontainer
let AddUser = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(createUser(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add User
        </button>
      </form>
    </div>
  )
}
AddUser = connect()(AddUser)

export default AddUser
