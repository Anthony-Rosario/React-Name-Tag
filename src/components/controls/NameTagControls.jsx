import React from 'react'
import PropTypes from 'prop-types'

function NameTagControls({ onNameChange, onGreetingChange }) {
  return (
    <form>
      <label htmlFor="username-input">State your Name:</label>
      <input 
        id="username-input"
        type="text"
        onChange={onNameChange}
      />
      <label htmlFor="greeting-input">Greeting Message:</label>
      <input 
        id="greeting-input"
        type="text"
        onChange={onGreetingChange}
      />
    </form>
  )
}

NameTagControls.propTypes = {
  onNameChange: PropTypes.func.isRequired,
  onGreetingChange: PropTypes.func.isRequired
}

export default NameTagControls;

