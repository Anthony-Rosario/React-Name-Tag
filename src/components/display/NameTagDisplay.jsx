import React from 'react'
import PropTypes from 'prop-types'
import './App.css'

function NameTagDisplay({ name, greeting }) {
  return (
  <div className="nameTag">
      <h1>{name}</h1>
      <h2>{greeting}</h2>
    </div>
  )
}

NameTagDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  greeting: PropTypes.string.isRequired
}

export default NameTagDisplay;

