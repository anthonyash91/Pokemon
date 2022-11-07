const React = require('react')
// const LoginOut = require('../layouts/LoginOut')

class Login extends React.Component {
  render () {
    return (
      <>
        <form action='/user/login' method='POST'>
          <input type='text' name='username' placeholder='Username' required />
          <input type='password' name='password' placeholder='Password' required />
          <input type='submit' value='Login' />
        </form>
      </>
    )
  }
}

module.exports = Login
