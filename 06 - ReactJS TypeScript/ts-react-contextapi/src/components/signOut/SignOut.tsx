import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

function SignOut() {
  const signOutCtx = useContext(AuthContext);
  return (
    <div>
      <button type="button" onClick={() => signOutCtx.isAuthentication(false)}>
        SignOut
      </button>
    </div>
  );
}

export default SignOut;
