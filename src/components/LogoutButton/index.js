import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const LogoutButton = props => {
  console.log(props)
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div>
      <button onClick={onClickLogout} type="button">
        Logout
      </button>
    </div>
  )
}
export default withRouter(LogoutButton)
