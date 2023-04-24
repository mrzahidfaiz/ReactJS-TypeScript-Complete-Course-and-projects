import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";


function LoginForm() {
  const authCtx = useContext(AuthContext);
  return (
    <div>
      <div>Please Login</div>
      <div>
        <button type="button" onClick={()=> authCtx.isAuthentication(true)} >
          Click Me
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
