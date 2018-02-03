import React from 'react';
import '../styles/Auth.css';
import logo from '../imgs/auth_logo.png';
import axios from 'axios';

export default class Auth extends React.Component {

  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }
    this.login = this.login.bind(this)
    this.register = this.register.bind(this)
  }

  login() {
    const { username, password } = this.state
    axios.post('/api/login', { username, password })
      .then(resp => {
        this.props.history.push('/filter')
      })
      .catch(err => console.log("ERR:", err))
  }

  register() {
    const { username, password } = this.state
    if (!username || !password) return
    axios.post('/api/register', { username, password })
      .then(resp => {
        this.props.history.push('/filter')
      })
      .catch(err => console.log("ERR:", err))
  }

  render() {
    return (
      <div className="Auth">

        <img src={logo} alt="Houser" width="140" />

        <div>Username</div>
        <input type="text" value={this.state.username} onChange={e => this.setState({ username: e.target.value })} />

        <div>Password</div>
        <input type="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />

        <div className="Auth_buttons">
          <button onClick={this.login}>Log In</button>
          <button onClick={this.register}>Register</button>
        </div>

      </div>
    )
  }
}