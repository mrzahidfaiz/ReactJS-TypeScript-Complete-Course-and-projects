
import { useContext } from 'react'
import LoginForm from '../loginForm/LoginForm'
import Todo from '../todo/Todo'
import AuthContext from '../../contexts/AuthContext'

function AuthHandler() {
    const authCtx = useContext(AuthContext);
  return (
    <div>
         {authCtx.isLoggedIn ? (
        <Todo />
      ) : (
        <LoginForm />
      )}
    </div>
  )
}

export default AuthHandler