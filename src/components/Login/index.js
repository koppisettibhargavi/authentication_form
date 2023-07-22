import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Login = props => {
  const Token = Cookies.get('jwt_token')
  console.log(Token)
  if (Token !== undefined) {
    return <Redirect to="/" />
  }

  const onSubmitSuccess = jwtToken => {
    const {history} = props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
    console.log(jwtToken)
  }

  const submitForm = async event => {
    event.preventDefault()
    const data = {username: 'rahul', password: `rahul@2021`}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
    }
    const response = await fetch(url, options)
    const dataResponse = await response.json()
    if (response.ok === true) {
      onSubmitSuccess(dataResponse.jwt_token)
    }
  }

  return (
    <div className="login-form-container">
      <h1>Please Login</h1>
      <button type="button" onClick={submitForm}>
        Login with Sample Creds
      </button>
    </div>
  )
}
export default Login
