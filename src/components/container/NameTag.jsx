import React, { Component } from 'react'
import NameTagControls from '../controls/NameTagControls'
import NameTagDisplay from '../display/NameTagDisplay'
import './App.css'

export default class NameTag extends Component {
  state = {
    username: '',
    greeting: ''
  }

  handleNameChange = ({ target }) => {
    this.setState({ username: target.value })
  }

  handleGreetingChange = ({ target }) => {
    this.setState({ greeting: target.value })
  }

  handleSubmit = async(e) => {
    e.preventDefault();
    this.setState({username})

  }

  render() {
    const { username, greeting } = this.state;
    return (
      <div>
        <NameTagControls onNameChange={this.handleNameChange} onGreetingChange={this.handleGreetingChange}/>
        <NameTagDisplay name={username} greeting={greeting} />
      </div>
    )
  }
}
