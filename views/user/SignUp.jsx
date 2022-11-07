const React = require('react')
// const LoginOut = require('../layouts/LoginOut')

class SignUp extends React.Component {
  render () {
    return (
      <>
        <form action='/user/signup' method='POST'>
          <input type='text' name='username' placeholder='Username' required />
          <input type='password' name='password' placeholder='Password' required />
          <input type='submit' className='create' value='Create Account' />
        </form>
      </>
    )
  }
}

module.exports = SignUp
